# Activity Logger Frontend

## Overview

This project is a React.js frontend application built for the Activity Logger Management System.

The application provides:

- User Authentication
- Role-Based Access Control
- Admin Dashboard
- User Management
- Task Monitoring
- Protected Routes
- Analytics Dashboard
- Responsive UI

The frontend is integrated with the Node.js + MongoDB backend API.

---

# Tech Stack

- React.js
- Vite
- Chakra UI
- React Router DOM
- Axios
- JWT Decode
- Framer Motion

---

# Features

## Authentication

- User Login
- JWT Token Storage
- Auto Authentication Check
- Logout Functionality

## Role-Based Access Control

Two roles are supported:

- Admin
- User

## Admin Features

Admin can:

- Access Admin Dashboard
- View all users
- Monitor all tasks
- Delete users
- Delete tasks
- View analytics

## User Features

Users can:

- Login securely
- Access protected pages
- View only allowed routes

## Dashboard Analytics

Dashboard displays:

- Total Users
- Total Tasks
- Pending Tasks
- Task Monitoring

## UI Features

- Responsive Design
- Chakra UI Components
- Protected Routing
- Admin Only Navigation
- Modern Layout

---

# Folder Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── PrivateRoute.jsx
│   └── AdminRoute.jsx
│
├── contex/
│   └── AuthContextProvider.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── UserManagement.jsx
│   ├── TaskMonitoring.jsx
│   ├── ActivityLogs.jsx
│   ├── About.jsx
│   ├── ContactUs.jsx
│   └── NotFoundPage.jsx
│
├── routes/
│   └── Allroutes.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Installation

## Clone Repository

```bash
git clone <https://github.com/Ritesh-kumar-jena/Activity_Logger.git>
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

---

# Frontend Dependencies

```json
{
  "@chakra-ui/react": "^2.10.9",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "axios": "^1.16.1",
  "framer-motion": "^10.18.0",
  "jwt-decode": "^4.0.0",
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "react-router-dom": "^7.15.1"
}
```

---

# API Integration

Axios is used for API requests.

## Base URL

```js
https://activity-logger-2.onrender.com
```

## Authorization Header

JWT token is automatically attached using Axios interceptors.

```js
Authorization: Bearer <token>
```

---

# Authentication Flow

1. User logs in
2. JWT token stored in localStorage
3. Token decoded using jwt-decode
4. User role fetched from backend
5. Admin routes protected using role-based routing

---

# Routes

## Public Routes

| Route | Description |
|------|-------------|
| / | Home Page |
| /login | Login Page |
| /about | About Page |
| /contactUs | Contact Page |

---

## Admin Protected Routes

| Route | Description |
|------|-------------|
| /dashboard | Admin Dashboard |
| /users | User Management |
| /tasks | Task Monitoring |
| /logs | Activity Logs |

---

# Role-Based Routing

## PrivateRoute

Protects routes from unauthenticated users.

## AdminRoute

Restricts access to Admin users only.

---

# Context API

Authentication state is managed using React Context API.

## Context Features

- isLogin
- isAdmin
- userId
- Token validation
- Auto login persistence

---

# Responsive Design

The UI is fully responsive using Chakra UI.

Features:

- Mobile responsive layouts
- Flexible grids
- Responsive navbar
- Clean dashboard cards

---

# Security Features

- JWT Authentication
- Protected Routes
- Admin Access Control
- Token Expiry Validation
- Role-Based Navigation

---

# Expected Deliverables Completed

✅ Working role-based authentication

✅ Admin dashboard with proper access control

✅ Clean responsive UI

✅ Proper backend API integration

✅ Protected routes

✅ Role-based UI rendering

---

# Future Improvements

- User Signup UI
- Dark Mode
- Charts & Graphs
- Real Activity Logs Table
- Pagination
- Search & Filters
- Toast Notifications
- Redux State Management

---

# Author

Ritesh Kumar Jena

---

# Conclusion

This frontend application successfully implements:

- React.js Frontend Architecture
- JWT Authentication
- Role-Based Access Control
- Protected Admin Dashboard
- API Integration with Backend
- Responsive Chakra UI Design

The project fulfills all frontend assignment requirements.

