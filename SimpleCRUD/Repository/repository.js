import createProduct from "../Services/create.js"
import getProduct from "../Services/read.js"
import updateProduct from "../Services/update.js"
import deleteProduct from "../Services/delete.js"

const services = {
    create: createProduct,
    read: getProduct,
    update: updateProduct,
    delete: deleteProduct
};

export default services;