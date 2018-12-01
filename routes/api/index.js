//Where we make all our calls for recipe searches and such - izaak
// Grabbing our models
const router = require("express").Router();
const controller = require("../../controllers/controller.js");
const passport = require("../../config/passport");
// const checkAuth = require("../../config/middleware/checkAuth");

// // login section
router.post("/signup", controller.signup);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function(req, res) {
    console.log(`req body -${req.user}`);
    res.json({
      message: "user authenticated",
      user: req.user
    });
  }
);

// save recipe
router.post("/saveRecipe", controller.saveRecipe);

// //checking if signed in
// router.get("/checkAuth", checkAuth, function(req, res) {
//   console.log(`${req.user} is checking auth...`);
//   return res.status(200).json({
//     status: "Login successful!"
//   });
// });

// Route for logging user out
router.get("/logout", controller.logout);

// recipe routes
router.get("/user_data", controller.getUserData);

router.get("/favorites", controller.getFavoriteRecipes);

router.get("/findOneFavorite", controller.findOneFavorite);

router.get("/findRecipes", controller.findRecipes);

module.exports = router;
