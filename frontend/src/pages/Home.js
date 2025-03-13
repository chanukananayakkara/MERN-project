import { useEffect, useState } from "react"

const Home = () =>{

    useEffect(()=>{
        //used to fetch data through the API when the UI appears/component renders. It fired the function mentioned inside when the component renders
    }, []) //[] is the dependency array and we keep it empty to call the function only the component is rendered.
    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home