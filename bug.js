```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render, including the initial render
    console.log('Component rendered with count:', count);
  }, [count]); // Only re-run the effect if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // Problem here: count will be updated asynchronously
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```