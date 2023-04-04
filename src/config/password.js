const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const {UserServiceInstance}  = require("../services")
const secret = process.env.SECRET_KEY;

const options = {
 jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
 secretOrKey: secret,
};


const strategy = new JWTStrategy(options, async (payload, done) => {
    try {
      const user = await UserServiceInstance.findById(payload.userId);
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
   });
   

   module.exports = (passport) => {
    passport.use(strategy);
 };
 