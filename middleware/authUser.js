import jwt from "jsonwebtoken";

// user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { utoken } = req.headers;
    if (!utoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const decodeToken = jwt.verify(utoken, process.env.JWT_SECRET);

    req.body.userId = decodeToken.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
