import style from "./Card.module.css"
function Card({img,category,name,content,price})
{
    return(
        <>
        <div className={style.card}>
            <div className={style.imgg}>
                <img src={img} className={style.logo}></img>
                <span className={style.status}></span>
            </div>
            <div className={style.category}>
                <p className={style.cat}>{category}</p>
            </div>
            <div className={style.contents}>
                <span className={style.name}>{name}</span>
                <span className={style.content}>{content}</span>
                <span className={style.price}>{price}</span>
            </div>
            <div className={style.btn}>
                <button className={style.add}>Add to cart</button>
            </div>
        </div>
        
        </>
    )
}

export default Card;