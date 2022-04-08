// This middleware will check if the token is attached with the request or if the token is correct  

const jwt = require('jsonwebtoken');
const config = process.env;
const verifyToken =(req,res,next)=>{
  // fetching the token from possible means
  let token = req.body.token || req.query.token || req.headers['authorization'];
  if(!token){
    return res.status(403).send("A token is required for authentication")
  }
  try {
    // removing the space after Bearer character and removing that
    token = token.replace(/^Bearer\s+/,"");
    const decoded = jwt.verify(token,config.TOKEN_KEY);
    req.user = decoded;


  } catch (error) {
    return res.status(401).send("Invalid token")
  }
  return next();

}
module.exports=verifyToken;