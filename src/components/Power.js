// import './Power.css';
// import { useState } from 'react';

// function Power()
// {
//     const [number, setNumber] = useState(2);
//     const [power, setPower] = useState(3);

//     return (
//         <power>
//             <h1>Возведение в степень</h1>

//             <span>Число </span>
//             <input
//                 type="number"
//                 value={number}
//                 onChange={(e) => setNumber(Number(e.target.value))}
//             />
//             <span> в степени </span>
//             <input
//                 type="number"
//                 value={power}
//                 onChange={(e) => setPower(Number(e.target.value))}
//                 />

//             <p>Результат: {number ** power}</p>
//         </power>
//     )
// }

// export default Power;

import './Power.css';

function Power({ number, power, onNumberChange, onPowerChange })
{
    return (
        <div>
            <h1>Возведение в степень</h1>
            <span>Число </span>
            <input
                type="number"
                value={number}
                onChange={(e) => onNumberChange(Number(e.target.value))}
            />
            <span> в степени </span>
            <input
                type="number"
                value={power}
                onChange={(e) => onPowerChange(Number(e.target.value))}
            />
            <p>Результат: {number ** power}</p>
        </div>
    );
}

export default Power;