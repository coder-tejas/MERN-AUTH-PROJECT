const { signup, login } = require("../controllers/AuthController");
const { singupValidation, loginValidation } = require("../middleware/AuthValidation");

const router = require("express").Router();

// router.post("/login",(req,res)=>{
//     res.send("LOGIN SUCCESS")
// })

router.post("/login",loginValidation,login);
router.post("/signup",singupValidation,signup);

module.exports = router;