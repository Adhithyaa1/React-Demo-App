import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => (
<Routes>
<Route path="/login" element={<LoginPage />} />


<Route
path="/"
element={
<ProtectedRoute>
<MainPage />
</ProtectedRoute>
}
/>


<Route
path="/detail/:id"
element={
<ProtectedRoute>
<DetailPage />
</ProtectedRoute>
}
/>


<Route path="*" element={<Navigate to="/" />} />
</Routes>
);


export default App;