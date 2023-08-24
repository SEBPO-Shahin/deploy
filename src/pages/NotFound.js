import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="not-found">
            <h3>The page you are loking for is not found!</h3>
            <p><Link to="/">Home page</Link></p>
        </div>
    )
}