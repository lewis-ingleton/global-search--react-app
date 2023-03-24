export const API_KEY = "c26e57a19d564234aec5e4472089ae9c";

export const getNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return [];
  }
};
