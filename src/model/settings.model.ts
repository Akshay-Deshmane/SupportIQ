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
            required : true
        },
        businessName : {
            type : String,
            required : true
        },
        supportEmail : {
            type : String,
            required : true
        },
        knowledge : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

const settingsModel = mongoose.models.settingModel || model("settings", settingSchema);

export default settingsModel;