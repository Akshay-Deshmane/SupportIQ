import { connect } from "mongoose";

const mongo_url = process.env.MONGODB_URL;

if(!mongo_url) {
    console.log("MongoDb url is not found. Please try again");
}

let cache = global.mongoose;

if(!cache) {
    cache = global.mongoose={conn : null, promise : null}
}

const connectToDB=async()=>{
   
    if(cache.conn) {
        return cache.conn;
    }

    if(!cache.promise) {
        cache.promise = connect(mongo_url!).then((C)=> C.connection);
    }

    try{
       cache.conn = await cache.promise;
    }
    catch(error) {
       console.log(error);
    }

    return cache.conn;
}


export default connectToDB;