import {PrismaClient} from '@prisma/client';
import Customer from "../model/Customer";

const prisma = new PrismaClient();

export async function CustomerAdd(c: Customer){
    try{
       const newCustomer  = await prisma.customer.create({
            data:{
                name: c.name,
                email: c.email,
                phone: c.phone,
            }
        })
        console.log('Customer Added :',newCustomer)
        return newCustomer;
    }catch(err) {
        console.log("error adding customer", err);
    }
}

export async function CustomerDelete(email:string) {
    try{
        const deletedCustomer = await prisma.customer.delete({
            where: {email: email}
        });
        console.log('Customer deleted :',email);
        return deletedCustomer;
    }catch(err){
        console.log("error deleting customer", err);
    }
}

export async function getAllCustomers(){
    try{
        return await prisma.customer.findMany();
    }catch(err){
        console.log("error getting customers from prisma data",err);
    }
}

export async function CustomerUpdate(id: number, c: Customer){
    try{
        const updatedCustomer = await prisma.customer.update({
            where:{ email : c.email},
            data:{
                name: c.name,
                phone: c.phone
            }
        })
        console.log('Customer updated :',updatedCustomer);
        return updatedCustomer;
    }catch(err){
        console.log("error updating customer", err);
    }
}