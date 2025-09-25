import { memo } from "react";

import { Route, Switch } from "wouter"

import Header from "../components/header/header";
import Home from "../page/home/Home";

function Main() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={Home} />
                {/* <Route path="/recepts" children="Hello" /> */}
            </Switch>
        </>
    )
}

export default memo(Main);