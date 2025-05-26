# ANGULAR_BLOG_BACKEND
# 🧩 Full-Stack Mini Projects

This repository contains two full-stack mini projects:

1. **Mini Blog Application (Frontend + Backend)**
2. **User Authentication API (Backend Only)**

---

## 🚀 Task 1: Mini Blog Application

A simple blog platform built using Angular, Node.js, Express.js, and MongoDB.

### 🎯 Objective

Allow users to create and view blog posts.

### 🖼️ Screenshots

<img src="images/Screenshot 2025-05-26 204944.png" width="600"/>
<img src="images/Screenshot 2025-05-26 204959.png" width="600"/>
<img src="images/Screenshot 2025-05-26 205805.png" width="600"/>
<img src="images/Screenshot 2025-05-26 205825.png" width="600"/>

### 🧱 Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js + Express.js
- **Database**: MongoDB

### 📌 Features

#### Frontend (Angular)
- ✅ Form to create a blog post (title, content)
- ✅ Page to list all blog posts
- ✅ Loading spinner while posts are being fetched
- ✅ Angular services for clean API interaction

#### Backend (Node + Express)
- ✅ `POST /posts` – Save blog posts to MongoDB
- ✅ `GET /posts` – Retrieve all blog posts

#### Database (MongoDB)
- Blog Post Schema:
  ```json
  {
    "title": "String",
    "content": "String",
    "createdAt": "Date"
  }
