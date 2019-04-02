import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

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
        <CssBaseline />
        <div className="main">
          <Header />
          <div className="container">
            {modalBerry ? (
              <ItemModal item={modalBerry} onClose={this.hideModal} />
            ) : null}
            <ItemGrid handleClick={this.showModal} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App className="App" />, rootElement);
