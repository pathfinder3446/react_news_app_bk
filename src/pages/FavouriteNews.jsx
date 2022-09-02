import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const FavouriteNews = ({favorite, setFavorite}) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleClicked = ()=>{
    setFavorite(false)
  }
  console.log(favorite)
  return (
    <div className='d-flex justify-content-center'>
      {favorite === true &&
        <Card style={{ margin: "1rem", width: "20rem" }}>
        <Card.Img variant="top" src={state.urlToImage} />
        <Card.Body>
          <Card.Title>{state.title}</Card.Title>
          <Card.Text>{state.content}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{state.publishedAt}</ListGroup.Item>
          <ListGroup.Item>{state.source.name}</ListGroup.Item>
        </ListGroup>
        <Card.Body className='d-flex justify-content-between'>
          <Button onClick={() => navigate(-1)}>
            Ayrıntılar
          </Button>
          <Button onClick={handleClicked}>
            Favorilerden Çıkar
          </Button>
        </Card.Body>
      </Card>
      }

    </div>
  )
}

export default FavouriteNews