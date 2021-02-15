const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const blogSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        maxlength: 200,
        unique:true
      
    },
    text:{
        required: true, 
        type:String
      }
  },
  { timestamps: true }
);



module.exports = mongoose.model("Blog", blogSchema);

