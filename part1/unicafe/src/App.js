import { useState } from 'react'

const Header = ({ title }) =>
    <h1>{title}</h1>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>{text}
    </button>
)

const Statistics = ({ good, bad, neutral }) => {
    const all = good + neutral + bad
    const avrg = (good - bad) / all
    const pos = good / (good + neutral + bad) * 100

    if (all === 0) {
        return (
            <p>
                No feedback given
            </p>
        )
    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={avrg} />
                <StatisticLine text="positive" value={pos} />
            </tbody>
        </table>
    )
}
const StatisticLine = ({ text, value }) => {
    if (text === "positive") {
        return (
            <tr>
                <td>
                    {text}
                </td>
                <td>
                    {value}%
                </td>
            </tr>
        )
    }
    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value}
            </td>
        </tr>
    )
}



const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const clickGood = () => {
        setGood(good + 1)
    }
    const clickNeutral = () => {
        setNeutral(neutral + 1)
    }
    const clickBad = () => {
        setBad(bad - 1)

    }
    return (
        <div>

            <Header title="give feedback" />
            <Button handleClick={() => clickGood()} text={"Good"} />
            <Button handleClick={() => clickNeutral()} text={"Neutral"} />
            <Button handleClick={() => clickBad()} text={"Bad"} />
            <Header title="statistics" />
            <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

export default App
