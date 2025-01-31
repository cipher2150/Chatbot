// fn is the async function that we want to execute inside a call back function

const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.send(error.code || 500).json({
            success: false,
            message: error.message || "Internal server error"
    }
};



export { asyncHandler };