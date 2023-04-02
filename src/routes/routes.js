const express = require('express');
const router = express.Router();

router.use("/api/v1/users", require("../controllers/user-controller"));
router.use("/api/v1/posts", require("../controllers/post-controller"));

module.exports = router;