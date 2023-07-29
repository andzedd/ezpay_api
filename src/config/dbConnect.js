import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ezpayapi:123321@cluster0.bljiqdg.mongodb.net/ezpay-node");

let db = mongoose.connection;

export default db