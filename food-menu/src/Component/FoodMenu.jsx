import style from "./FoodMenu.module.css" 
function Menu({category,setCategory})
{
    const categories = ["All", "Burger", "Pizza", "Snacks", "Drinks", "Others"];

    return (
        <div className={style.menu}>
            <p className={style.heading1}>Our Menu</p>
            <p className={style.heading2}>Delicious food made with Love</p>

            <div className={style.options}>
                {categories.map(item => (
                    <button
                        key={item}
                        onClick={() => setCategory(item)}
                        className={category === item ? style.active : style.one}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Menu;