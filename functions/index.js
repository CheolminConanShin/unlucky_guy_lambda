var AWS = require('aws-sdk')
var documentClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
    var params = {
        TableName : 'unlucky-guy',
    };


    documentClient.scan(params, function (err, data) {
        var response = {
            headers: {
                statusCode: '200'
            },
            body: data
        }

        callback(null, response)
    })
};