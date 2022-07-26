import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await prisma.product.findMany()
        if (!products.length) res.status(200).json({ msg: "empty products" })
        res.status(200).json(products)
    } catch (err) {
        console.log(err)
    }
}
