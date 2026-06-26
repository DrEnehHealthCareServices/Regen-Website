import { useState } from 'react';
import { Link } from 'react-router-dom';
import staticPosts from '../data/blogPosts.json';
import './BlogList.css';

export default function BlogList() {
  const [posts] = useState(() => {
    if (typeof window === 'undefined') return staticPosts;
    const localPostsStr = localStorage.getItem('regen_blog_posts');
    if (localPostsStr) {
      try {
        const localPosts = JSON.parse(localPostsStr);
        const combined = [...localPosts];
        staticPosts.forEach(sp => {
          if (!combined.some(cp => cp.slug === sp.slug)) {
            combined.push(sp);
          }
        });
        combined.sort((a, b) => new Date(b.date) - new Date(a.date));
        return combined;
      } catch (e) {
        console.error("Error parsing local posts:", e);
        return staticPosts;
      }
    }
    return staticPosts;
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Longevity', 'Cellular Therapy', 'Aesthetics', 'Diagnostics', 'Wellness'];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (post.keywords && post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="blog-list-page">
      {/* 1. Branded Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-container">
          <div className="blog-hero-content anim-fade-up">
            <h1 className="blog-hero-title">
              Empowering Longevity <br />Through Scientific Research
            </h1>
            <p className="blog-hero-desc">
              Explore evidence-based insights, expert opinions, and deep dives into cellular therapy,
              peptide solutions, longevity research, and medical aesthetics compiled by our clinical team.
            </p>
          </div>
        </div>
      </section>

      <div className="blog-container">
        {/* 2. Controls Section (Search & Filter) */}
        <section className="blog-controls anim-fade-up">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search articles by title, keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="category-pills">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Featured Post Highlight */}
        {featuredPost && searchQuery === '' && (
          <section className="featured-section anim-fade-up">
            <Link to={`/blog/${featuredPost.slug}`} className="featured-card">
              <div className="featured-img-wrapper">
                <img src={featuredPost.image} alt={featuredPost.title} />
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-summary">{featuredPost.summary}</p>
                <div className="post-meta">
                  <span className="post-author">By {featuredPost.author}</span>
                  <span className="meta-dot"></span>
                  <span className="post-date">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="meta-dot"></span>
                  <span className="post-read-time">{featuredPost.readTime}</span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* 4. Grid of Articles */}
        <section className="articles-grid-section">
          {filteredPosts.length === 0 ? (
            <div className="no-articles anim-fade-up">
              <h3>No articles found</h3>
              <p>We couldn't find any articles matching your filters. Try clearing your search query or selecting a different category.</p>
            </div>
          ) : (
            <div className="articles-grid">
              {/* If featured post was hidden (e.g. during search), show all posts in grid. Otherwise, show remaining. */}
              {(searchQuery !== '' ? filteredPosts : remainingPosts).map((post, idx) => (
                <article key={idx} className="article-card anim-fade-up">
                  <Link to={`/blog/${post.slug}`} className="card-link">
                    <div className="card-image">
                      <img src={post.image} alt={post.title} />
                      <span className="post-category-tag">{post.category}</span>
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-summary">{post.summary}</p>
                      <div className="post-meta">
                        <span className="post-author">By {post.author}</span>
                        <span className="meta-dot"></span>
                        <span className="post-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span className="meta-dot"></span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
