import Cart from "../assets/cart-icon.png";
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.header}>
            <div className={style.div1}>
                Foodies <span className={style.cor}>Corner</span>
            </div>

            <div className={style.div2}>Menu</div>
            <div className={style.div3}>Cart</div>

            <div className={style.div4}>
                <img src={Cart} alt="Cart" className={style.imgg} />
            </div>
        </div>
    );
}

export default Header;