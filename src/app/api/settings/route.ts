import connectToDB from "@/lib/db";
import settingsModel from "@/model/settings.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const {ownerId, businessName, supportEmail, knowledge} = await req.json();

        if(!ownerId) {
            return NextResponse.json(
                {message : "OwnerId is required"},
                {status : 400}
            );
        }

        await connectToDB();

        const settings = await settingsModel.findOneAndUpdate(
            {ownerId},
            {ownerId, businessName, supportEmail, knowledge},
            {new : true, upsert : true}
        );

        return NextResponse.json(
            {
                message : "Setting Model Updated Successfully", settings
            },
            {
                status : 200
            }
        );


    }
    catch(error) {

        return NextResponse.json(
            {
                message : `Settings Error Occured ${error}`
            },
            {
                status : 500
            }
        )
        
    }
};



