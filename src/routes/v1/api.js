import { Router } from 'express';
import { getProducts } from '../../controllers/products';

export const api = Router();

api.get('/products',getProducts);