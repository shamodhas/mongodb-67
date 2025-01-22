import Customer from "../model/Customer"
import CustomerModel from "../model/customer-modal"

export async function CustomerAdd(c: Customer) {
  try {
    const newCustomer = await CustomerModel.create({
      name: c.name,
      email: c.email
    })
    console.log("Customer Added :", newCustomer)
    return newCustomer
  } catch (err) {
    console.log("error adding customer", err)
  }
}

export async function CustomerDelete(email: string) {
  try {
    await CustomerModel.deleteOne({
      email: email
    })

    console.log("Customer deleted :", email)
    return email
  } catch (err) {
    console.log("error deleting customer", err)
  }
}

export async function getAllCustomers() {
  try {
    return CustomerModel.find()
  } catch (err) {
    console.log("error getting customers from prisma data", err)
  }
}

export async function CustomerUpdate(id: number, c: Customer) {
  try {
    const updatedCustomer = await CustomerModel.updateOne(
      { _id: id },
      {
        name: c.name,
        email: c.email
      }
    )

    console.log("Customer updated :", updatedCustomer)
    return updatedCustomer
  } catch (err) {
    console.log("error updating customer", err)
  }
}
