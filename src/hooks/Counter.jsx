import { useState, useEffect } from "react";

function Counter({ end, duration = 2000, startAnimation }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let start = 0;
        const incrementa = end / (duration / 16);

        const timer = setInterval(() => {
            start += incrementa;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, startAnimation]);

    return <>{count}</>;
}

export default Counter;