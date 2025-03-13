import { Link } from "react-router-dom"

const Navbar = () =>{
    //created the component as a function and return a template from that function

    return(
        <header>
            <div className="container">
                <Link to="/">
                {/*Link component already defined under the react-router-dom package, so we have to do is import it and just use it */}

                    <h1>Workout Buddy</h1> {/*This is a element that is in the inside of the Navbar container */}
                </Link>
            </div>
        </header>
    )
    
}

export default Navbar