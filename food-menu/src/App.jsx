import './App.css'
import Header from './Component/Header.jsx'
import Menu from './Component/FoodMenu.jsx'
import Card from './Component/FoodCard.jsx'
import foods from "./Component/data.js"



function App() {
  return(
    <>
    <Header/>
    <Menu/>
    <div className="food-container">
                {foods.map((food) => (
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
