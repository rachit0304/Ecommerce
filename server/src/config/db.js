const mongoose = require("mongoose")
const mongoDbUrl='mongodb+srv://rachitsharma2803:YJ5XcTlX3jyoph9l@cluster0.owl7tcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb=()=>{

    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}