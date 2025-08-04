import mongoose, {Schema} from "mongoose";


const scubscriptionSchema = new Schema({
    scubscriber: {
        type: Schema.Types.ObjectId,       // one who
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})


export const Scubscription = mongoose.model("Scubscription", scubscriptionSchema)
