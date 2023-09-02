const express = require("express");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create movie */
router.post(
    "/create-movie",
    validate(movieValidation.createMovie),
    movieController.createMovie
);

/** Get movie list */
router.get(
    "/list",
    // validate(movieValidation.getMovieList),
    movieController.getMovieList
);

/** delete movie */
router.delete(
    "/delete-movie/:movieId",
    // validate(movieValidation.deletemovie),
    movieController.deletemovie
);

// /** movie details update by id*/
// router.put(
//     "/update-movie/:movieid",
//     validate(movieValidation.updateDetails),
//     movieController.updateDetails
// );

module.exports = router;
