import {useLocation, useParams} from "react-router-dom";

export default function Products(){
    // let {categoryID} = useParams()
    const {state} = useLocation()
    return(
        <div>
            <h3>
                ID selected {state.categoryID}
            </h3>
        </div>
    )
}