import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'Raj', 'Jasim', 'Rubel', 'Salman Shah'];

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 58},
    {id: 4, name: 'Pritom', age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="50000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade="8" score="98"></Student>
      <Student grade="9" score="97"></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return <h2>This Device: {props.name} and Price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 20}
  return <h3>I am {person.name} with age: {age + money}</h3>
}


// const {grade, score} = {grade: '8', score: '98'};

function Student({grade=1, score=0}) {
  console.log(grade, score)
  return ( 
  <div className='student'>
    <h3>This is a student</h3>
    <p>name: halim</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h3>Devo Devo</h3>
      <p>coding:</p>
    </div>
  )
}


export default App
