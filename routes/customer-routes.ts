import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd, CustomerDelete, CustomerUpdate, getAllCustomers} from "../database/mongoos-data-store";

const router = express.Router();

router.post("/add", async(req, res) => {
    console.log(req.body);
    const customer: Customer= req.body;
    try{
        const addedCustomer = await CustomerAdd(customer);
        res.json(addedCustomer);
    }catch(err){
        console.log("error adding customer", err);
        res.status(400).send("error adding customer");
    }
})

router.delete("/delete/:email", async (req, res) => {
    const email: string  = req.params.email;
    try{
        const deletedCustomer = await CustomerDelete(email);
        res.json(deletedCustomer);
    }catch(err){
        console.log("error deleting customer", err);
    }
})


router.put("/update/:id",async (req, res) => {
    const id:number =+ req.params.id;
    const customer : Customer = req.body;

    try{
        const updatedCustomer = await CustomerUpdate(id, customer);
        res.json(updatedCustomer);
    }catch(err){
        console.log("error updating customer", err);
    }
})

router.get("/view", async (req, res) => {
    try{
       const customers=  await getAllCustomers();
       res.json(customers);
    }catch(err){
        console.log("error getting customers", err);
    }
})
export default router;