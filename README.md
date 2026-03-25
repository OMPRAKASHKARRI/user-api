# 🚀 User Management REST API

A simple and clean **User Management REST API** built using Node.js and Express.
This API supports full CRUD operations along with search and sorting functionality.

---

## ✨ Features

* 📄 Get all users
* 🔍 Search users by name or email
* 🔄 Sort users by name
* 👤 Get user by ID
* ➕ Create new user
* ✏️ Update existing user
* ❌ Delete user

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* UUID
* File System (JSON file for storage)

---

## 📁 Project Structure

```id="str1"
user-api/
 ├── data/
 │    └── users.json
 ├── routes/
 │    └── users.js
 ├── app.js
 ├── package.json
```

---

## ⚙️ Installation & Setup

```bash id="cmd1"
git clone https://github.com/your-username/user-api.git
cd user-api
npm install
node app.js
```

---

## 🌐 Base URL

```id="url1"
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔹 Get All Users

```id="api1"
GET /users
```

### 🔹 Search Users

```id="api2"
GET /users?search=keyword
```

### 🔹 Sort Users

```id="api3"
GET /users?sort=name&order=asc
```

---

### 🔹 Get User by ID

```id="api4"
GET /users/:id
```

---

### 🔹 Create User

```id="api5"
POST /users
```

**Body:**

```json id="body1"
{
  "name": "John",
  "email": "john@example.com",
  "phone": "1234567890",
  "company": "ABC"
}
```

---

### 🔹 Update User

```id="api6"
PUT /users/:id
```

---

### 🔹 Delete User

```id="api7"
DELETE /users/:id
```

---

## 🚀 Deployment

This API is deployed on Render.

👉 Live API:
https://user-api-yyuk.onrender.com/

---

## 💡 Key Highlights

* RESTful API design
* CRUD operations implemented
* Search and sorting using query parameters
* JSON file used as lightweight database
* Clean and modular code structure

---

## 🙌 Author

**Omprakash**

---

⭐ If you found this useful, feel free to star the repo!
