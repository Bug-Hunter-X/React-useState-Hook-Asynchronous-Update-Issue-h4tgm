```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution using functional update
    setCount(prevCount => prevCount + 2);
  }, []);

  return <div>Count: {count}</div>;
}
export default MyComponent;
```