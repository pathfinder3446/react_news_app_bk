import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const NewsDetail = ({favorite, setFavorite}) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(favorite);
  const handleFavorite = () =>{
    setFavorite(true)
  }
  return (
    <div className="detail-container">
      <div className="detail-items">
        <img className="detail-img" src={state.urlToImage} alt="" />
        <h4>{state.title}</h4>
      </div>
      <div className="detail-article">
        <p>{state.content}</p>
      </div>
      <div className="btn-container gap-4">
      
        <div>
          <Button variant="primary">Paylaş</Button>
        </div>
        <div>
          <Button onClick={() => handleFavorite(navigate("favourites", { state: state }))} variant="success">Favorilere Ekle</Button>
        </div>
        <div>
          <Button  variant="link" onClick={() => navigate("source", { state: state })}>Haber Kaynağına Git</Button>
        </div>
      
      </div>
    </div>
  );
};

export default NewsDetail;
