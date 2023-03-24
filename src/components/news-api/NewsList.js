import { useEffect, useState } from "react";
import { getNews } from "./news-api";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      console.log("Fetched articles:", data);
      setNews(data);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2>Local Headlines</h2>
      <ul>
        {news.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          news
            .filter((article) => article !== null && article !== undefined)
            .slice(0, 6)
            .map((article) => (
              <div key={article?.url}>
                <img
                  src={article?.urlToImage}
                  alt={article?.title || "Article image"}
                />
                <div>
                  <a href={article?.url}>{article?.title}</a>
                  <p>{article?.description}</p>
                </div>
              </div>
            ))
        )}
      </ul>
    </div>
  );
};

export default NewsList;
