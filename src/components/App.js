
import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Subject from "./Subject";
import Teacher from "./Teacher";

export default function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Header />
                        <Home />
                    </Route>
                    {/* <Route path="/send" exact>
                        <Header />
                        <Send />
                    </Route>
                    <Route path="/send/success" exact>
                        <Header />
                        <Success />
                    </Route> */}
                    <Route path="/subject" exact>
                        <Header />
                        <Subject />
                    </Route>
                    {/* <Route path="/subject/:id" exact>
                        <Header />
                        <ExamBySubject />
                    </Route> */}
                    <Route path="/teacher" exact>
                        <Header />
                        <Subject />
                    </Route>
                    {/* <Route path="/teacher/:id" exact>
                        <Header />
                        <ExamByTeacher />
                    </Route> */}
                </Switch>
            </BrowserRouter>
        </>
    );
}