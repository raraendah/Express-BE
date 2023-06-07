import express from "express";
import {
    getHalo,
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/halo', (req, res)=>{
    res.json('halo');
});
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;``