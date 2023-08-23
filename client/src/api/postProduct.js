import client from "./client";

export const postProduct = async (data) => {
    try{
        const res = await client.post('http://localhost:8000/admin/add-product',data);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}