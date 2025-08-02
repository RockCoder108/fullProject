import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Samyak_in_BackEnd_ok"
    })
})

export { registerUser }