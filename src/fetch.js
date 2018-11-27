import axios from "axios";

export const fetch = async (params) => {

    const config = Object.assign({
        baseURL: "http://127.0.0.1:3000",
        method: 'post',
    }, params)

    try {

        const response = await axios(config);
        return response.data.data;
    } catch (err) {
        console.error("请求异常::::::::::::::")
        console.error(err)
        console.error("请求异常::::::::::::::")
    }

}













