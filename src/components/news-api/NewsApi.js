import { useEffect, useState } from 'react';

// API key
export const YOUR_API_KEY = 'b09d90056f0cc04361f78e5db3d75dc3';

// Function to fetch news based on country
export const getNews = async (country) => {
  const url = `https://gnews.io/api/v4/search?q=${country}&lang=en&max=6&token=${YOUR_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

// NewsApi component
const NewsApi = ({ country }) => {
  const [news, setNews] = useState([]);

  // Fetch news on mount and when country changes
  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(country);
      setNews(data);
    };
    fetchNews();
  }, [country]);

  return (
    <div>
      <h2>Local Headlines</h2>
      {news && news.length > 0 ? (
        <ul>
          {news.map((article) => (
            <div key={article.url}>
              <img src={article.urlToImage} alt={article.title} />
              <div>
                <h1 href={article.url}>{article.title}</h1>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NewsApi;