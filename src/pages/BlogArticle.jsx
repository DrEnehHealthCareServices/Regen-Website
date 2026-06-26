import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import staticPosts from '../data/blogPosts.json';
import './BlogArticle.css';

export default function BlogArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    // Merge localStorage drafts to test preview
    let selectedPost = null;
    const localPostsStr = localStorage.getItem('regen_blog_posts');
    if (localPostsStr) {
      try {
        const localPosts = JSON.parse(localPostsStr);
        selectedPost = localPosts.find(p => p.slug === slug);
      } catch (e) {
        console.error("Error parsing local posts:", e);
      }
    }
    if (!selectedPost) {
      selectedPost = staticPosts.find(p => p.slug === slug);
    }
    setPost(selectedPost);

    // Extract headings for Table of Contents
    if (selectedPost && selectedPost.content) {
      const headings = [];
      const lines = selectedPost.content.split('\n');
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('### ')) {
          const text = trimmed.replace('### ', '');
          const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
          headings.push({ text, id, level: 3 });
        } else if (trimmed.startsWith('## ')) {
          const text = trimmed.replace('## ', '');
          const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
          headings.push({ text, id, level: 2 });
        }
      });
      setToc(headings);
    }
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="article-not-found">
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist or may have been moved.</p>
        <Link to="/blog" className="btn-back">Back to Blog</Link>
      </div>
    );
  }

  // Helper to parse simple markdown markers
  const renderContent = (text) => {
    if (!text) return null;
    const lines = text.split('\n');
    let insideList = false;
    let listItems = [];
    const elements = [];

    const flushList = (key) => {
      if (listItems.length > 0) {
        elements.push(<ul key={`list-${key}`} className="article-ul">{listItems}</ul>);
        listItems = [];
        insideList = false;
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('### ')) {
        flushList(idx);
        const textVal = trimmed.replace('### ', '');
        const id = textVal.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        elements.push(<h3 key={idx} id={id} className="article-h3">{textVal}</h3>);
      } else if (trimmed.startsWith('## ')) {
        flushList(idx);
        const textVal = trimmed.replace('## ', '');
        const id = textVal.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        elements.push(<h2 key={idx} id={id} className="article-h2">{textVal}</h2>);
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        insideList = true;
        let itemText = trimmed.slice(2);
        const boldRegex = /\*\*(.*?)\*\*/g;
        itemText = itemText.replace(boldRegex, '<strong>$1</strong>');
        listItems.push(<li key={`li-${idx}`} className="article-li" dangerouslySetInnerHTML={{ __html: itemText }} />);
      } else if (trimmed.match(/^\d+\.\s/)) {
        insideList = true;
        let itemText = trimmed.replace(/^\d+\.\s/, '');
        const boldRegex = /\*\*(.*?)\*\*/g;
        itemText = itemText.replace(boldRegex, '<strong>$1</strong>');
        listItems.push(<li key={`li-${idx}`} className="article-ol-li" dangerouslySetInnerHTML={{ __html: itemText }} />);
      } else if (trimmed === '') {
        flushList(idx);
        elements.push(<div key={`spacing-${idx}`} className="article-paragraph-spacing" />);
      } else {
        flushList(idx);
        let htmlContent = trimmed;
        const boldRegex = /\*\*(.*?)\*\*/g;
        htmlContent = htmlContent.replace(boldRegex, '<strong>$1</strong>');
        elements.push(<p key={idx} className="article-p" dangerouslySetInnerHTML={{ __html: htmlContent }} />);
      }
    });

    flushList(lines.length);
    return elements;
  };

  return (
    <div className="blog-article-page">
      {/* Reading Progress Bar */}
      <div 
        className="reading-progress" 
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <div className="article-wrapper">
        {/* Back Link */}
        <Link to="/blog" className="back-link">
          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          Back to Articles
        </Link>

        {/* Header Block */}
        <header className="article-header">
          <span className="post-category">{post.category}</span>
          <h1 className="article-title">{post.title}</h1>
          
          <div className="author-card">
            <div className="author-avatar">
              {post.author.charAt(0)}
            </div>
            <div className="author-info">
              <span className="author-name">Written by {post.author}</span>
              <div className="meta-row">
                <time className="post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span className="meta-divider"></span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="article-cover">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Layout Grid (Main Content & Sidebar) */}
        <div className="article-grid">
          {/* Main Body Column */}
          <main className="article-body">
            {renderContent(post.content)}

            {/* Backlinks / Reference Section */}
            {post.backlinks && post.backlinks.length > 0 && (
              <section className="article-backlinks">
                <h4>Related Clinical Resources</h4>
                <ul>
                  {post.backlinks.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.url} className="backlink-item">
                        {link.text}
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </main>

          {/* Sidebar Column */}
          <aside className="article-sidebar">
            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="sidebar-widget toc-widget">
                <h4 className="widget-title">Table of Contents</h4>
                <nav className="toc-links">
                  {toc.map((heading, idx) => (
                    <a 
                      key={idx} 
                      href={`#${heading.id}`}
                      className={`toc-link level-${heading.level}`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Branded CTA Widget */}
            <div className="sidebar-widget cta-widget">
              <h3>Start Your Longevity Journey</h3>
              <p>Schedule a personalized consultation at our Lagos clinic to discuss regenerative diagnostics, cellular therapies, and longevity protocols.</p>
              
              <div className="cta-contacts">
                <a href="tel:+2347060643156" className="cta-contact-btn">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Call +234 706 064 3156
                </a>
                
                <a href="https://wa.me/2347060643156" target="_blank" rel="noopener noreferrer" className="cta-contact-btn whatsapp">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <Link to="/contact" className="btn-sidebar-appointment">Book Appointment</Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
