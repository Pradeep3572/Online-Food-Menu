import style from "./FoodMenu.module.css" 
function Menu()
{
    return(
        <>
        <div className={style.menu}>
            <p className={style.heading1}>Our Menu</p>
            <p className={style.heading2}>Delicious food made with Love </p>
            <div className={style.options}>
                <div className={style.one}>All</div>
                <div className={style.one}>Burger</div>
                <div className={style.one}>Pizza</div>
                <div className={style.one}>Snacks</div>
                <div className={style.one}>Drinks</div>
            </div>
        </div>
        </>
    )
}
export default Menu;