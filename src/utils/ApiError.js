class ApiError extends Error {
    constructor(
        statusCode,                                                 // HTTP status code (e.g., 404, 500)
        message =  "Somethingwent wrong",                           // Default message
        errors = [],                                                // Optional list of validation or internal errors
        stack = ""                                                 // Optional custom stack trace
    ){
        super(message)                                              // Call the base Error constructor with the message

        this.statusCode = statusCode
        this.data = null                                            // You can attach additional data if needed
        this.message = message
        this.success = false;
        this.errors = errors                                        // Helps the client know this is a failed response

        if(stack){
            this.stack = stack                                    // Use custom stack trace if provided
        }else{
            Error.captureStackTrace(this, this.constructor)         // Generate clean stack trace
        }

    }
}

export {ApiError}