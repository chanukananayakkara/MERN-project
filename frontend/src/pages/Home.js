import { useEffect, useState } from "react"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'


const Home = () =>{
    const [workouts, setWorkouts] = useState(null)


    //used to fetch data through the API when the UI appears/component renders. It fired the function mentioned inside when the component renders
    useEffect(()=>{

        /*In here we can't add async in useEffect function. Because it's generates an error. 
        That's why we create another method inside useEffect, make it async and take the results using that function like below */

        const fetchedWorkouts = async () => {
            
            /*in here we use fetch api to fetch the data from the database. we have to pass the URI with 
             localhost part as well to call the relavant API and take the data to the response object like below */


             const response = await fetch('/api/workouts')  /*in here http://localhost:3000 part is backend server 
                                                                                and api/workouts part is the URI*/
             const json = await response.json()   //This method used to convert the data in the response object to a json string (array of objects/array of workouts)


            //In here we check the response and if it is okay, then update some local state
             if(response.ok) {
                setWorkouts(json)

             }

        }

        fetchedWorkouts() //Then we can call that function like this to perform the task that we wanted

    }, []) //[] is the dependency array and we keep it empty to call the function only the component is rendered.


    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails key ={workout._id} workout ={workout}/>/*in here, every object(workout) needs a unique key property, 
                    thats why we use id of the workout as the key to the workout. Then pass the whole workout object as a prop to the WorkoutDetails component.
                    Then we can access the workout object inside the WorkoutDetails component by destructuring the workout object */

                ))} {/*In here the meaning is if we have workouts, then only we fire a function to each individual workout and return some template*/}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home