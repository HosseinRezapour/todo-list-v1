import mongoose from "mongoose";


async function connectDb() {

    try {
        if (mongoose.connections[0].readyState) return;

        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("connected to DB"))
            .catch((err) => console.log(err.errorResponse))
            .finally(() => console.log("finally"))

    }
    catch (err) {
        console.log(err);

    }

}

export default connectDb;

/*

 

*/