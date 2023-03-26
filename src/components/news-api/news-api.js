export const YOUR_API_KEY = 'pub_19333f1935fecbdb4dd40462af8d3decc9244';

export const getNews = async () => {
  const url = `https://newsdata.io/api/1/news?apikey=${YOUR_API_KEY}&country=au,ca`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
  
};
