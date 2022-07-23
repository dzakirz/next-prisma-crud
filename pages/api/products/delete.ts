import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await prisma.product.delete({
            where: {
                id: "cl5xbo17g0038p4ijtsdf0b4c"
            }
        })

        res.status(200).json({ msg: "product deleted" })
    } catch (err) {
        console.log(err)
    }
}
