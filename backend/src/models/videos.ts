import e from "express";
import { Schema,model } from "mongoose";

interface VideoInterface {
    name: string,
    description: string,
    url: string
}
const VideoSchema = new Schema<VideoInterface>({
    name: {type: String,required:true},
    description: String,
    url: {type: String,required: true},
})

export const Video = model<VideoInterface>('video',VideoSchema)
