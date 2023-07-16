const { SECRET, TOKEN_KEY } = require("../config/config");
const jwt = require("../lib/jwt");


exports.authentication = async (req, res, next) => {

    const token = req.cookies[TOKEN_KEY];

    if(token){
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;

            next();
        } catch (error) {
            res.clearCookie(TOKEN_KEY);
            res.redirect('/auth/login');
        }
    }else{
        next();
    }
};

exports.isAuth = (req,res,next) => {
    if(!req.user){
        res.redirect('/auth/login')
    }

    next();
}