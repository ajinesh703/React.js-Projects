import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_ API_ KEY');
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="app-container">
      <h1>News Aggregator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="articles-container">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              {article.urlToImage && <img src={article.urlToImage} alt="Article visual" />}
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

