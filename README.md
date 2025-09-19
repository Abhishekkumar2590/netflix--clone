# Netflix Clone

This project is a Netflix clone built using React and Vite. It features user authentication, movie browsing, and video playback functionalities. The app integrates with Firebase for authentication and Firestore for user data storage. Movie data and trailers are fetched from The Movie Database (TMDB) API.

## Features

- User authentication with Firebase (sign up, login, logout)
- Browse movies by categories such as popular, top rated, upcoming, and now playing
- Watch movie trailers embedded from YouTube
- Responsive UI with a Netflix-like design
- Navigation with React Router
- Toast notifications for user feedback
- Scrollable movie cards with mouse wheel support
- 404 Not Found page for invalid routes

## Technologies Used

- React 19
- Vite
- React Router DOM
- Firebase Authentication and Firestore
- TMDB API for movie data
- React Toastify for notifications
- CSS for styling

## Project Structure

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
├── package.json
├── vite.config.js
└── README.md
```

## Setup and Running

1. Clone the repository
2. Navigate to the `vite-project` directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open `http://localhost:5181` in your browser

## Notes

- Ensure you have a Firebase project set up with the correct configuration in `src/firebase.js`.
- The TMDB API key is embedded in the code for fetching movie data.
- The app uses React Router for navigation and supports a 404 Not Found page for invalid URLs.

## Testing

- Test user authentication flows (sign up, login, logout)
- Test browsing movies in different categories
- Test playing trailers on the player page
- Test navigation and 404 page handling

## License

This project is for educational purposes.
