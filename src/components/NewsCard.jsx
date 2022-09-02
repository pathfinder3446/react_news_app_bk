import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  console.log(news);
  return (
    <div className="cardcontainer mt-4">
      {news.map((i, index) => (
        <Card className="card" key={index} style={{ margin: "1rem", width: "18rem" }}>
          <Card.Img variant="top" src={i.urlToImage} />
          <Card.Body>
            <Card.Title>{i.title}</Card.Title>
            <Card.Text>{i.content}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{i.publishedAt}</ListGroup.Item>
            <ListGroup.Item>{i.source.name}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button onClick={() => navigate("details", { state: i })}>
              Ayrıntılar
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NewsCard;
