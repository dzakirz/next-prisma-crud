import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await prisma.product.update({
            where: {
                id: "cl5xbo17g0038p4ijtsdf0b4c"
            },
            data: {
                name: "updated"
            }
        })

        res.status(200).json({ msg: "product updated" })
    } catch (err) {
        console.log(err)
    }
}
