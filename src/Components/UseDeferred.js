import React, { useState, useDeferredValue } from 'react';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Mango'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ textAlign: "center" }}>
    <h1 className="my-3">Use Deferred Hook</h1>
    <h4 className="my-3">React Js project</h4>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <ul key={index}>{item}</ul>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
