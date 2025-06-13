import React, { useEffect, useState } from 'react';
import './Articles.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articleFiles = ['blog1.md', 'blog2.md', 'blog3.md', 'blog4.md'];
      const fetchedArticles = await Promise.all(
        articleFiles.map(async (file) => {
          const response = await fetch(`/blogs/${file}`);
          const content = await response.text();
          return { title: file.replace('.md', ''), content: content.slice(0, 150) + '...' };
        })
      );
      setArticles(fetchedArticles);
    };
    fetchArticles();
  }, []);

  return (
    <section id="articles">
      <h2>Articles</h2>
      <div className="article-grid">
        {articles.map((article, index) => (
          <div className="article-box" key={index}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
