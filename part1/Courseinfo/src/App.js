import React from 'react'

/*ref*/

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
/*otsikko */
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
/*apu*/
const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

/*part ja ex*/
const Content = (props) => {

    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    )
}

/*summa*/
const Total = (props) => {
    const all = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

    return (
        <div>
            <p>Number of exercises {all}</p>
        </div>
    )
}
export default App


/*props*/
/* import React from 'react'
const App = () => {
const course = {
name: 'Half Stack application development',
parts: [
{
name: 'Fundamentals of React',
exercises: 10
},
{
name: 'Using props to pass data',
exercises: 7
},
{
name: 'State of a component',
exercises: 14
}
]
}

return (
<div>
<Header course={course.name} />
<Content parts={course.parts} />
<Total parts={course.parts} />
</div>
)
}


const Header = (props) =>{
console.log(props)
return <h1>{props.course}</h1>
}



const Content = (props) =>{
return(
<div>
<Part part = {props.parts[0].name} exercises={props.parts[0].exercises} />
<Part part = {props.parts[1].name} exercises={props.parts[1].exercises} />
<Part part = {props.parts[2].name} exercises={props.parts[2].exercises} />

</div>
)
}



const Total = (props)=>{
const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
return (
<div>
<p>Number of exercises {total}</p>
</div> 
)
}



const Part = (props) => {
return (
<div>
<p>
{props.part} {props.exercises}
</p>
</div>
)
}

export defualt App

*/