import { useEffect, useState } from "react";
import "../news-api/NewsApi.css";
import { Grid } from "@mui/material";

// API key
export const YOUR_API_KEY = "ae8631cbf48436eab7deeed1a6bd5a54";

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
      <h2>Local headlines</h2>
      <Grid container spacing={2}>
        {news && news.length > 0 ? (
          news.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.url}>
              <div>
                <img className = 'newsImage'src={article.image} alt={article.title} />
                <div>
                  <h3>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </h3>
                  <p>{article.description}</p>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default NewsApi;
