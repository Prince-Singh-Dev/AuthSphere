#  AuthSphere – Secure MERN Authentication Platform

AuthSphere is a full-stack web application built using the MERN stack that provides a secure and scalable user authentication system. It includes user registration, login, protected routes, and a fully deployed production-ready environment.

---

##  About The Project

AuthSphere is designed to demonstrate real-world backend architecture and secure authentication practices. It focuses on building a robust system where users can safely register, log in, and manage their sessions.

This project is not just a basic login system — it represents a production-level authentication flow with proper backend handling, database management, and deployment.

---

##  Tech Stack

### Frontend

* React.js
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose ODM)

### Authentication & Security

* JSON Web Tokens (JWT)
* Bcrypt.js (Password Hashing)
* Protected Routes & Middleware

### Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

##  Features

*  User Signup & Login System
*  Secure Password Hashing using Bcrypt
*  JWT-based Authentication
*  Protected Routes (Frontend + Backend)
*  RESTful API Architecture
*  Fully Deployed Live Application
*  Fast and Responsive UI

---

##  Project Structure

```
AuthSphere/
│
├── client/        # React Frontend
│   ├── src/
│   └── public/
│
├── server/        # Node + Express Backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── middleware/
│
└── README.md
```

---

## Workflow

1. User registers with email & password
2. Password is hashed using Bcrypt
3. Data is stored securely in MongoDB
4. User logs in → JWT token is generated
5. Token is used to access protected routes
6. Middleware verifies authentication

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Prince-Singh-Dev/Authsphere.git
cd Authsphere
```

### 2. Install Dependencies

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file in the server folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run the Application

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm start
```

---

##  Live Demo

🔗 Live Website: https://your-live-link.com
🔗 Backend API: https://your-api-link.com

---

##  Screenshots

(Add screenshots here of login/signup/dashboard)

---

##  Future Enhancements

*  Refresh Token System
*  Email Verification
*  OAuth (Google Login)
*  User Dashboard
*  Role-Based Access Control

---

##  Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

##  License

This project is licensed under the MIT License.

---

##  Author

Prince Singh
 [princesingh6173@gmail.com](mailto:princesingh6173@gmail.com)
 GitHub: https://github.com/Prince-Singh-Dev

---
