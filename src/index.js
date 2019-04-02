import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Header from "./Header";
import Footer from "./Footer";
import ItemGrid from "./ItemGrid";
import ItemModal from "./ItemModal";

import "./styles.css";

class App extends React.Component {
  state = {
    modalBerry: "",
    poffinBerry: "",
    footerExpanded: false
  };

  showModal = berry => {
    this.setState({ modalBerry: { berry } });
  };

  hideModal = () => {
    this.setState({ modalBerry: "" });
  };

  selectBerry = berry => {
    this.hideModal();
    this.setState({ poffinBerry: { berry }, footerExpanded: true });
  };

  render() {
    const { modalBerry, poffinBerry, footerExpanded } = this.state;
    let footerProps = { expanded: footerExpanded };
    if (footerExpanded) {
      footerProps["berry"] = poffinBerry;
    }

    return (
      <div>
        <CssBaseline />
        <div className="main">
          <Header />
          <div className="container">
            {modalBerry ? (
              <ItemModal
                item={modalBerry}
                onClose={this.hideModal}
                onBerrySelect={this.selectBerry}
              />
            ) : null}
            <ItemGrid handleClick={this.showModal} />
          </div>
          <Footer {...footerProps} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App className="App" />, rootElement);
