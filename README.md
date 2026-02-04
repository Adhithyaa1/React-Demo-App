# React-Demo-App
Technical Interview Task for youbloom

This is a small React application built as a practical example of common frontend patterns: authentication flow, routing, API data fetching, search, and basic testing. The project is intentionally kept simple, readable, and close to what you’d write in a real-world take‑home assignment or starter app.

---

## Features

* Phone-number based login (mocked)
* Protected routes using React Router
* Data fetched from a public API
* Searchable list view
* Detail page per item
* Sign out functionality
* Basic unit test with Jest and React Testing Library

---

## Tech Stack

* **React** (functional components, Hooks)
* **React Router v6** for navigation
* **Fetch API** for data requests
* **Jest + React Testing Library** for testing
* **localStorage** for simple auth state

---

## Project Structure

```
src/
 ├─ components/        # Reusable UI components
 │   ├─ ProtectedRoute.jsx
 │   └─ SearchBar.jsx
 ├─ pages/             # Page-level components
 │   ├─ LoginPage.jsx
 │   ├─ MainPage.jsx
 │   └─ DetailPage.jsx
 ├─ services/          # API logic
 │   └─ api.js
 ├─ tests/             # Unit tests
 │   └─ SearchBar.test.jsx
 ├─ App.jsx            # Route definitions
 └─ index.js           # App entry point
```

---

## Getting Started

### Prerequisites

Make sure you have Node.js installed (LTS version recommended):

```
node -v
npm -v
```

---

### Installation

Clone the repository and install dependencies:

```
npm install
```

Install React Router:

```
npm install react-router-dom
```

---

### Running the App

Start the development server:

```
npm start
```

The app will be available at:

```
http://localhost:3000
```

---

## Usage

### Login

* Enter a valid international phone number (E.164 format), for example:

```
+254712345678
```

* Any valid number will be accepted (authentication is mocked)
* On success, you’ll be redirected to the main page

---

### Main Page

* Displays a list of users fetched from the JSONPlaceholder API
* Includes a search input that filters users as you type
* Clicking a user opens the detail page
* Use the **Sign out** button to end the session

---

### Detail Page

* Shows more information about the selected user
* Includes a button to return to the main list

---

## Testing

To run the unit tests:

```
npm test
```

The SearchBar.test verifies that the `SearchBar` component correctly triggers changes when the user types.


To run tests once (without watch mode):

```
npm test -- --watchAll=false
```

---

## API

This app uses the free JSONPlaceholder API:

* [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

No authentication or API keys are required.

---

## Notes

* Authentication is intentionally mocked for simplicity
* Styling is minimal by design to keep the focus on functionality
* The app structure is easy to extend with real authentication, state management, or a UI library

---

## Possible Improvements

* Replace mocked auth with real backend authentication
* Add form-level validation feedback
* Introduce global state (Context or Redux)
* Improve UI with Tailwind, MUI, or similar
* Add more comprehensive test coverage

---

## License

This project is for learning and demonstration purposes.
