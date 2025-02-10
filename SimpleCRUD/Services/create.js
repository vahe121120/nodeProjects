import service from "../Repository/schemaStructure.js"

async function createProduct(object) {
    try {
        const post = await service.create(object);
        return post;
    } catch (e) {
        console.log(e.message);
    }
}

export default createProduct;