# Wanderlust 🌍

Wanderlust is a robust full-stack web application that allows users to explore, create, and interact with travel listings and accommodations. Built with a Model-View-Controller (MVC) architecture, the platform features secure data handling, cloud-based image management, and a dynamic user interface. 

The modular Express backend architecture established here serves as an excellent foundation for scaling up, and the structural patterns used can be directly applied to architecting robust APIs for larger-scale full-stack systems, such as complex social media applications with decoupled frontends.

## 🚀 Features

* **Complete CRUD Functionality:** Users can seamlessly browse, add, edit, and delete travel destinations and properties.
* **Review System:** Integrated functionality for leaving and managing reviews on individual listings.
* **Cloud Image Integration:** Efficient media handling using cloud storage for uploading and serving listing images.
* **Data Validation & Error Handling:** Comprehensive server-side validation to ensure database integrity, coupled with custom error-handling middleware for a smooth user experience.
* **Responsive UI:** Dynamic templating engineered to provide an intuitive experience across different devices.

## 🛠️ Tech Stack

* **Frontend:** EJS (Embedded JavaScript templating), CSS, HTML5, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Media Storage:** Cloudinary (configured via `cloudConfig.js`)
* **Validation:** Joi / server-side schema validation (`schema.js`)

## 📂 Project Structure

```text
Wanderlust/
├── controllers/    # Contains the core logic for routing endpoints (Listings, Reviews, Users)
├── init/           # Database initialization scripts and sample seed data
├── models/         # Mongoose database schemas (e.g., Listing, Review, User)
├── public/         # Static assets (custom CSS, client-side JS, images)
├── routes/         # Express routers compartmentalizing the application's endpoints
├── utils/          # Utility functions and custom error handler classes
├── views/          # EJS templates for rendering the UI components and layouts
├── app.js          # Main application entry point and server configuration
├── cloudConfig.js  # Cloudinary configuration for handling media uploads
├── middleware.js   # Custom Express middleware (authentication, authorization, validation)
└── schema.js       # Server-side validation schemas
