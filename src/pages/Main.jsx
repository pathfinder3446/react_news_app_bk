import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";

const Main = () => {
  const [query, setQuery] = useState("breaking-news");
  const [news, setNews] = useState(null);
  
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${query}&page=1&apiKey=${API_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(news);
  }, []);

  return (
    <div>
      <Header 
        setQuery={setQuery} 
        getData={getData} />
      {news?.length > 0 && <NewsCard news={news} />}
    </div>
  );
};

export default Main;
