const ProductModel = require("../Model/productModel");

exports.addProduct = async (req, res) => {
    const {productName, productPrice, productDescription, productRating, productCategory, totalProduct} = req.body;

    const addProduct = new ProductModel ({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productRating: productRating,
        productCategory: productCategory,
        productImage: req.file.path,
        totalProduct: totalProduct
    })

    addProduct.save();

    if(!addProduct) {
        return res.json({error: "Product not saved"}).status(400);
    }
    return res.json({message: "Product added succesfully"}).status(200);
}


exports.getAllProduct = async(req, res) => {
    const products = await ProductModel.find();

    res.send(products)
}


exports.deleteProduct = async (req, res) => {
    let product = await ProductModel.findByIdAndDelete(req.params.id)
    if(!product){
        return res.status(400).json({error:"Error"})
    }else{
        if(product==null){
            return res.status(400).json({error:"Product not found"})
        }else{
            return res.status(200).json({message:'deleted succesfully'})
        }
    }


}
exports.findProduct = (req, res) => {
    ProductModel.findById(req.params.id)
        .then((product) => {
            return res.send(product)
        })
        .catch(() => {
            return res.status(400).json({ error: "something went wrong" })
        })
}