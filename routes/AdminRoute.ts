import express, {Request, Response, NextFunction} from 'express';
import {CreateVendor, GetVendorById, GevVendors} from "../controllers";


const router = express.Router();


router.post('/vendor',CreateVendor);

router.post('/vendors',GevVendors);

router.post('/vendor/:id',GetVendorById);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({message: "Hello From Admin"});
})


export {router as AdminRouter}