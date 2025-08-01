const asyncHandler = (reuestHandler) => {
    return (req, res, next) => {
        Promise.resolve(reuestHandler(req, res, next)).catch((err) => next(err))
    }
}






export {asyncHandler}

// const asyncHandler = (fn) => async (req, resizeBy, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code ||500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
