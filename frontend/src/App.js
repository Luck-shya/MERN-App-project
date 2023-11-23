import "./App.css";
import { Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import HealthIssues from "./components/HealthIssues";

function App() {
  return (
    <div className="App">
      <Route path="/home" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      <Route path="/" component={HealthIssues} exact />
    </div>
  );
}

export default App;
