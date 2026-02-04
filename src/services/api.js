const BASE_URL = 'https://jsonplaceholder.typicode.com/users';


export const fetchUsers = async () => {
const res = await fetch(BASE_URL);
if (!res.ok) throw new Error('Error fetching users');
return res.json();
};


export const fetchUserById = async (id) => {
const res = await fetch(`${BASE_URL}/${id}`);
if (!res.ok) throw new Error('Error fetching user');
return res.json();
};