import express from "express";
const router = express.Router();
import { wrapAsync } from '../utils/wrapAsync.js';
import { Listing } from '../models/listing.js';
import { isLoggedIn, isOwner, validateListing } from "../middleware.js";
import * as listingController from '../controllers/listing.js';
import multer from "multer";
import {storage} from "../cloudConfig.js";
const upload = multer({storage});

router.route("/")
.get(wrapAsync(listingController.index)) //Index Route
.post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing));  //Create Route

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))  //Show Route
.put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))  //Update Route
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));  //Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));
export default router;