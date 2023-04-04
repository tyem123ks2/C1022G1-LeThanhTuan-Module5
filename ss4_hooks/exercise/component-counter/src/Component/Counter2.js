import {useState} from "react";

function Counter2() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 2;
        setCount(newValue)
    }
    return (
        <div>
            Count {count}
            <div>
                <button onClick={handleClick}>Add 2</button>
            </div>
        </div>
    )
}

export default Counter2;