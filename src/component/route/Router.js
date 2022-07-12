
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";
import UserList from "../user/UserList";

function AppRouter() {
        return(
            <div>
                <BrowserRouter>
                    <div style={style}>
                        <Switch>
                            <Route exact path="/" component={UserList}></Route>
                            <Route path="/users" component={UserList}></Route>
                            <Route path="/add-user" component={AddUser}></Route>
                            <Route path="/edit-user" component={EditUser}></Route>
                        </Switch>
                    </div>                
                </BrowserRouter>
            </div>
        );
}

const style ={
    marginTop: '20px'
}

export default AppRouter;