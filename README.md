# 🏃‍♂️ springREST

This project marks the beginning of my journey into **Java**, **Spring Boot**, and the **microservices architecture**. 
It is a hands-on, end-to-end application designed to store and manage data about **Runners** (Categories) and their **Shoes** (Elements).

The system follows modern microservice principles with components such as service discovery, routing, multiple data sources, and a separate frontend written in **Angular**.

---

## 🧩 Architecture Overview

Each microservice is independently deployable and communicates through HTTP, managed by the **Spring Cloud Eureka Discovery Service**.

## 🗃️ Data Management

### Runtime Data (Volatile)

- Managed via **H2 in-memory database**
- Handled by JPA repositories
- Used for fast access and testing logic at runtime

### Archived Data (Persistent)

- Stored in **MongoDB** instances:
  - One for **Runners** (Categories)
  - One for **Shoes** (Elements)
- Data in MongoDB is **never deleted**, ensuring a historical archive of all records

---

## ⚙️ Services Description

| Service               | Description                                                                  |
|-----------------------|------------------------------------------------------------------------------|
| **Gateway Service**   | Acts as a reverse proxy. Forwards incoming API calls to correct microservice |
| **Discovery Service** | Registers all services and handles load balancing between instances          |
| **Category Service**  | Manages logic for Runners (Categories). Connected to H2 + MongoDB            |
| **Element Service**   | Manages logic for Shoes (Elements). Connected to H2 + MongoDB                |

---

## 🔌 Frontend

- **Angular SPA** connects users to the backend via the **Gateway Service**
- It communicates with REST endpoints exposed by each backend microservice
- Can be served independently or integrated into the Spring Boot application
