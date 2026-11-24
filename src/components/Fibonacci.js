import './Fibonacci.css';

function calculateFibonacci(n)
{
    if (n < 0 || !Number.isInteger(n)) return 'Введите целое неотрицательное число';
    if (n > 1476) return 'Слишком большое число';
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++)
    {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

function Fibonacci({ number, onNumberChange })
{
    return (
        <div>
            <h1>Числа Фибоначчи</h1>
            <span>Порядковый номер: </span>
            <input
                type="number"
                value={number}
                onChange={(e) => onNumberChange(Number(e.target.value))}
            />

            <p>Результат: {calculateFibonacci(number)}</p>
        </div>
    );
}

export default Fibonacci;