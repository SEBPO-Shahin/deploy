import { Outlet } from "react-router-dom";

export default function CareerLayout(){
    return(
        <div className="career-layout">
            <h3>Career Layouts</h3>

        <Outlet />
        
        </div>
    )
}