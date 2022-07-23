import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, price } = req.body

        // if (!name || !price) {
        //     return res.status(400).json({ msg: "please fill all fields" })
        // }

        await prisma.product.create({
            data: {
                name: "samsung",
                price: 10900000
            }
        })

        res.status(200).json({ msg: "product created" })
    } catch (err) {
        console.log(err)
    }
}
