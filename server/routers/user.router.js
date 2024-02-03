const express = require("express");
const { uploadAvatar } = require("../controllers/user");


const router = express.Router();

router.post("/uploadAvatar", uploadAvatar );


module.exports = router;