# Postify

A full-stack social media application built with the MERN stack where users can create image-based posts, interact through likes and comments, manage profiles, and use the application across responsive light and dark interfaces.

Postify was built end-to-end to practice full-stack application development, authentication and authorization, image uploads, shared state management, responsive UI development, and production deployment.

## Live Demo

**Live Application:** https://post-postify.vercel.app

> The backend is deployed on Render's free tier, so the first request may take some time if the service has been inactive.

## Screenshots

<p align="center">
  <img width="374" height="806" alt="Screenshot 2026-07-10 at 3 27 55 PM" src="https://github.com/user-attachments/assets/b1a8223a-4923-4133-ab02-28a258262586" />
<img width="375" height="808" alt="Screenshot 2026-07-10 at 3 29 58 PM" src="https://github.com/user-attachments/assets/2c92b903-718a-4a0b-8223-42c556d6600c" />
</p>

<p align="center">
  <img width="374" height="808" alt="Screenshot 2026-07-10 at 3 31 02 PM" src="https://github.com/user-attachments/assets/717592b0-6753-4cb2-b1a9-04d5f915203e" />
<img width="373" height="806" alt="Screenshot 2026-07-10 at 3 32 09 PM" src="https://github.com/user-attachments/assets/60642d54-d4a1-4b92-a019-a9f953d76dc1" />
</p>

> Update the screenshot paths above if your current screenshot filenames are different.

## Features

### Authentication & Authorization

- User registration, login, and logout
- JWT-based authentication using HTTP-only cookies
- Persistent authentication sessions
- Protected frontend and backend routes
- Ownership-based authorization for posts, comments, and profiles
- Production-ready secure cross-site cookie configuration

### Posts & Interactions

- Create image-based posts with captions
- Upload and store images using Cloudinary
- Responsive social feed with consistent image dimensions
- Full-screen responsive image preview
- Like and unlike posts
- Add and delete comments
- Delete owned posts
- Synchronized UI updates using centralized state management

### User Profiles

- Dynamic user profile pages
- View your own and other users' profiles
- Edit username, bio, and profile picture
- Cloudinary-based profile image uploads
- Profile ownership controls
- Immediate profile updates across the application

### UI & User Experience

- Responsive mobile-first interface
- Desktop navbar and mobile bottom navigation
- Dark and light theme support
- Persistent theme preference
- Reusable loaders and skeleton states
- Smooth page, modal, and theme transitions
- Reduced-motion accessibility support
- Reusable SVG icon components

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Framer Motion
- Context API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary
- Cookie Parser
- CORS

### Deployment & Services

- **Vercel** — Frontend
- **Render** — Backend
- **MongoDB Atlas** — Production Database
- **Cloudinary** — Image Storage

## Project Structure

```text
Postify/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
│
└── README.md
```

## Authentication & State Management

Postify uses JWT-based authentication with HTTP-only cookies.

After registration or login, the backend generates a JWT and stores it in an HTTP-only cookie. Axios sends authenticated requests with credentials, while backend authentication middleware protects private routes and ownership checks prevent unauthorized resource modification.

Application-level state is managed using React Context API.

**AuthContext** handles the authenticated user, session restoration, authentication loading state, and logout flow.

**PostsContext** manages feed posts, likes, comments, post creation and deletion, modal state, and profile-related post synchronization.

This keeps shared UI state synchronized across components without requiring full page reloads.

## Environment Variables

Create a `.env` file inside `backend`:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

FRONTEND_URL=http://localhost:5173
```

Create a `.env` file inside `frontend`:

```env
VITE_API_URL=http://localhost:4000
```

Never commit `.env` files containing credentials or secrets.

## Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Jatin915/Postify.git
cd Postify
```

### 2. Run the Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:4000
```

### 3. Run the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## Key Technical Challenges

### Cross-Site Authentication

The frontend and backend are deployed on different domains.

Production authentication required correctly configuring:

- CORS with credentials
- Axios `withCredentials`
- HTTP-only cookies
- `SameSite=None` in production
- Secure cookies in production
- Matching cookie options during logout

### Shared State Synchronization

Likes, comments, post creation, deletion, and profile updates affect multiple parts of the interface.

Centralized state management using Context API keeps the application synchronized without unnecessary page reloads or repeated API fetching.

### Image Upload Pipeline

Post and profile images follow this upload flow:

```text
Client File Selection
        │
        ▼
Multipart Form Data
        │
        ▼
Multer Middleware
        │
        ▼
Cloudinary Upload
        │
        ▼
Image URL Stored in MongoDB
        │
        ▼
Responsive Image Rendering
```

### Production Deployment

Moving Postify from local development to production required solving issues involving:

- Missing production dependencies
- CORS origin configuration
- Cross-site cookie behavior
- Environment variable management
- MongoDB Atlas connectivity
- SPA routing configuration

## Development History

Postify was developed incrementally using phase-based commits.

The Git history documents the progression from backend architecture and authentication to frontend integration, social features, centralized state management, profile functionality, responsive UI redesign, animations, production deployment, and final mobile UX improvements.

This development history has been preserved after moving Postify from a learning monorepo into its standalone repository.

## Future Improvements

- Profile image cropping before upload
- Pagination or infinite scrolling
- User search and discovery
- Follow/unfollow system
- Notifications
- Automated frontend and backend tests
- Rate limiting and additional API security
- Performance monitoring

## Author

**Jatin Gupta**

B.Tech Computer Science student and Full Stack Developer focused on building and deploying full-stack web applications while strengthening backend development, data structures, and software engineering skills.

GitHub: https://github.com/Jatin915

## License

This project is currently intended for educational and portfolio purposes.
