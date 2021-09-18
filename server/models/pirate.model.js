const mongoose =  require('mongoose');

const PirateSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Your pirate must have a name"]
    },

    imgUrl: {
        type: String,
        required: [true, "Image Url is required"]
    },

    numChests: {
        type: Number,
        required: [true, "Your pirate must have a number of treasures"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Your pirate must have a catch phrase"]
    },

    position: {
        type: String,
        required: [true, "Your pirate must have a position"]
    },

    pegLeg: {
            type: Boolean,
    },

    eyePatch: {
        type: Boolean
    },

    hookHand: {
        type: Boolean
    },

    
}, {timestamps: true}
)

const Pirate = mongoose.model("Pirate", PirateSchema);

module.exports = Pirate;