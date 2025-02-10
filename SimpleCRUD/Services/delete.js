import service from "../Repository/schemaStructure.js"

async function deleteProduct(id) {
  try {
    service.findByIdAndDelete(id)
    .exec()
  } catch (e) {
    console.log(e.message);
  }
}

export default deleteProduct;