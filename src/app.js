import './design.css'
import Greetings from './greetings.js'
import { useState } from 'react';
import Movie from './movie.js'; //To show the useState example 



function App(){
    const [student,changeStudent] = useState("Mattia"); 
    let a = 10; 
    function value(){
        alert("The value of a: "+a);
    }
    return (
        <>
            <h1>Hello React</h1>
            <h2>Student name is: {student}</h2>
            <p>The value of a is {a}</p>
            <Greetings name="Matt" city="Peoria" zipcode="12341"/>
            <Greetings name="Jacobs" city="Chicago" zipcode="87904"/>
            <p><button onClick={()=>value()}>a=?</button></p>
            <p><button onClick={()=>changeStudent("Chase Cose")}>Change Student name</button></p>
            <Movie/>
        </>
    );
}

export default App;