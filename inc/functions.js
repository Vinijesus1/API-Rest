function response(status, message, aftrows, data = null) {
    return {
        status: status,
        message: message,
        affectedRows: aftrows,
        data: data,
        timestamp: new Date().getTime()
    };
}

module.exports = {
    response
}