import { useState, useEffect } from 'react';

const FetchSummary = ({ country }) => {
  const [summary, setSummary] = useState('');

  useEffect(() => {
    const apiUrl = `http://api.geonames.org/wikipediaSearchJSON?q=${country}&maxRows=1&username=skhan`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.geonames.length > 0) {
          setSummary(data.geonames[0].summary);
        } else {
          setSummary('No summary found');
        }
      })
      .catch(error => console.error(error));
  }, [country]);

  return <p>{summary}</p>;
};

export default FetchSummary;
