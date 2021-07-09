import './App.css';
import { useState, useEffect } from "react"



function App() {
  const [time, setTime] = useState(0)
  const [onTime, setOnTime] = useState(false)
  const [click, setClick] = useState(false)


  useEffect(() => {
    let interval = null

    if (onTime) {
      interval = setInterval(() => {
        setTime(x => x + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [onTime])




  const dubleClick = () => {

    let interval = setTimeout(() => {
      setClick(true)
    }, 300);

    if (click) {
      setOnTime(false)
      setClick(false)
      clearTimeout(interval);
    }

  }


  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div>

        {onTime === false ?
          <div>
            <button onClick={() => {
              setOnTime(true)
              setTime(0)
            }}>Start</button>

            {time !== 0 && <button onClick={() => {
              setOnTime(true)
              setTime(time)
            }}>Proceed</button>}

          </div>
          :
          <div>
            <button onClick={() => {
              setOnTime(false)
              setTime(0)
            }}>Stop</button>
            <button onClick={() => {
              dubleClick()
            }}>Wait</button>
            <button onClick={() => {
              setTime(0)
              setOnTime(true)
            }}>Reset</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
