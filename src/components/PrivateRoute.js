import {Redirect, Route} from "react-router-dom";

function PrivateRoute({children,boolean,...rest}){
    return(

        <Route {...rest}>
            { boolean === true ? children : <Redirect to="/login"/>}
        </Route>
    );
}
export default PrivateRoute