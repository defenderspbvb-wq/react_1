import './Factorial.css';

function calculateFactorial(n)
{
    if (n < 0) return 'Не существует для отрицательных чисел';
    if (n === 0 || n === 1) return 1;
    if (n > 170) return 'Слишком большое число';

    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    
    return result;
}

function Factorial({ number, onNumberChange })
{
    return (
        <div>
            <h1>Факториал</h1>
            <span>Число </span>
            <input
                type="number"
                value={number}
                onChange={(e) => onNumberChange(Number(e.target.value))}
            />

            <p>Результат: {calculateFactorial(number)}</p>
        </div>
    );
}

export default Factorial;