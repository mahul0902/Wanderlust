# 🌍 Wanderlust: Full-Stack Travel Platform

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

> A robust, server-rendered web application that empowers users to discover, list, and review travel accommodations worldwide. Engineered with a strict **Model-View-Controller (MVC)** architecture, this platform demonstrates comprehensive full-stack capabilities, including secure data management, cloud-based media handling, and robust server-side validation.

<br />

<details>
  <summary><b>📑 Table of Contents</b> (Click to expand)</summary>

  1. [Live Demo & Visuals](#-live-demo--visuals)
  2. [Core Features](#-core-features)
  3. [System Architecture & Tech Stack](#-system-architecture--tech-stack)
  4. [Directory Structure](#-directory-structure)
</details>

<br />

## 📸 Live Demo & Visuals

**Live Demo:** https://wanderlust-aan7.onrender.com/

## 🚀 Core Features

* **Complete CRUD Workflows:** Securely create, read, update, and delete travel listings and user reviews.
* **Cloud Media Integration:** Seamlessly handles image uploads, storage, and dynamic delivery via **Cloudinary**, avoiding local file bloat.
* **Advanced Error Handling:** Implements custom utility classes (`ExpressError`) and asynchronous middleware wrappers (`catchAsync`) to ensure the server never crashes unexpectedly.
* **Strict Data Validation:** Utilizes **Joi** schemas to validate incoming client data at the routing level before it ever hits the MongoDB database, preventing NoSQL injection and corrupted data.
* **Authentication & Authorization:** (If implemented) Secure user sessions, password hashing, and route-protecting middleware to ensure only listing owners can edit or delete their properties.

## 🧠 System Architecture & Tech Stack

Wanderlust follows a strict separation of concerns, decoupling the database logic, routing parameters, and user interface.

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend (View)** | EJS, HTML5, CSS3, JS | Dynamic server-side templating for an SEO-friendly, responsive user interface. |
| **Backend (Controller)** | Node.js, Express.js | High-performance RESTful API handling business logic and HTTP requests. |
| **Database (Model)** | MongoDB, Mongoose | NoSQL document database for flexible, scalable data modeling (Listings, Reviews, Users). |
| **Cloud / Storage** | Cloudinary | Scalable media management configuration (`cloudConfig.js`). |

## 📂 Directory Structure

```text
Wanderlust/
├── controllers/    # Route logic handlers, keeping routes files clean
├── init/           # Database seed scripts (run once to populate mock data)
├── middleware.js   # Custom Express middleware (Auth, Validation, Error Handling)
├── models/         # Mongoose Schemas (Listing.js, Review.js)
├── public/         # Static assets served to the client (CSS, local JS)
├── routes/         # Express routers (e.g., /listings, /reviews)
├── schema.js       # Joi validation schemas for server-side integrity
├── utils/          # Helper functions (e.g., catchAsync.js, ExpressError.js)
├── views/          # EJS templates broken into layouts, partials, and pages
├── app.js          # Main application entry point & server configuration
└── cloudConfig.js  # Cloudinary SDK setup
