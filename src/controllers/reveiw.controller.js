import { ReviewRatings } from "../models/reveiws.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponce } from "../utils/ApiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary, deleteOnCloudinary } from "../utils/cloudnairy.js";


const createReview = asyncHandler( async (req,res) => {


    return res.send("create reveiw controller")
})