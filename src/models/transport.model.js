import mongoose, {Schema} from "mongoose";


const TransportSchema = Schema({
    transport_type: {
        type: String,
        enum: ["Flight","Train","Bus","Car","Rental"],
        index: true,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    route: {
        type: String,
    },
    schedule: {
        type: String,
    },
    price: {
        type: Schema.Types.Decimal128,
    },
    capacity: {
        type: String,
    }

},{timestamps: true});


export const Transport = mongoose.model("transport", TransportSchema)