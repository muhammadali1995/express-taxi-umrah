import mongoose, { Schema, mongo } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import Error from "next/error";
import { NextRequest, NextResponse } from "next/server";
import { threadId } from "worker_threads";

export async function GET(req: NextRequest, res: NextResponse) {
    const mongourl = process.env.MONGODB_URI || ''

    let client;

    try {
        client = await mongoose.connect(mongourl)
        console.log('DB Connected')
    } catch (error: any) {
        console.log('There was error connection to database: ', error.message)
    }

    const orderModel = mongoose.model('Order', new Schema({ client: String }))

    const order = await orderModel.findOne();
    console.log(order)
    return NextResponse.json({ message: 'it is working' }, { status: 200 })

}