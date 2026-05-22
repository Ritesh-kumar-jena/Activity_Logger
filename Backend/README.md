# Activity Logger Backend API

## Overview

This project is a Role-Based Access Control (RBAC) backend built using Node.js, Express.js, MongoDB, JWT Authentication, and Mongoose.

The backend provides:

- User Authentication
- JWT Authorization
- Role-Based Access Control
- Task Management APIs
- Admin APIs
- Activity Logging System

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv
- cors

---

# Features

## Authentication

- User Signup
- User Login
- JWT Token Authentication
- Protected Routes

## Role-Based Access Control

Two roles are supported:

- Admin
- User

## Admin Permissions

Admin can:

- View all users
- Delete any user
- Update user status
- View all tasks
- Delete any task

## User Permissions

Users can:

- Create their own tasks
- View only their own tasks
- Update only their own tasks
- Delete only their own tasks

## Activity Logging

The system tracks:

- User Login
- Task Creation
- Task Update
- Task Deletion

---

# Folder Structure

```bash
Backend/
│
├── Controller/
│   ├── adminRoutes.js
│   ├── taskRoutes.js
│   └── userRotes.js
│
├── Middelware/
│   ├── auth.js
│   └── RoleBasedAccessControl_Auth.js
│
├── Model/
│   ├── activityModel.js
│   ├── taskModel.js
│   └── userModel.js
│
├── Utils/
│   └── createActivity.js
│
├── db.js
├── index.js
├── package.json
└── .env
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

## Run Server

```bash
npm run dev
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
port=3000

database=your_mongodb_connection_url

key=your_jwt_secret_key
```

---

# API Endpoints

# User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users/signIn | Register user |
| POST | /users/login | Login user |
| PATCH | /users/edit/:id | Update own profile |
| DELETE | /users/delete/:id | Delete own profile |
| GET | /users/profile/:id | Get own profile |

---

# Task Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /tasks/create | Create task |
| GET | /tasks/mytasks | Get own tasks |
| PATCH | /tasks/update/:id | Update own task |
| DELETE | /tasks/delete/:id | Delete own task |

---

# Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /admin/allusers | Get all users |
| DELETE | /admin/deleteuser/:id | Delete any user |
| PATCH | /admin/status/:id | Update user status |
| GET | /admin/alltasks | View all tasks |
| DELETE | /admin/deletetask/:id | Delete any task |

---

# Authentication

Protected routes require JWT token.

Add token in headers:

```bash
Authorization: Bearer <token>
```

---

# Database Models

## User Model

```js
{
  name,
  email,
  pass,
  role,
  status
}
```

## Task Model

```js
{
  title,
  description,
  createdBy
}
```

## Activity Log Model

```js
{
  user,
  action,
  details
}
```

---

# Security Features

- Password hashing using bcrypt
- JWT Authentication
- Protected Routes
- Role-Based Authorization
- User ownership validation

---

# Activity Logger Examples

## Login Activity

```js
{
  action: "LOGIN"
}
```

## Task Creation

```js
{
  action: "TASK_CREATED"
}
```

## Task Update

```js
{
  action: "TASK_UPDATED"
}
```

## Task Delete

```js
{
  action: "TASK_DELETED"
}
```

---

# Future Improvements

- Refresh Tokens
- Pagination
- Search & Filters
- Swagger Documentation
- Rate Limiting
- Unit Testing
- Soft Delete

---

# Author

Ritesh Kumar Jena

---

# Conclusion

This backend successfully implements:

- JWT Authentication
- Role-Based Access Control
- Protected APIs
- Admin/User Authorization
- Activity Logging System
- Task Management APIs
- MongoDB Integration

The project fulfills all requirements of the assignment.

