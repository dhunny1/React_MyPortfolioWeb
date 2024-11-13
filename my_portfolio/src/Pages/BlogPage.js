import React from 'react';
import './Page.css';

function BlogPage() {
  return (
    <div className="container">
      <main className="main-content">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
        <div className="main-content-bottom">
            <h2>Side Content</h2>
            <p>This is some side content.</p>
          </div>        
      </main>
      
      
      
      <aside className="sidebar">
        <div className="side-content-box">
          <h2>Side Content</h2>
          <p>This is some side content.</p>
        </div>
        <div className="side-content-box">
          <h2>Side Content</h2>
          <p>This is some side content.</p>
        </div>
        <div className="side-content-box">
          <h2>Side Content</h2>
          <p>This is some side content.</p>
        </div>
        <div className="side-content-box">
          <h2>Side Content</h2>
          <p>This is some side content.</p>
        </div>
      </aside>
    </div>
    
  )
}

export default BlogPage
