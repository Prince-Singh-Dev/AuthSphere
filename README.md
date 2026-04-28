# 🔐 AuthSphere – Full Stack Authentication System

AuthSphere is a production-ready authentication system built using the MERN stack. It provides secure user authentication with JWT, email verification via OTP, password reset functionality, and cookie-based session management.

---

## 🚀 Live Demo

* 🌐 Frontend: https://authsphere-dfzp.onrender.com
* ⚙️ Backend API: https://authsphere-backend-tue6.onrender.com

---

## 🧠 Features

* 🔐 User Registration & Login
* 🍪 JWT Authentication using **httpOnly cookies**
* 📧 Email Verification with OTP
* 🔄 Password Reset via OTP
* 🔒 Protected Routes
* 🚪 Secure Logout
* 🌐 Fully deployed (Frontend + Backend on Render)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcryptjs (Password Hashing)
* Nodemailer (Email Service)

---

## ⚙️ Environment Variables

### Backend (`.env`)

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
CLIENT_URL=your_frontend_url

SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_api_key
SENDER_EMAIL=your_email
```

### Frontend (`.env`)

```
VITE_BACKEND_URL=your_backend_url
```

---

## 📁 Project Structure

```
AuthSphere/
│
├── client/        # Frontend (React + Vite)
│
├── server/        # Backend (Express + MongoDB)
│
└── README.md
```

---

## 🔑 Authentication Flow

1. User registers → password hashed using bcrypt
2. JWT token generated and stored in httpOnly cookie
3. Email verification via OTP
4. Login → token stored securely in cookies
5. Protected routes validated using middleware
6. Password reset via OTP system

---

## 🧪 Run Locally

### Clone the repo

```
git clone https://github.com/your-username/AuthSphere.git
cd AuthSphere
```

### Run Backend

```
cd server
npm install
npm run server
```

### Run Frontend

```
cd client
npm install
npm run dev
```

---

## 🌍 Deployment

* Backend deployed on Render (Web Service)
* Frontend deployed on Render (Static Site)
* CORS configured for cross-origin requests
* Cookies configured with:

  * `httpOnly`
  * `secure`
  * `sameSite: "none"`

---

## 💡 Future Improvements

* 🔄 Refresh Token System
* 🔑 Google OAuth Integration
* 🚫 Rate Limiting & Brute Force Protection
* 📊 User Dashboard

---

## 🙌 Author

Built by Prince Singh

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and feel free to fork!
