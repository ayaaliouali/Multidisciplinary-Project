# Multidisciplinary-Project

# 🛒 E-Commerce Backend API

This is the backend API for a feature-rich e-commerce platform. It supports user authentication, product and cart management, messaging, commenting with ratings, and admin-level user control. Built with Node.js and Express, it leverages MongoDB for storage and uses JWT for authentication.


## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Socket.io** (real-time messaging)
- **JWT Authentication**
- **Helmet, Rate Limiting, CORS** (security & access control)

---

## 📁 Project Structure

```
src/
├── config/            # Database config
├── controllers/       # Route controllers
├── middlewares/       # Auth middleware
├── models/            # Mongoose schemas
├── routes/            # Express route definitions
├── socket.js          # Socket.io setup
index.js               # App entry point
```

---

## 📌 API Endpoints

### 🔐 Authentication (`/auth`)
- `POST /auth/login` — User login
- `POST /auth/register` — New user registration

### 👤 User (`/users`)
👤 Users (/users)
GET /users — Get all users (admin only)
GET /users/:id — Get a user by ID (auth required)
PUT /users/:id — Update user profile (auth required)
DELETE /users/:id — Delete user (admin only)

> ✅ All protected routes require token in headers:  
> `Authorization: Bearer <token>`

### 🛍️ Products (`/api/products`)
- `GET /api/products` — List all products
- `POST /api/products` — Create new product

### 🛒 Cart (`/api/cart`)
- `GET /api/cart/:userId` — Get user’s cart
- `POST /api/cart/:userId/add` — Add item to cart
- `POST /api/cart/:userId/remove` — Remove item from cart
- `POST /api/cart/:userId/update` — Update quantity in cart

### 💬 Comments & Ratings (`/api/v1/comments`)
- `POST /comments` — Submit a comment and rating
- `GET /comments/product/:productId` — Product comments
- `GET /comments/product/:productId/average` — Average rating
- `PUT /comments/:id` — Edit comment (auth required)
- `DELETE /comments/:id` — Delete comment (auth required)

### ✉️ Messaging (`/message`)
- `GET /message/users` — Users list (sidebar)
- `GET /message/:id` — Messages with user
- `POST /message/send/:id` — Send message

---

## 💬 Socket.io Events

- `joinRoom({ senderId, receiverId })` — Joins a private chat
- `disconnect` — Handles user disconnection

Room IDs are generated as sorted strings of `senderId-receiverId`.

---

## 🔐 Middleware

- `helmet()` — Secures HTTP headers
- `rateLimit()` — Limits 100 requests every 10 minutes
- `cors()` — Enables CORS
- `auth.protect()` — Auth middleware for JWT
- `auth.admin()` — Admin role verification

---

## 🔧 Environment Variables (`.env`)

| Key          | Description               |
|--------------|---------------------------|
| `JWT_SECRET` | Secret key for JWT tokens |

---

## 🧪 Run Locally

```bash
npm install
npm run dev
```

MongoDB must be running locally or accessible remotely via URI in your `.env`.

---

## 📌 Notes

- All API responses are JSON.
- Error handling included for common failure cases.
- Project is modular and easy to scale.

---

## 📃 License

MIT — Free to use, modify and share.
