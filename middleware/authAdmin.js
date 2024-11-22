import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const {token} = req.headers
    if(!token){
        return res.json({success:false, message: "Not Authorized Login Again"})
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET)

    if(decodeToken!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
        return res.json({success:false, message: "Not Authorized Login Again"})
    }
    next()
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authAdmin
