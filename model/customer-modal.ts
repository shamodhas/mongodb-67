import mongoose from "mongoose"

const CustomerSchema= new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true }
  },
  { timestamps: true }
)

const CustomerModel = mongoose.model("Customers",CustomerSchema)

export default CustomerModel