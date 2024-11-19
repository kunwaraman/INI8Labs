const express = require("express");
const router = express.Router();
const registrationController = require("../controller/registration.js")

router.get("/:id", registrationController.getRegistrationById);
router.post("/", registrationController.createRegistration);
router.put("/:id", registrationController.updateRegistration);
router.delete("/:id", registrationController.deleteRegistration);

module.exports = router;
