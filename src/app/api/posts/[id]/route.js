import PostModel from "@/models/PostModel";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server"; 

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    const post = await PostModel.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connectDB();

    await PostModel.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};