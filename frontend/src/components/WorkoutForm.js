import { useState } from "react"

const WorkoutForm = () => {
    //In here we return a template for a form

    //In here we tracking the what user typing into the form and we store all those information into the below states  

    //created a state for each of the properties in the form
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        //created a function to fire when the user submitted the form
        e.preventDefault() //used to stop the page reloading and continue the work with the API to add new workout

        const workout = {title, load, reps} //created a dummy object to use as the body of the POST request with passing values

        const response = await fetch('/api/workouts',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }

            /*In here we created a fetch request to pass the data to the database. First we give where the data is going and as
            the second argument we pass an object with some defined attributes. Using the body attribute of those attributes, we
            pass the data that we passing to the database. Before passing that data we have to convert those data to json format
            using json.stringify method */

        })
        const json = await response.json /*because as the response there is a json object returns. To catch that json object we
        declare a ojbect like this. */ 

        if(!response.ok) //in here we check the response and if it was not okay, we set the error to state using setError method.
        {
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setTitle('') /*In here we have to reset the form to add another workout again. To do that, we have to reset all these
            properties to empty strings. Therefore we don't want to delete what's already in there*/ 
            setLoad('')
            setReps('')
            console.log('new workout added',json)

        }

    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            {/*This is the title of the form */}
            <h3>Add a New Workout</h3>

            {/*label for the title of the workout */}
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)} /*onchange method takes the user inputs ot the form. When a user entered something,
                that input captured by the e(event) object. Then, takes the entered value using e.target.value and set it to the title porperty
                by calling the setTitle method */
                value={title}  /*used to accomplished two way data binding. If the title of the workout changes outside of the form. It will
                appear here */

            />

            <label>Load (in kg):</label>
            <input
            type="number"
            onChange={(e) => setLoad(e.target.value)} /*onChange method calls a function when an input occures. That input is captured by the 
            e (event) object */
            value={load}
            
            /> 

            <label>Reps:</label>
            <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps} 
            /> 

            <button>Add Workout</button>

        </form>
    )
}