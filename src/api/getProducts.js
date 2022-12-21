import axios from "axios";

const getProducts =async (limit,skip) =>{
    const prods= await axios.get(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&limit=${limit}&skip=${skip}`)

return prods.data.result.products;
};

export default getProducts;
