import React from 'react'



const Course = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Header course={course.name} />
            <content>content ={course.name}</content>
        </div>
    )
}

const Header = ({ name }) => {
    <h1>{name}</h1>
}

const Content = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />)
            }
        </div>
    )
}


const Part = ({ name, exercises }) => {
    return (
        <div>
            <p>
                {name} {exercises}
            </p>

        </div>
    )
}
export default Course