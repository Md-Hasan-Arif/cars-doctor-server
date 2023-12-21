/**
 * install jsonwebtoken
 * jwt.sign (payload,secret, {expiresIn:})
 * send token in client site
 * 
 * 
 * 
 */

/**
 * how to store token in the client site
 * 1. memory --> ok type 
 * 2.local storage --> ok type (cross site scripting{xss})
 * 3.cookies: http only 
 *
 */

/***
 * set cookies with http only. for development secure: false,
 * 
 * 2. cors 
 * app.use(cors({
    origin:['http://localhost:5173'],
    credentials: true
    }));
 * 3. client side axios setting
 * 4.in axios set withCredentials: true
 * 

 */