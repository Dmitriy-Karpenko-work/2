import { useEffect, useState } from "react";

function Timer() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>время {time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Timer;
