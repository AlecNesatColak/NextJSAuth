import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);
    
        if (!username || !email || !password) {
            return NextResponse.json({error: "Please fill all the fields"}),
            {status: 400}
        }

        const user = await User.findOne({email});

        if (user) {
            return NextResponse.json({error: "User already exists"}),
            {status: 400}
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt); 

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

    } catch (error: any) {
        return NextResponse.json({error: error.messaage}),
        {status: 500}
    }
}