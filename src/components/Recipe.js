import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = ({title, calories, image, ingredients}) => {

    const roundedCalories= calories.toFixed(2);

  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        <ol>
        <ul>
            {ingredients.map(ingredients=>(
                <li>{ingredients.text}</li>
            ))}
        </ul>
      </ol>
        </Card.Text>
      </Card.Body>
      <Button variant="primary">Calories : {roundedCalories}</Button>
    </Card>
    </div>
  )
}

export default Recipe

{/* <div>
      <h1>{title}</h1>
      <p>Calories : {calories}</p>
      <ol>
        <ul>
            {ingredients.map(ingredients=>(
                <li>{ingredients.text}</li>
            ))}
        </ul>
      </ol>
      <img src={image} alt='' />
    </div> */}