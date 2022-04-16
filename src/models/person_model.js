const { default: mongoose } = require("mongoose");

const personSchema = mongoose.Schema({
    name:{
        Type: String,
        require: true
    },
    lastName:{
        Type: String,
        require: true
    },
    age:{
        Type: Number,
        require: true
    },
    address:{
        Type: Object,
        require: true,
            city:{
                Type:String,
                require: true,
            },
            code_zip: {
                Type: String,
                require:true
            },
        
    },
});
module.exports = mongoose.model('PeopleCollection', personSchema);