import React from 'react';


const SearchBar = ({ value, onChange }) => (
<input
type="text"
placeholder="Search..."
value={value}
onChange={(e) => onChange(e.target.value)}
style={{ padding: '8px', width: '100%', marginBottom: '12px' }}
/>
);


export default SearchBar;