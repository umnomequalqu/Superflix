import { DELETED_VIDEO, FAILED_DELETED_VIDEO, ERROR_ON_DELETED_VIDEO } from "../types/deleteVideoTypes";

export const deleteVideo = async (id:string)=>{
    try{
        const response = await fetch(`http://localhost:3001/videos/deleteVideo/${id}`,{
            method: 'DELETE',
        });
        if (response.ok){
            console.log(DELETED_VIDEO)
            return DELETED_VIDEO
        }else{
            console.log(FAILED_DELETED_VIDEO)
            return FAILED_DELETED_VIDEO
        }
    } catch (error) {
        console.log(ERROR_ON_DELETED_VIDEO)
        return ERROR_ON_DELETED_VIDEO
    }
}