import { useEffect, useState } from 'react';


function Timer ({ totalTime, onTimeComplete }) {
    const [remainingTime, setRemainingTime] = useState(totalTime);

    useEffect(() => {
        let timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    onTimeComplete();
                    return 0;
                }
            return prevTime -1
        });
        }, 1000);
        
        if (remainingTime === 0) {
            clearInterval(timer);
            onTimeComplete();
        }
        return () => clearInterval(timer);
    }, [onTimeComplete]);

    const formattTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    }
        
    return (
        <div className="timer">
            {formattTime(remainingTime)}
        </div>
    )
}

export default Timer;