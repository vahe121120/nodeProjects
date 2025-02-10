import service from "../Repository/schemaStructure.js"

async function getProduct(object) {
    try {
        const post = await service.find(object);
        return post;
    } catch ( e ) {
        console.log(e.message);
    }

}

export default getProduct;