function Counter(){
    const [count, setCount] = React.useState(0);

    function handleIncrement(){
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}