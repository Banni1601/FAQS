//import "./styles.css";
import { Component } from "react";
//import Faqs from "./components/FAQS/faqs";

class FaqsItems extends Component {
  constructor(props) {
    super(props);
    const { data, actionQuestion } = props;
    //console.log(data);
    this.state = { d: data, btnText: false };
  }

  actionOnQuestion = () => {
    const { d, btnText } = this.state;
    if (!btnText) {
      this.setState({ btnText: true });
    } else {
      this.setState({ btnText: false });
    }
  };

  render() {
    const { d, btnText } = this.state;
    return (
      <div className="App">
        <h1>{d.questionText}</h1>
        <button onClick={this.actionOnQuestion}>
          {btnText ? "Hide" : "Show"}
        </button>
        <h1>{btnText ? d.answerText : " "}</h1>
      </div>
    );
  }
}

export default FaqsItems;
