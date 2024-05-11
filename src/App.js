import "./styles.css";
import { Component } from "react";
import Faqs from "./components/FAQS/faqs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Faqs />
      </div>
    );
  }
}

export default App;
