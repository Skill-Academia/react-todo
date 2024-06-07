import { useEffect, useState } from 'react';

const Test = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`I rerendered ${count} times`)
    }, [count])

    const Increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <div>Count is {count}</div>
            <button onClick={Increment}>Increment</button>
        </>
    )
}

export default Test