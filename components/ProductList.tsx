import React from "react"
import style from "../styles/components/ProductList.module.css"

type Props = {
    name: string
    price: number
}

const ProductList = ({ name, price }: Props) => {
    const formatRupiah = (val: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(val)
    }

    return (
        <li className={style.productList}>
            <div className={style.wrapper}>
                <h4 className={style.name}>{name}</h4>
                <h4 className={style.price}>{formatRupiah(price)}</h4>
            </div>
        </li>
    )
}

export default ProductList
