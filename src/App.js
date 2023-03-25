import './App.css';
import React, { useState, useEffect } from 'react'
import Recipe from './components/Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Lottie from "lottie-react";
import animation from './components/book.json'

function App() {

  const APP_ID = "e43c6bad"
  const APP_KEYS = "95d1b0e1b7b6da2fe6a241e6122bec9a"

  const [recipes, setRecipes] = useState([])
  const [textinput, setTextinput] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    geRecipes();
  }, [query])

  const geRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const onChangeHandler = (e) => {
    setTextinput(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuery(textinput)
    console.log(query)
  }

  return (
    <div>
      <MyNavbar />
      <Lottie animationData={animation} style={{height: 120, marginTop: 30}}/>
      <form onSubmit={onSubmitHandler} style={{height: 150, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', justifyContent: 'center'}}>
        <input type='text' required placeholder='Search Recipe' onChange={onChangeHandler} style={{textAlign: 'center', borderRadius: 10, borderWidth: 2}} />
        <button style={{borderRadius: 5, backgroundColor: 'whitesmoke'}} >Submit</button>

      </form>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 30, justifyContent: 'center', padding: 10, backgroundColor: 'white' }}>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
        <Footer />
    </div>
  );
}

export default App;
