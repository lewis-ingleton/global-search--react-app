import { useEffect, useState } from 'react';
//import { getNews } from './news-api';

export const YOUR_API_KEY = 'b09d90056f0cc04361f78e5db3d75dc3';

export const getNews = async () => {
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&max=10&country=au&token=${YOUR_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
  
};


const NewsApi = () => {
  // Set up a state variable called "news" and initialize it to an empty array
  const [news, setNews] = useState([]);

  // Use the useEffect hook to fetch the news data from the API when the component mounts
  useEffect(() => {
    // Define an async function called "fetchNews" that fetches the news data using the getNews function
    const fetchNews = async () => {
      const data = await getNews();
      // Update the "news" state variable with the fetched news data
      setNews(data);
    };
    // Call the "fetchNews" function
    fetchNews();
  }, []);

  // Render the news articles in a list
  return (
    <div>
      <h2>Local Headlines</h2>
      {/* Check if the "news" array exists and has at least one item */}
      {news && news.length > 0 ? (
        <ul>
          {/* Use the "map" method to iterate over the "news" array and render each news article */}
          {news.map((article) => (
            <div key={article.url}>
              <img src={article.urlToImage} alt={article.title} />
              <div>
                <a href={article.url}>{article.title}</a>
                <p>{article.description}</p>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        // Display a "Loading..." message if the "news" array is empty or undefined
        <p>Loading...</p>
      )}
    </div>
  );
};

// Export the NewsList component
export default NewsApi;


