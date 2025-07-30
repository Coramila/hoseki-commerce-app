import axios from "axios";
import {IHttp} from "../../interfaces/http.interface";

const Http = (): IHttp => {
    return{
        get: async<T>(url: string): Promise <T> =>{
            return axios.get(url).then((response) => response.data);
        },
    };
};

export default Http;
