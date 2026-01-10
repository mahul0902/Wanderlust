import express from "express";
const router = express.Router({mergeParams: true});
import { wrapAsync } from '../utils/wrapAsync.js';
import { Review } from '../models/review.js';
import {Listing} from '../models/listing.js';
import { isLoggedIn, validateReview, isReviewAuthor } from "../middleware.js";
import * as reviewController from '../controllers/reviews.js';

//Review Post Route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//Review Delete Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

export default router;