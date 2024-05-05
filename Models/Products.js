const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  landingPageUrl: { type: String, required: true },
  id: { type: Number, required: true },
  product: { type: String, required: true },
  productName: { type: String, required: true },
  rating: { type: Number, required: true },
  ratingCount: { type: Number, required: true },
  discount: { type: Number, required: true },
  brand: { type: String, required: true },
  searchImage: { type: String, required: true },
  effectiveDiscountPercentageAfterTax: { type: Number, required: true },
  effectiveDiscountAmountAfterTax: { type: Number, required: true },
  inventoryInfo: [{
    skuId: { type: Number, required: true },
    label: { type: String, required: true },
    inventory: { type: Number, required: true },
    available: { type: Boolean, required: true }
  }],
  sizes: { type: String, required: true },
  images: [{
    view: { type: String, required: true },
    src: { type: String, required: true }
  }],
  gender: { type: String, required: true },
  primaryColour: { type: String, required: true },
  discountLabel: { type: String, required: true },
  discountDisplayLabel: { type: String, required: true },
  additionalInfo: { type: String, required: true },
  category: { type: String, required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  colorVariantAvailable: { type: Boolean, required: true },
  discountType: { type: String, required: true },
  catalogDate: { type: Date, required: true },
  season: { type: String, required: true },
  year: { type: String, required: true },
  systemAttributes: [String]
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
