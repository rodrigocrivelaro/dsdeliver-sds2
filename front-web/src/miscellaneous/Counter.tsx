import { useState } from "react";

function Counter() {
    const [val, setVal] = useState(0);

    const handleIncrease = () => {
        setVal(val + 1);
    }

    const handleDecrease = () => {
        setVal(val - 1);
    }   

    return (
        <div>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>

            <h1>Valor do contador: {val}</h1>
        </div>
    )
}

export default Counter;