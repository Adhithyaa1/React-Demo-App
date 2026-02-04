import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import SearchBar from '../components/SearchBar';


const MainPage = () => {
const [users, setUsers] = useState([]);
const [search, setSearch] = useState('');
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const navigate = useNavigate();


useEffect(() => {
fetchUsers()
.then(setUsers)
.catch(() => setError('Failed to load users'))
.finally(() => setLoading(false));
}, []);


const handleSignOut = () => {
localStorage.removeItem('isLoggedIn');
navigate('/login');
};


const filtered = users.filter((u) =>
u.name.toLowerCase().includes(search.toLowerCase())
);


if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;


return (
<div style={{ maxWidth: 600, margin: '40px auto' }}>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<h2>Users</h2>
<button onClick={handleSignOut}>Sign out</button>
</div>


<SearchBar value={search} onChange={setSearch} />
<ul>
{filtered.map((user) => (
<li
key={user.id}
style={{ cursor: 'pointer' }}
onClick={() => navigate(`/detail/${user.id}`)}
>
{user.name}
</li>
))}
</ul>
</div>
);
};


export default MainPage;