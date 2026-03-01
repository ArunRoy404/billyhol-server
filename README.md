# 🏠 Wenthura - Modern Application Backend

Wenthura is a robust backend service for a modern application, built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.  
It provides the necessary infrastructure for user requests, communication, and core business operations.

---

## 📁 Project Structure

```bash
billyhol-server/
├── src/
│   ├── config/         # Database connection & environment configs
│   ├── controllers/    # Business logic & request handlers
│   ├── emailTemplates/ # Email HTML templates
│   ├── lib/            # Shared libraries & utilities
│   ├── middlewares/    # Authentication, error handling, etc.
│   ├── models/         # Mongoose schemas and models
│   ├── routes/         # API routes
│   ├── app.js          # Express application setup
│   └── index.js        # Entry point of the backend server
├── .env                # Environment variables (not committed)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ArunRoy404/billyhol-server.git
cd billyhol-server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy the example environment file and update with your values:

```bash
cp .env.example .env
```

Edit the `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
RESEND_API_KEY=your_resend_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NODE_ENV=development
```

### 4. Run the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will start at:  
👉 `http://localhost:5000`

---

## 📦 Available Scripts

| Command       | Description                   |
| ------------- | ----------------------------- |
| `npm run dev` | Run server with nodemon (dev) |
| `npm start`   | Run server in production mode |
| `npm test`    | Run test suite (if available) |

---

## 🛠️ Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT** – Authentication tokens
- **Bcryptjs** – Password hashing
- **Nodemailer** – Email service
- **Resend** – Transactional emails
- **Stripe** – Payment gateway integration
- **CORS** – Cross-origin resource sharing
- **Dotenv** – Environment variables

---

## 🔐 API Features

### 📩 Request Access
- Submit user requests for platform access.
- Validated fields: full name, address, country, phone, description.
- Background processing for request handling.

### 📞 Contact Management
- Specialized API for user inquiries.
- Direct integration with email notifications.
- Data persistence for all contact submissions.

### 🛡️ Authentication & Security
- JWT-based authentication middleware.
- Admin-level authorization checks.
- Password hashing using Bcryptjs.

---

## 🧭 Future Enhancements

- 📊 Admin dashboard APIs
- 📍 Location-based services
- 💬 Real-time notification system
- 💳 Full payment lifecycle management
- 🔍 Advanced analytics and reporting

---

## 🌿 Team Workflow & Branching Strategy

To maintain code quality and avoid conflicts, **every team member must work on feature branches**.

### 🪄 Step-by-Step Development Guide:

1. **Always start with the latest main branch:**

   ```bash
   git checkout main
   git pull origin main
   ```

2. **Create a new feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes and commit:**

   ```bash
   git add .
   git commit -m "feat: add contact form endpoint"
   # Use conventional commit messages:
   # feat: for new features
   # fix: for bug fixes
   # docs: for documentation
   # style: for formatting
   # refactor: for code refactoring
   ```

4. **Push your branch to GitHub:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request (PR):**

   - Go to GitHub repository
   - Create PR from your branch to `main`
   - Add description of changes
   - Request review from team members

6. **After PR approval:**
   - Team lead will merge the PR
   - Delete the feature branch

### 🔄 Sync Your Local Repository:

```bash
# Fetch latest changes from main
git fetch origin

# Rebase your feature branch
git checkout feature/your-feature-name
git rebase origin/main

# Resolve any conflicts if they occur
```

---

## 🐛 Issue Reporting

Found a bug? Please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 🌐 Project Links

- **Backend Repository:** [https://github.com/ArunRoy404/billyhol-server](https://github.com/ArunRoy404/billyhol-server)
- **Frontend Repository:** [https://github.com/ArunRoy404/billyhol-client](https://github.com/ArunRoy404/billyhol-client)
- **API Deployment:** [https://billyhol-server.vercel.app](https://billyhol-server.vercel.app)
- **Frontend Application:** [https://billyhol-react.vercel.app](https://billyhol-react.vercel.app)

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create your feature branch
3. Follow the coding standards
4. Add tests if applicable
5. Submit a pull request

---

💡 **Wenthura** — Building the future of modern platform technology, one line of code at a time.

---


