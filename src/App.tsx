// App.tsx (main component)

import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <h1>Hello, Vite + React + TypeScript!</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
