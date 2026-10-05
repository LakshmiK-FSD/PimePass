import style from "./EmptyCard.module.css"
function EmptyCard(){
    return (
        <div className={style.emptpr}>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
            <div className={style.emptycrd}></div>
        </div>
    )
}
export default EmptyCard;