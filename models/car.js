import mongoose from "mongoose"

const Schema = mongoose.Schema

const ratingSchema = new Schema({
  comment: String,
  rating: String
}, {
  timestamps: true
})

const carSchema = new Schema({
  
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
  dream: {
    type: String,
    default: "I actually don't have one yet :("
  },
  forSale: Boolean,
  driver: { 
    type: Schema.Types.ObjectId, 
    ref: 'Profile'},
  like: Number,
  rating:[ratingSchema]
}, {
  timestamps: true
})

const Car = mongoose.model("Car", carSchema)

export {
  Car
}