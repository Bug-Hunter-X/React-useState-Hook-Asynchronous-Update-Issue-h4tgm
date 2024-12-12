```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count based on previous state
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); //This will only add 1, not 2
  }, []);

  return <div>Count: {count}</div>;
}
```