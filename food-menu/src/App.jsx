import './App.css'
import { useState } from 'react'
import Header from './Component/Header.jsx'
import Menu from './Component/FoodMenu.jsx'
import Card from './Component/FoodCard.jsx'
import foods from "./Component/data.js"



function App() {
  const [category,setCategory]=useState('All');

  const filteredFoods=category==="All" ? foods:
  foods.filter(food=>category===food.category);
  return(
    <>
    <Header/>
  <Menu setCategory={setCategory} />    
  <div className="food-container">
                {filteredFoods.map((food) => (
                    <Card
                        key={food.id}
                        img={food.img}
                        category={food.category}
                        name={food.name}
                        content={food.content}
                        price={`₹${food.price}`}
                    />
                ))}
            </div>
    </>
  )
}

export default App
