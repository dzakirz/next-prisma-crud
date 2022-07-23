import axios from "axios"
import { NextPage } from "next"
import { useRouter } from "next/router"
import React, { useState } from "react"

const add: NextPage = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault()
            await axios.post("/api/products/create", { name, price: parseInt(price) })
            router.push("/")
        } catch (err) {
            console.log(err)
        }
    }

    const formatRupiah = (val: number) => {
        return Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR"
        }).format(val)
    }

    return (
        <div
            style={{
                width: "100%",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h1>Form</h1>

            <form
                style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column"
                }}
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                {price ? <h4>{formatRupiah(parseInt(price))}</h4> : <h4>Rp 0,00</h4>}
                <input
                    type="number"
                    placeholder="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default add
