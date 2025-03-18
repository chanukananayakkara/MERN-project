import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext) /*this hook returns the value of the WorkoutContext
    which is the value we are passing to the WorkoutContextProvider which is state and dispatch function*/

    /*Now the object stores in the context constant, then we have to do is return the context object at the end
    of the useWorkoutContext function. And by calling this function, we can access the state and dispatch attributes
    anywhere in the application */

    /*And also we can check whether we are in the right context under the component tree that wraps by the contentProvider
    like this */

    if(!context) {
        throw Error('useWorkoutContext must be used inside an WorkoutContextProvider')
    } //In here we pass an error if we not in the right context under the component tree that wraps by the contentProvider

    return context
}