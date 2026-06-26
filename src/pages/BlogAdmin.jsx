import { useState, useEffect } from 'react';
import staticPosts from '../data/blogPosts.json';
import './BlogAdmin.css';

export default function BlogAdmin() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    id: '',
    slug: '',
    title: '',
    summary: '',
    content: '',
    category: 'Longevity',
    author: 'Dr. Eneh',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    image: '/assets/5/Cellular Therapy.png',
    metaDescription: '',
    keywords: '',
    backlinks: '[{"text": "Cellular Therapy Services", "url": "/services/cellular-therapy"}]'
  });
  
  const [activeTab, setActiveTab] = useState('editor'); // editor, list
  const [previewMode, setPreviewMode] = useState(false); // side-by-side or form
  const [seoReport, setSeoReport] = useState({ score: 0, rules: [] });
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  // Load merged database on mount
  useEffect(() => {
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
        setPosts(combined);
      } catch (e) {
        setPosts(staticPosts);
      }
    } else {
      setPosts(staticPosts);
    }
  }, []);

  // Run SEO Audit whenever currentPost changes
  useEffect(() => {
    runSeoAudit();
  }, [currentPost]);

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost(prev => {
      const updated = { ...prev, [name]: value };
      
      // Auto-generate slug from title
      if (name === 'title' && !prev.id) {
        updated.slug = value
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
      }
      
      // Auto-calculate read time based on word count (avg 200 wpm)
      if (name === 'content') {
        const words = value.trim().split(/\s+/).filter(w => w.length > 0).length;
        const mins = Math.max(1, Math.round(words / 200));
        updated.readTime = `${mins} min read`;
      }
      
      return updated;
    });
  };

  // Run real-time SEO Auditor
  const runSeoAudit = () => {
    const rules = [];
    let score = 100;

    const { title, slug, summary, content, image, metaDescription, keywords, backlinks } = currentPost;

    // 1. Title Length Audit (15 pts)
    const titleLen = title.length;
    if (titleLen >= 50 && titleLen <= 60) {
      rules.push({ name: 'Title length (50-60 characters)', status: 'pass', desc: `Excellent! Current length: ${titleLen} characters.` });
    } else {
      score -= 15;
      rules.push({ 
        name: 'Title length (50-60 characters)', 
        status: 'fail', 
        desc: `Needs adjustment. Current length: ${titleLen} characters. (Keep between 50 and 60 chars for search result titles).` 
      });
    }

    // 2. Meta Description Length Audit (15 pts)
    const descLen = metaDescription.length;
    if (descLen >= 120 && descLen <= 160) {
      rules.push({ name: 'Meta Description length (120-160 characters)', status: 'pass', desc: `Excellent! Current length: ${descLen} characters.` });
    } else {
      score -= 15;
      rules.push({ 
        name: 'Meta Description length (120-160 characters)', 
        status: 'fail', 
        desc: `Current length: ${descLen} characters. (Keep between 120 and 160 chars so it does not get truncated in search snippets).` 
      });
    }

    // 3. Slug structure audit (10 pts)
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    if (slugRegex.test(slug)) {
      rules.push({ name: 'URL Slug structure', status: 'pass', desc: `Clean and readable URL: /blog/${slug}` });
    } else {
      score -= 10;
      rules.push({ 
        name: 'URL Slug structure', 
        status: 'fail', 
        desc: 'Slug must contain only lowercase letters, numbers, and hyphens (e.g. cellular-restoration).' 
      });
    }

    // 4. Content Word Count (20 pts)
    const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount >= 600) {
      rules.push({ name: 'Article Word Count (min 600 words)', status: 'pass', desc: `Excellent! Current word count: ${wordCount} words.` });
    } else {
      score -= 20;
      rules.push({ 
        name: 'Article Word Count (min 600 words)', 
        status: 'fail', 
        desc: `Currently: ${wordCount} words. Longer articles (600+ words) rank significantly higher on Google search results.` 
      });
    }

    // 5. Backlinks Audit (15 pts)
    let linksCount = 0;
    try {
      const parsedLinks = JSON.parse(backlinks);
      linksCount = Array.isArray(parsedLinks) ? parsedLinks.length : 0;
    } catch (err) {
      // Ignore link parsing errors during typing
    }
    
    if (linksCount >= 2) {
      rules.push({ name: 'Internal referencing / Backlinks', status: 'pass', desc: `Excellent! Found ${linksCount} related clinical resource links.` });
    } else {
      score -= 15;
      rules.push({ 
        name: 'Internal referencing / Backlinks', 
        status: 'fail', 
        desc: `Found ${linksCount} links. (Add at least 2 links to related services or pages to boost search page rank).` 
      });
    }

    // 6. Focus Keywords Integration (25 pts)
    const keywordList = keywords.split(',').map(k => k.trim()).filter(k => k.length > 0);
    if (keywordList.length > 0) {
      const mainKeyword = keywordList[0].toLowerCase();
      
      // Keyword in Title (10 pts)
      const inTitle = title.toLowerCase().includes(mainKeyword);
      if (inTitle) {
        rules.push({ name: 'Focus keyword in Title', status: 'pass', desc: `Perfect! Title contains main keyword: "${mainKeyword}".` });
      } else {
        score -= 10;
        rules.push({ name: 'Focus keyword in Title', status: 'fail', desc: `Add your primary focus keyword "${mainKeyword}" inside the page title.` });
      }
      
      // Keyword in Slug (5 pts)
      const inSlug = slug.toLowerCase().includes(mainKeyword.replace(/\s+/g, '-'));
      if (inSlug) {
        rules.push({ name: 'Focus keyword in URL Slug', status: 'pass', desc: `Perfect! Slug contains main keyword: "${mainKeyword}".` });
      } else {
        score -= 5;
        rules.push({ name: 'Focus keyword in URL Slug', status: 'fail', desc: `Add your main focus keyword "${mainKeyword}" in the URL slug.` });
      }
      
      // Keyword in Meta Description (5 pts)
      const inDesc = metaDescription.toLowerCase().includes(mainKeyword);
      if (inDesc) {
        rules.push({ name: 'Focus keyword in Meta Description', status: 'pass', desc: `Perfect! Meta description contains: "${mainKeyword}".` });
      } else {
        score -= 5;
        rules.push({ name: 'Focus keyword in Meta Description', status: 'fail', desc: `Include your focus keyword "${mainKeyword}" inside the meta description.` });
      }

      // Keyword in first paragraph (5 pts)
      const firstParagraph = content.slice(0, 400).toLowerCase();
      const inFirstPara = firstParagraph.includes(mainKeyword);
      if (inFirstPara) {
        rules.push({ name: 'Focus keyword in Intro Paragraph', status: 'pass', desc: `Perfect! Main keyword is found in first 400 chars.` });
      } else {
        score -= 5;
        rules.push({ name: 'Focus keyword in Intro Paragraph', status: 'fail', desc: `Introduce your focus keyword "${mainKeyword}" inside the first paragraph.` });
      }
    } else {
      score -= 25;
      rules.push({ 
        name: 'Focus keywords declared', 
        status: 'fail', 
        desc: 'Specify at least one primary keyword to validate focus keyword density (e.g. NAD+ therapy).' 
      });
    }

    setSeoReport({ score: Math.max(0, score), rules });
  };

  // Save changes to localStorage database
  const handleSavePost = (e) => {
    e.preventDefault();
    if (!currentPost.title || !currentPost.slug || !currentPost.content) {
      showStatus('Please fill in the title, slug, and content fields.', 'error');
      return;
    }

    let parsedBacklinks = [];
    try {
      parsedBacklinks = JSON.parse(currentPost.backlinks);
    } catch(e) {
      showStatus('Invalid Backlinks JSON format. Please format as: [{"text": "Name", "url": "/url"}]', 'error');
      return;
    }

    const savedPost = {
      ...currentPost,
      id: currentPost.id || Date.now(),
      keywords: currentPost.keywords.split(',').map(k => k.trim()).filter(k => k.length > 0),
      backlinks: parsedBacklinks
    };

    // Update database array
    let updatedPosts;
    const localPostsStr = localStorage.getItem('regen_blog_posts');
    let localPosts = [];
    if (localPostsStr) {
      try { 
        localPosts = JSON.parse(localPostsStr); 
      } catch (err) { 
        console.error("Error reading local posts drafts:", err); 
      }
    }

    const existingLocalIdx = localPosts.findIndex(p => p.slug === savedPost.slug);
    if (existingLocalIdx >= 0) {
      localPosts[existingLocalIdx] = savedPost;
    } else {
      localPosts.push(savedPost);
    }

    localStorage.setItem('regen_blog_posts', JSON.stringify(localPosts));

    // Update state combined array
    updatedPosts = [...localPosts];
    staticPosts.forEach(sp => {
      if (!updatedPosts.some(cp => cp.slug === sp.slug)) {
        updatedPosts.push(sp);
      }
    });
    updatedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setPosts(updatedPosts);
    setCurrentPost(prev => ({ ...prev, id: savedPost.id }));
    showStatus('Post saved locally! Click "Download Database" to save to files.', 'success');
  };

  const handleEditSelect = (post) => {
    setCurrentPost({
      id: post.id || 'static',
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      content: post.content,
      category: post.category,
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      image: post.image,
      metaDescription: post.metaDescription || '',
      keywords: Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords || '',
      backlinks: JSON.stringify(post.backlinks || [])
    });
    setActiveTab('editor');
  };

  const handleCreateNew = () => {
    setCurrentPost({
      id: '',
      slug: '',
      title: '',
      summary: '',
      content: '',
      category: 'Longevity',
      author: 'Dr. Eneh',
      date: new Date().toISOString().split('T')[0],
      readTime: '1 min read',
      image: '/assets/5/Cellular Therapy.png',
      metaDescription: '',
      keywords: '',
      backlinks: '[{"text": "Cellular Therapy Services", "url": "/services/cellular-therapy"}]'
    });
    setActiveTab('editor');
  };

  const handleDeletePost = (slugToDelete) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    const localPostsStr = localStorage.getItem('regen_blog_posts');
    if (localPostsStr) {
      try {
        let localPosts = JSON.parse(localPostsStr);
        localPosts = localPosts.filter(p => p.slug !== slugToDelete);
        localStorage.setItem('regen_blog_posts', JSON.stringify(localPosts));
        
        // Re-merge
        const combined = [...localPosts];
        staticPosts.forEach(sp => {
          if (!combined.some(cp => cp.slug === sp.slug) && sp.slug !== slugToDelete) {
            combined.push(sp);
          }
        });
        combined.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(combined);
        showStatus('Post deleted from local drafts.', 'success');
      } catch (err) {
        console.error("Error deleting local draft:", err);
      }
    }
  };

  const showStatus = (text, type) => {
    setStatusMsg({ text, type });
    setTimeout(() => setStatusMsg({ text: '', type: '' }), 5000);
  };

  // Copy entire database as JSON to Clipboard
  const handleCopyJson = () => {
    // Format appropriately before outputting
    const formatted = posts.map(p => ({
      id: typeof p.id === 'number' ? p.id : undefined,
      slug: p.slug,
      title: p.title,
      summary: p.summary,
      content: p.content,
      category: p.category,
      author: p.author,
      date: p.date,
      readTime: p.readTime,
      image: p.image,
      metaDescription: p.metaDescription,
      keywords: Array.isArray(p.keywords) ? p.keywords : String(p.keywords).split(',').map(k => k.trim()),
      backlinks: typeof p.backlinks === 'string' ? JSON.parse(p.backlinks) : p.backlinks
    })).map((p, idx) => ({ ...p, id: p.id || idx + 1 }));

    navigator.clipboard.writeText(JSON.stringify(formatted, null, 2))
      .then(() => showStatus('JSON database copied to clipboard!', 'success'))
      .catch(() => showStatus('Failed to copy JSON.', 'error'));
  };

  // Download entire database as blogPosts.json
  const handleDownloadJson = () => {
    const formatted = posts.map(p => ({
      id: typeof p.id === 'number' ? p.id : undefined,
      slug: p.slug,
      title: p.title,
      summary: p.summary,
      content: p.content,
      category: p.category,
      author: p.author,
      date: p.date,
      readTime: p.readTime,
      image: p.image,
      metaDescription: p.metaDescription,
      keywords: Array.isArray(p.keywords) ? p.keywords : String(p.keywords).split(',').map(k => k.trim()),
      backlinks: typeof p.backlinks === 'string' ? JSON.parse(p.backlinks) : p.backlinks
    })).map((p, idx) => ({ ...p, id: p.id || idx + 1 }));

    const blob = new Blob([JSON.stringify(formatted, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blogPosts.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showStatus('blogPosts.json downloaded successfully!', 'success');
  };

  return (
    <div className="blog-admin-page">
      <div className="admin-container">
        {/* Admin Header */}
        <header className="admin-header">
          <div className="admin-header-title">
            <span className="admin-badge">ADMIN PORTAL</span>
            <h1>ReGen Blog Manager</h1>
            <p>Author and review SEO-optimized articles. Export results directly to the codebase.</p>
          </div>
          
          <div className="admin-actions">
            <button className="btn-admin-nav" onClick={handleCreateNew}>New Post</button>
            <button className="btn-admin-nav outline" onClick={handleDownloadJson}>Download Database</button>
            <button className="btn-admin-nav outline" onClick={handleCopyJson}>Copy Database JSON</button>
          </div>
        </header>

        {/* Tab Selection */}
        <nav className="admin-tabs">
          <button 
            className={`admin-tab ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            Post Editor & SEO Auditor
          </button>
          <button 
            className={`admin-tab ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            Article List ({posts.length})
          </button>
        </nav>

        {statusMsg.text && (
          <div className={`status-banner ${statusMsg.type}`}>
            {statusMsg.text}
          </div>
        )}

        {/* TAB 1: EDITOR */}
        {activeTab === 'editor' && (
          <div className="editor-grid">
            {/* Form Column */}
            <form className="post-form-card" onSubmit={handleSavePost}>
              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="title">Post Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={currentPost.title}
                    onChange={handleInputChange}
                    placeholder="e.g. The Future of Longevity: NAD+ Therapy"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug">URL Slug</label>
                  <input 
                    type="text" 
                    id="slug" 
                    name="slug"
                    value={currentPost.slug}
                    onChange={handleInputChange}
                    placeholder="e.g. future-of-longevity-nad-therapy"
                    required
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select 
                    id="category" 
                    name="category"
                    value={currentPost.category}
                    onChange={handleInputChange}
                  >
                    <option value="Longevity">Longevity</option>
                    <option value="Cellular Therapy">Cellular Therapy</option>
                    <option value="Aesthetics">Aesthetics</option>
                    <option value="Diagnostics">Diagnostics</option>
                    <option value="Wellness">Wellness</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="author">Author</label>
                  <input 
                    type="text" 
                    id="author" 
                    name="author"
                    value={currentPost.author}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="date">Publish Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date"
                    value={currentPost.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Cover Image Link</label>
                  <select 
                    id="image" 
                    name="image"
                    value={currentPost.image}
                    onChange={handleInputChange}
                  >
                    <option value="/assets/5/Cellular Therapy.png">Cellular Therapy (Stem cells background)</option>
                    <option value="/assets/5/Mask group-1.png">Consultation Room background</option>
                    <option value="/assets/4/Services.png">Services Grid background</option>
                    <option value="/assets/12/IV Drip Therapy.png">IV Drip Therapy background</option>
                    <option value="/assets/13/Diagnostics.png">Diagnostics background</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="summary">Post Summary (used in card previews)</label>
                <textarea 
                  id="summary" 
                  name="summary"
                  value={currentPost.summary}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Provide a concise 1-2 sentence overview of the article..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="metaDescription">SEO Meta Description (for search engines)</label>
                <textarea 
                  id="metaDescription" 
                  name="metaDescription"
                  value={currentPost.metaDescription}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Enter a descriptive snippet containing the focus keyword (120-160 characters)..."
                />
              </div>

              <div className="form-row-grid">
                <div className="form-group">
                  <label htmlFor="keywords">Focus Keywords (comma-separated, first is main keyword)</label>
                  <input 
                    type="text" 
                    id="keywords" 
                    name="keywords"
                    value={currentPost.keywords}
                    onChange={handleInputChange}
                    placeholder="e.g. NAD+ therapy, longevity, cell repair"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="backlinks">Backlinks / Clinical References (JSON array)</label>
                  <input 
                    type="text" 
                    id="backlinks" 
                    name="backlinks"
                    value={currentPost.backlinks}
                    onChange={handleInputChange}
                    placeholder='e.g. [{"text": "PRP Services", "url": "/services/cellular-therapy"}]'
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="editor-label-row">
                  <label htmlFor="content">Article Body Content (Markdown supported)</label>
                  <button 
                    type="button" 
                    className="btn-preview-toggle" 
                    onClick={() => setPreviewMode(!previewMode)}
                  >
                    {previewMode ? 'Edit Mode' : 'Split Live Preview'}
                  </button>
                </div>
                
                <div className={`editor-content-container ${previewMode ? 'split' : ''}`}>
                  <textarea 
                    id="content" 
                    name="content"
                    value={currentPost.content}
                    onChange={handleInputChange}
                    rows="15"
                    placeholder="Write your article here. Use '### Heading' for sections, '**text**' for bold, and '-' for lists..."
                    required
                  />
                  
                  {previewMode && (
                    <div className="live-preview-box article-body">
                      <h3>{currentPost.title || 'Untitled Post'}</h3>
                      <div className="preview-meta">
                        <span>By {currentPost.author}</span> | <span>{currentPost.readTime}</span>
                      </div>
                      <hr style={{ margin: '15px 0', opacity: 0.15 }} />
                      <div className="rendered-preview-content">
                        {currentPost.content ? (
                          currentPost.content.split('\n').map((line, idx) => {
                            if (line.trim().startsWith('### ')) return <h3 key={idx}>{line.trim().replace('### ', '')}</h3>;
                            if (line.trim().startsWith('## ')) return <h2 key={idx}>{line.trim().replace('## ', '')}</h2>;
                            if (line.trim().startsWith('- ')) return <li key={idx} style={{marginLeft: '15px'}}>{line.trim().slice(2)}</li>;
                            if (line.trim() === '') return <div key={idx} style={{height: '10px'}} />;
                            let html = line;
                            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                            return <p key={idx} dangerouslySetInnerHTML={{__html: html}} />;
                          })
                        ) : (
                          <p style={{color: '#999', fontStyle: 'italic'}}>Start typing to see live rendering...</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="btn-save-draft">Save Draft locally</button>
            </form>

            {/* SEO Auditor Column */}
            <aside className="seo-sidebar">
              <div className="seo-score-widget">
                <div className="score-ring-container">
                  <div className={`score-ring ${seoReport.score >= 80 ? 'green' : seoReport.score >= 50 ? 'orange' : 'red'}`}>
                    <span className="score-num">{seoReport.score}</span>
                    <span className="score-label">SEO SCORE</span>
                  </div>
                </div>
                
                <h4 style={{ textAlign: 'center', marginBottom: '16px', color: '#0f2435' }}>
                  {seoReport.score === 100 ? 'SEO Optimization Perfect!' : seoReport.score >= 80 ? 'SEO Optimization Good' : 'Needs Optimization'}
                </h4>
              </div>

              <div className="seo-rules-list">
                <h4 className="rules-title">SEO Auditor Checklist</h4>
                {seoReport.rules.map((rule, idx) => (
                  <div key={idx} className={`seo-rule-item ${rule.status}`}>
                    <div className="rule-header">
                      <span className="rule-bullet"></span>
                      <span className="rule-name">{rule.name}</span>
                    </div>
                    <p className="rule-desc">{rule.desc}</p>
                  </div>
                ))}
              </div>

              <div className="deployment-instructions">
                <h4>GitHub Deployment Guide</h4>
                <ol>
                  <li>Complete writing your post and verify it has an **SEO Score above 80**.</li>
                  <li>Click **"Save Draft locally"** to store your current changes in the browser.</li>
                  <li>Click the **"Download Database"** button in the header. This generates a file named `blogPosts.json`.</li>
                  <li>In your file system, replace the existing database file:
                      <br /><code className="code-path">src/data/blogPosts.json</code>
                  </li>
                  <li>Commit and push the code changes to GitHub. The static site will pre-render your new page automatically!</li>
                </ol>
              </div>
            </aside>
          </div>
        )}

        {/* TAB 2: ARTICLE LIST */}
        {activeTab === 'list' && (
          <section className="admin-list-section">
            {posts.length === 0 ? (
              <div className="empty-list">
                <h3>No articles inside the database</h3>
                <p>Click "New Post" to create your first clinical article.</p>
              </div>
            ) : (
              <div className="admin-articles-list">
                {posts.map((post, idx) => (
                  <div key={idx} className="admin-article-row">
                    <div className="row-image">
                      <img src={post.image} alt="" />
                    </div>
                    <div className="row-content">
                      <span className="row-category">{post.category}</span>
                      <h3>{post.title}</h3>
                      <div className="row-meta">
                        <span>Date: {post.date}</span>
                        <span className="meta-divider"></span>
                        <span>Author: {post.author}</span>
                        <span className="meta-divider"></span>
                        <span>Slug: {post.slug}</span>
                      </div>
                    </div>
                    <div className="row-actions">
                      <button className="btn-row-action" onClick={() => handleEditSelect(post)}>Edit</button>
                      <button className="btn-row-action delete" onClick={() => handleDeletePost(post.slug)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
