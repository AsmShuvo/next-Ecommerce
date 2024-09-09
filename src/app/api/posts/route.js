import { NextResponse } from "next/server";  
import connectDB from "@/utils/db";
import PostModel from "@/models/PostModel";

export const GET = async (request) => { 

  try {
    await connectDB();

    const posts = await PostModel.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new PostModel(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse("post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};