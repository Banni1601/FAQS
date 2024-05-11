import "./faqs.css";
import { Component } from "react";
import FaqsList from "/src/components/Data/faqsdata.js";
import FaqsItems from "/src/components/FAQSITEMS/faqItem.js";

class Faqs extends Component {
  constructor(props) {
    super(props);
  }
  actionQuestion = () => {};
  render() {
    return (
      <div className="App">
        <h1>FAQS</h1>
        {FaqsList.map((i) => (
          <FaqsItems data={i} key={i.id} actionQuestion={this.actionQuestion} />
        ))}
      </div>
    );
  }
}
export default Faqs;
