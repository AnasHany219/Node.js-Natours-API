# Natours API 🌍

Welcome to the **Natours API**! 🚀 This API powers the Natours application, providing endpoints to manage tours, users, reviews, and more. Explore the wonders of the world with us!

## 📚 Table of Contents

- [🔍 Overview](#overview)
- [🚀 Getting Started](#getting-started)
- [🔧 API Endpoints](#api-endpoints)
- [⚙️ Usage](#usage)
- [💬 Contact](#contact)

## 🔍 Overview

The Natours API allows you to:

- Explore exciting tours around the globe 🌎
- Manage user profiles and authentication 🔑
- Submit and view reviews ✍️
- Handle bookings and more!

## 🚀 Getting Started

To get started with the Natours API, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AnasHany2193/Natours-API.git
   cd Natours-API
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DATABASE=your_database_url
   EMAIL_FROM=your_email@example.com
   SENDGRID_USERNAME=your_sendgrid_username
   SENDGRID_PASSWORD=your_sendgrid_password
   ```

4. **Start the Server**:
   ```bash
   npm start
   ```

Your API will be running on `http://localhost:3000`.

## 🔧 API Endpoints

Here are some of the main endpoints available:

- **Tours**:

  - `GET /api/v1/tours` - Get all tours
  - `POST /api/v1/tours` - Create a new tour
  - `GET /api/v1/tours/:id` - Get a specific tour
  - `PATCH /api/v1/tours/:id` - Update a tour
  - `DELETE /api/v1/tours/:id` - Delete a tour

- **Users**:

  - `GET /api/v1/users` - Get all users
  - `POST /api/v1/users` - Create a new user
  - `GET /api/v1/users/:id` - Get a specific user
  - `PATCH /api/v1/users/:id` - Update a user
  - `DELETE /api/v1/users/:id` - Delete a user

- **Reviews**:
  - `GET /api/v1/reviews` - Get all reviews
  - `POST /api/v1/reviews` - Create a new review
  - `GET /api/v1/reviews/:id` - Get a specific review
  - `PATCH /api/v1/reviews/:id` - Update a review
  - `DELETE /api/v1/reviews/:id` - Delete a review

For a detailed view of all available endpoints, check out our [Postman Documentation API](https://documenter.getpostman.com/view/36491830/2sA3kVkMEX).

## ⚙️ Usage

After running the server, you can interact with the API endpoints using tools like Postman or cURL. Ensure to include necessary headers and parameters for requests.

## 💬 Contact

For any questions or suggestions, feel free to reach out:

- **LinkedIn**: [Anas Hany](https://www.linkedin.com/in/anashany219/)
- **GitHub**: [AnasHany2193](https://github.com/AnasHany2193)

---
