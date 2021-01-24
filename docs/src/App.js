import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container mx-auto">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route component={About} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
