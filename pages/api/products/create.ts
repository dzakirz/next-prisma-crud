import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, price } = req.body

        const product = await prisma.product.create({
            data: { name, price }
        })

        res.status(200).json(product)
    } catch (err) {
        console.log(err)
    }
}
