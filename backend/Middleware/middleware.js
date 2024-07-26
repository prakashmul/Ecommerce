const {expressjwt: ExpressJWT} = require("express-jwt");

const secretKey = process.env.SECRET_KEY

const verifyJWT = ExpressJWT({
    secret: secretKey,
    algorithms: ["HS256"]
})

exports.jwtMiddleware = (req, res, next) => {
    verifyJWT(req, res, (err) => {
        if(err){
            return res.status(401).json({message: "Unauthorized"});
        }
        next();
    });
};

