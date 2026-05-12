import mongoose, { model, Schema } from "mongoose";

interface Isettings {
    ownerId: string,
    businessName: string,
    supportEmail: string,
    knowledge:string,
}

const settingSchema = new Schema<Isettings>(
    {
        ownerId : {
            type : String,
            required : true,
            unique : true,
        },
        businessName : {
            type : String,
        },
        supportEmail : {
            type : String,
        },
        knowledge : {
            type : String,
        }
    },
    {
        timestamps : true
    }
);

const settingsModel = mongoose.models.settingModel || model("settings", settingSchema);

export default settingsModel;