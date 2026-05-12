import connectToDB from "@/lib/db";
import settingsModel from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req : NextRequest) {
    try {
        
        const {ownerId} = await req.json();

        if(!ownerId) {
            return NextResponse.json(
                {message : "OwnerId is required"},
                {status : 400}
            );
        }

        await connectToDB();

        const settings = await settingsModel.findOne(
            {ownerId}
        );

        return NextResponse.json(
            {
                message : "Setting Model Fetched Successfully", settings
            },
            {
                status : 200
            }
        );
    }
    catch(error) {
        return NextResponse.json(
            {message : `Settting Model Error Occurred ${error}`},
            {status : 500}
        )
    }
}