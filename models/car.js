import mongoose from "mongoose"

const Schema = mongoose.Schema

const ratingSchema = new Schema({
  comment: String,
  rating: String
}, {
  timestamps: true
})

const carSchema = new Schema({
  profile: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  
  brand:{
    type: String,
    require: true
  },
  model:{
    type: String,
    require: true
  },
  year:{
    type: Number,
    min: 1900,
    max: Date.now().getFullYear,
    require: true
  }, 
  color:{
    type: String,
    require: true
  },
  forSale: Boolean,
  like: Number,
  rating:[ratingSchema]
}, {
  timestamps: true
})

const Car = mongoose.model("Car", carSchema)

export {
  Car
}