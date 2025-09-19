# Netflix Clone Architecture

## Overview
This is a React-based Netflix clone application built with Vite, featuring user authentication, movie browsing, and video playback. It integrates with Firebase for authentication and Firestore for user data, and uses The Movie Database (TMDB) API for movie information.

## High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Firebase      │    │   TMDB API      │
│   (React/Vite)  │◄──►│   Auth & DB     │    │   Movie Data    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐
│   Browser       │
│   (User)        │
└─────────────────┘
```

## Component Structure

```
App (Root)
├── BrowserRouter
    ├── Routes
        ├── / (Home)
        │   ├── Navbar
        │   ├── Hero Section
        │   ├── TitleCard (multiple categories)
        │   └── Footer
        ├── /login (Login)
        │   ├── Login Form
        │   └── Sign Up Form
        └── /player/:id (Player)
            ├── Back Button
            ├── YouTube Iframe
            └── Video Info
```

## Key Components

### App.jsx
- Main application component
- Handles routing with React Router
- Manages authentication state with Firebase
- Redirects users based on login status

### Home.jsx
- Main landing page
- Displays hero banner and movie categories
- Uses TitleCard components for different movie lists

### Login.jsx
- Authentication page
- Handles sign in and sign up
- Integrates with Firebase Auth

### Player.jsx
- Video playback page
- Fetches trailer data from TMDB API
- Embeds YouTube video

### Navbar.jsx
- Navigation bar
- Includes logo, menu items, search, notifications, profile
- Handles logout functionality

### TitleCard.jsx
- Displays horizontal scrollable movie cards
- Fetches movie data from TMDB API based on category
- Links to individual movie players

### Firebase Integration
- Authentication (sign in, sign up, logout)
- User data storage in Firestore
- Real-time auth state monitoring

## Data Flow

1. User accesses the app
2. App checks authentication state via Firebase
3. If not logged in, redirects to /login
4. If logged in, loads Home page
5. Home page fetches movie data from TMDB API
6. User can browse movies and click to watch trailers
7. Player page fetches specific movie video data

## Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** CSS (with potential for Tailwind)
- **Authentication:** Firebase Auth
- **Database:** Firestore
- **API:** TMDB API
- **Notifications:** React Toastify
- **Icons/Images:** Static assets

## File Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── TitleCard/
│   │   └── Profiles/
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── Login/
│   │   └── Player/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   ├── firebase.js
│   └── index.css
├── public/
└── package.json
```

This architecture provides a scalable, component-based structure for a streaming platform clone, with clear separation of concerns between UI components, authentication, and external API integrations.
