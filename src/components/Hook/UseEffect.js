import React, { useEffect, useState } from 'react';

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <div>-----------</div>
            <p>USE EFFECT HOOK</p>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Count Up to the Moon
            </button>
        </div>
    )
}
