import mongoose from "mongoose";
import { data, updateData } from "./data.js";
import { Listing } from "../models/listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    const updated = data.map((obj) => ({ ...obj, owner: '695f7fcbc3499e0f2d2cf44d'}));
    updateData(updated);
    await Listing.insertMany(data);
    console.log("data is initialized");
}

initDB();