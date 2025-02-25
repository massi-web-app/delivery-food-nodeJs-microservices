import express from 'express';
import {AdminRouter,VendorRouter} from './routes';



const app = express();


app.use('/admin',AdminRouter);
app.use('/vendor',VendorRouter);





app.listen(8000,()=>{
    console.clear();
    console.log("App is running on port 8000");
})