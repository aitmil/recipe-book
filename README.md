# Recipe Book

This is a full-stack **Recipe Book** application that allows users to browse recipes. The project is structured with a backend API and a frontend UI, running concurrently.

---

## Tech Stack

### Frontend:

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for building server-side rendered (SSR) applications.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **TypeScript**: A superset of JavaScript that adds static typing.

### Backend:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework for handling routing and middleware.
- **Axios**: For making HTTP requests (from backend to external APIs).
- **Winston**: A logging library for backend logging.

### Development Tools:

- **Nodemon**: A tool that automatically restarts the backend server during development.
- **Concurrently**: A utility to run multiple npm scripts concurrently.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Prettier**: A code formatter to maintain consistent code style.
- **ESLint**: A linting tool to analyze and fix potential issues in the code.

---

## Project Structure

- `frontend/` - React (Next.js) application that serves the user interface.
- `backend/` - Node.js/Express application that handles API requests.

The frontend communicates with the backend API to display and manage recipes.

---

## Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd recipe-book
```

### 2. Install Dependencies and Set Environment Variables

First, navigate to the backend directory and install its dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following environment variables:

```env
PORT=5000
BASE_API_URL=https://www.themealdb.com/api/json/v1/1
```

Next, navigate to the `frontend/` directory and install its dependencies:

```env
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory with the following environment variables:

```env
NEXT_PUBLIC_PROJECT_TOKEN=http://localhost:5000
```

### 3. Run the Application

Go back to the root of the `recipe-book/` directory and start both the backend and frontend concurrently:

```env
cd ..
npm start
```

This command will:

Start the backend server on port **5000**
Start the frontend server on port **3000**
The frontend will automatically connect to the backend API.

### 4. Access the Application

Frontend: [http://localhost:3000](http://localhost:3000)
Backend: [http://localhost:5000](http://localhost:5000)

---

## Author

This test project was developed by **Anna Taranchuk** as part of a full-stack development journey.
If you have any questions or suggestions, feel free to reach out:

- **Email**: [taranchuk4@gmail.com](mailto:taranchuk4@gmail.com)
- **GitHub**: [github.com/aitmil](https://github.com/aitmil)
