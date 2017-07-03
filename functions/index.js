exports.handler = (event, context, callback) => {
    console.log("hello22");
    callback(null, {
        statusCode: '200'
    });
};