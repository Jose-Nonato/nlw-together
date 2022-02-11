import { BrowserRouter as Router, Route} from "react-router-dom";

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {
  return (
    <Router>
        <Route path="/">{Home}</Route>
        <Route path="/rooms/create">{NewRoom}</Route>
    </Router>
  );
}

export default App;
