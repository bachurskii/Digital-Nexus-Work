import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async(req,{params}) => {
    const {id} = params
    try{
        await connect()
        const posts = await Post.findById(id)
        return  new NextResponse(JSON.stringify(posts),{status:200})
    } catch(error) {
        throw new Error('Error in response of db',{status:500})
    }
}