import style from "./FoodMenu.module.css" 
function Menu({setCategory})
{
    return(
        <>
        <div className={style.menu}>
            <p className={style.heading1}>Our Menu</p>
            <p className={style.heading2}>Delicious food made with Love </p>
            <div className={style.options}>
                <button onClick={()=>setCategory('All')} className={style.one}>All</button>
                 <button onClick={()=>setCategory('Burger')} className={style.one}>Burger</button>
                 <button onClick={()=>setCategory('Pizza')} className={style.one}>Pizza</button>
                 <button onClick={()=>setCategory('Snacks')} className={style.one}>Snacks</button>
                 <button onClick={()=>setCategory('Drinks')} className={style.one}>Drinks</button>
            </div>
        </div>
        </>
    )
}
export default Menu;