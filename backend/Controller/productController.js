const ProductModel = require("../Model/productModel");

exports.addProduct = async (req, res) => {
  const {
    productName,
    productPrice,
    productDescription,
    productRating,
    productCategory,
    totalProduct,
    tags
  } = req.body;

  const addProduct = new ProductModel({
    productName: productName,
    productPrice: productPrice,
    productDescription: productDescription,
    productRating: productRating,
    productCategory: productCategory,
    productImage: req.file.path,
    totalProduct: totalProduct,
    tags
  });

  addProduct.save();

  if (!addProduct) {
    return res.json({ error: "Product not saved" }).status(400);
  }
  return res.json({ message: "Product added succesfully" }).status(200);
};

exports.getAllProduct = async (req, res) => {
  const { sortBy, limit, sortOrder } = req.query;

  const sort_by = sortBy ? sortBy : "createdAt";
  const totalProduct = limit ? limit : 100000000;
  const sort_order = sortOrder ? sortOrder : "asc";

  const products = await ProductModel.find()
    .populate("productCategory", "categoryName")
    .sort([[sort_by, sort_order]])
    .limit(totalProduct);

  if (!products) {
    return res.json({ error: "Error" }).status(400);
  }

  res.send(products);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    productName,
    productPrice,
    productDescription,
    productRating,
    productCategory,
    totalProduct,
    tags
  } = req.body;

  if (!id) {
    return res.json({ error: "Id not found" }).status(400);
  }

  const updateProduct = await ProductModel.findByIdAndUpdate(
    id,
    {
      productName: productName,
      productPrice: productPrice,
      productDescription: productDescription,
      productRating: productRating,
      productCategory: productCategory,
      // productImage: req.file.path,
      totalProduct: totalProduct,
      tags
    },
    { new: true }
  );

  if (!updateProduct) {
    return res.json({ error: "Failed to update product" }).status(400);
  }

  return res.json({ message: "All products", data: updateProduct }).status(200);
};

exports.relatedProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    const relatedProducts = await ProductModel.find({
      _id: { $ne: id }, // Exclude the current product
      productCategory: product.productCategory // Match the same category
    });

    if (!relatedProducts || relatedProducts.length === 0) {
      return res.status(404).json({ error: "No related products found" });
    }

    res.status(200).json(relatedProducts);
  } catch (error) {
    console.error("Error fetching related products:", error);
    res.status(500).json({ error: "Failed to fetch related products" });
  }
};

exports.deleteProduct = async (req, res) => {
  let product = await ProductModel.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(400).json({ error: "Error" });
  } else {
    if (product == null) {
      return res.status(400).json({ error: "Product not found" });
    } else {
      return res.status(200).json({ message: "deleted succesfully" });
    }
  }
};
exports.findProduct = (req, res) => {
  ProductModel.findById(req.params.id)
    .then((product) => {
      return res.send(product);
    })
    .catch(() => {
      return res.status(400).json({ error: "something went wrong" });
    });
};
