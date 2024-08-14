import { toast } from "sonner"
import { errorMessage } from "../utils/helper"
import axios from "axios"
import { AppConfig } from "../config/app.config"
import Cookies from "js-cookie"
import { IUser, IUserDetail } from "../interface/user"


export const getAllUser = async (url:string) => {
    const accessToken = Cookies.get("accessToken")
    try {
        const { data } = await axios.get(`${AppConfig.API_URL}/${url}`,{
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
              }
        })
        return data as IUser[]
    } catch (error) {
        toast.error(errorMessage(error))
    }
}
