import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import ItemGrid from "./ItemGrid";
import ItemModal from "./ItemModal";

import "./styles.css";

class App extends React.Component {
  state = {
    modalBerry: ""
  };

  showModal = berry => {
    this.setState({ modalBerry: { berry } });
  };

  hideModal = () => {
    this.setState({ modalBerry: "" });
  };

  // Show the modal here I think
  render() {
    const { modalBerry } = this.state;
    return (
      <div>
        <Header />
        {modalBerry ? (
          <ItemModal item={modalBerry} onClose={this.hideModal} />
        ) : null}
        <ItemGrid handleClick={this.showModal} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
