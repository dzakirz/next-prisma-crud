import style from "../styles/components/Loader.module.css"

const Loader = () => {
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div className={style.spinner}>
                <div className={style.rect1}></div>
                <div className={style.rect2}></div>
                <div className={style.rect3}></div>
                <div className={style.rect4}></div>
                <div className={style.rect5}></div>
            </div>
        </div>
    )
}

export default Loader
