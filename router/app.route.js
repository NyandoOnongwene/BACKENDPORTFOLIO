const controller = require("../controller/app.controller");
const router = requires("express").Router;

router.get('/portfolio', controller.portfolioAppRoute);
router.get('/testimonial', controller.testimonialAppRoute);
