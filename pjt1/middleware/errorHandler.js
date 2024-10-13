const {constans} = require("../constants")
const errorHandle = (err,res,req,next) => {
    const statusCode = res.statusCode ? statusCode : 500;
    switch (statusCode) {
        case constans.VALIDATION_ERROR:
            res.json({title:"Validation Failed"},{message :err.message},{cause:err.stack});
            break;
        case constans.UNAUTHORIZED:
            res.json({title:"UNAUTHORIZED"},{message :err.message},{cause:err.stack});
            break;
        case constans.FORBIDDEN:
            res.json({title:"FORBIDDEN"},{message :err.message},{cause:err.stack});
            break;
        case constans.NOT_FOUND:
            res.json({title:"NOT FOUND"},{message :err.message},{cause:err.stack});
            break;
        case constans.SERVER_ERROR:
            res.json({title:"SERVER ERROR"},{message :err.message},{cause:err.stack});
            break;
        default:
            console.log("No Error, All Good");
            break;
    }
    res.json({title:"Not found"},{message :err.message},{cause:err.stack});
    res.json({title:"Validation Failed"},{message :err.message},{cause:err.stack});
};
module.exports = errorHandle