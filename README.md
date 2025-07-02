# 🧠 AI-Powered Feedback Collector

This is a full-stack web application that allows users to submit feedback, which is automatically analyzed using OpenAI or DeepSeek LLM for sentiment and summary. Built with a modern frontend (via Bolt.new), Node.js microservices, and PostgreSQL running in Docker containers.

---

## 🔧 Tech Stack

| Layer       | Tech                                 |
|-------------|--------------------------------------|
| Frontend    | Bolt.new (React/Next.js export)      |
| Backend     | Node.js + Express microservices      |
| AI Engine   | OpenAI API (can be replaced with DeepSeek) |
| Database    | PostgreSQL (Docker container)        |
| Container   | Docker + Docker Compose              |

---

## 🚀 Features

- 📝 User submits feedback via frontend
- 🔍 AI service analyzes and returns:
  - Summary
  - Sentiment (positive/neutral/negative)
- 📊 All feedback is stored and retrieved from PostgreSQL
- 🔐 Optional: Auth microservice (future expansion)

---

## 📁 Project Structure

```

ai-feedback-app/
├── frontend/                  # UI built using Bolt.new
├── backend/
│   ├── feedback-service/      # Stores and fetches feedback
│   ├── ai-service/            # Calls LLM to analyze feedback
│   └── db/
│       └── init.sql           # PostgreSQL schema
├── docker-compose.yml
└── README.md

````

---

## 🐳 Getting Started (Local)

### Prerequisites

- Docker + Docker Compose
- OpenAI API key

### 1. Clone or Download Project

```bash
git clone <your-repo-url>
cd ai-feedback-app
````

### 2. Add your OpenAI key

Create a file:
`backend/ai-service/.env`

```env
OPENAI_API_KEY=your_openai_key_here
```

### 3. Start all services

```bash
docker-compose up --build
```

### 4. Access APIs

| Endpoint         | Description                 |
| ---------------- | --------------------------- |
| `POST /feedback` | Submit user feedback        |
| `GET /feedback`  | Retrieve all feedback       |
| `POST /analyze`  | AI analysis (internal call) |

* Feedback Service → `http://localhost:4001`
* AI Service → `http://localhost:4002`

---

## 🖼️ Connect Frontend to Backend

Update your Bolt.new export to use:

```js
POST to http://localhost:4001/feedback
GET from http://localhost:4001/feedback
```

Use Axios, fetch, or React Query.

---

## 📦 Deployment Options

* **Frontend**: Deploy to Vercel or Netlify
* **Backend**: Deploy to AWS ECS/Fargate or Render
* **Database**: Use Amazon RDS or PostgreSQL on EC2

---

## 📌 Future Ideas

* 🔐 Add user authentication
* 📊 Dashboard analytics by sentiment
* 💬 AI-powered reply suggestions
* 🌐 Multi-language support

---

## 🙏 Credits

* UI: [Bolt.new](https://bolt.new)
* AI: [OpenAI](https://platform.openai.com/)
* Backend: Node.js + Docker

```

