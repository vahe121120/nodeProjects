import service from "../Repository/schemaStructure.js"

async function updateProduct(object) {
    try {
        let oldPost = await service.findOne();
        oldPost.title = object.title;
        oldPost.price = object.price;
        oldPost.save();
        return oldPost;
    } catch (e) {
        console.log(e.message);
    }
}

export default updateProduct;