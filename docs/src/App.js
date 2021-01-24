import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import NewDonationTrigger from './NewDonationTrigger';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container mx-auto">
                    <Switch>
                        <Route path="/home" exact component={Home} />
                        <Route path="/new-donation-event" exact component={NewDonationTrigger} />
                        <Route component={About} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
