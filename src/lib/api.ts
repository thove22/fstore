import axios from "axios";

export const addProduct = async(productData:{ title:string, price:number, description:string, category:string ,image:string}) =>{
    try{
        const response  = await axios.post('https://fakestoreapi.com/products', productData);
        return response.data;
    }catch(error){
        console.error("Error Adding the product", error)
        throw error;
    };
};