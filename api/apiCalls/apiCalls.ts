import { globalUpdateInstance } from "../axiosInstance/globalUrl"
import { TgetGlobalUpdate } from "@/interfaces/interfaces"



export const getGlobalUpdate = async() => {
    const res = await globalUpdateInstance.get<TgetGlobalUpdate>("")
    return res.data
}