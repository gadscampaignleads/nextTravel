import express from 'express';
import { hotelbill, hotelListController } from '../controllers/hotelController.js';
 

const router = express.Router();
router.post('/travel/getbill', hotelbill);
router.get("/search-hotels",hotelListController); 

export  default router;