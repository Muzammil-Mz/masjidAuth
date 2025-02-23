import mongoose from "mongoose"


const masjidSchema=new mongoose.Schema({
masjidName:{
    type:String
},
masjidArea:{
    type:String
},masjidTime:{
    type:String
},masjidLocaton:{
    type:String
},latitude:{
    type:String
},longitude:{
    type:String
},photos:{
    type:String
}
})

const masjidModel=mongoose.model("masjid",masjidSchema,"masjid")

export default masjidModel