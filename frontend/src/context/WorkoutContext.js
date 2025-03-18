import { createContext, useReducer} from 'react' //This function gives a new context for the components in the application
/*Then we have to create a new context from that function by calling that function, store it in a constant and
export it for use in different components */

export const WorkoutsContext = createContext()

export const workoutReducer = (state, action) => {
    /*workoutReducer function accept two arguments, 1st one is the previous state value which is "workouts" in useReducer function
      and 2nd one is the action(object that passed inside the dispatch function. That object has the type property and the payload). 
      Then we take the action type to a switch statement and according to different action types return different values 
      which the state going to be according to the action type */

    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload //because in the payload property consists the array of the excisting workouts
            }

        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts] /*in here we add new workout(action.payload) to the existing workouts
                by using the spread operator(...). And "state.workouts" represents the existing workouts*/
            }
            
        default:
            return state    
    }

    /*in here we deals with the local state. Not interacting with the database. Only used for the local state to in-sync with the database.

    for an example when we add a new workout to the database, at that point  the local state to in-sync with the database we dispatched 
    CREATE_WORKOUT action. So locally in our applcation, we have that new workout as well */
}

/*Then we have to provide that context for our entire component tree by using a content provider. For that we
use a function that returns the component of context provider of the above created workoutContext*/

const WorkoutsContextProvider = ({ childeren }) => { /*in here, we destructure the children property from props.
    The children property is whatever the components or template that accept the props that wraps by the contextProvider.
    For our case it's App.js file /root component */

    const [state, dispatch] = useReducer(workoutReducer, {
        workouts:null

        /* for this function we pass two arguments 1st as the reducer function name and 2nd as the initial value for state
        the dispatch function updates the value of the state variable
        
        for the dispatch function we pass an object as an argument. That object have a type property which describe the
        change we made to the state
        
        The second property of that object is called payload property which represents any data we need to make this change.
        In our case it's an array of workout objects
        
        Then we have tot create the workoutReducer function*/

       
    })


    return (
        <WorkoutsContext.Provider value = {{state, dispatch}}>
        {/* This is the component that wraps whatever the parts that access the context. In our case, it
        wraps the whole component tree. Therefore we have to wrap the root component. To do that we have to 
        move to the index.js file where the root component in our application is rendered and wraps the root
        component using this component*/}

        {childeren} {/*This means similar to we wraps the root app component. Which means all the other components
        in our application has the access to the WorkoutContext */}

        {/*At the moment the context provider not provide any value, we can provide a value using value property of
        context provider. If we provide a value from the context provider, that value can access from anywhere in the
        application.
        
        For an example we can provide a value like array of workouts. But it will be updating according to create and
        delete operations. Therefore it should be a dynamic value. We can provide that kind of value using state 
        variable. But react provides a better way than that called 'useReducer hook'
        
        When we call the dispatch function, it's invoke the reducer function, which is workoutReducer function, then it's 
        passes the action to the reducer function and updates the state using the information and the data that passes
        through the dispatch function
        
        Now we pass two properties called state and dispatch. Then any component in the application can access those
        properties and use the state and use dispatch function to update the state
        
        we can use the useContext hook to seem with this context and use the properties of the context (state and dispatch)
        or we can create our own custom hook */}



        </WorkoutsContext.Provider>
    )
}
