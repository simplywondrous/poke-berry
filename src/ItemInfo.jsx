import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FlavorGraph from "./FlavorGraph";
import TestChart from "./TestChart";

/** All info of item */
// TODO - getting pretty confused how to make generic modal and info classes, and how data should be passed in between and who should render what for a modal
// Just gonna do specific stuff for now
class ItemInfo extends React.Component {
  state = {
    berry: this.props.item
  };

  render() {
    const { berry } = this.state.berry;
    // TODO why is it berry.berry :(
    console.log(berry.flavors);
    return (
      <div>
        <DialogTitle>{berry.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>This is {berry.name} text.</DialogContentText>
          <FlavorGraph data={berry.flavors} />
          {/* <TestChart /> */}
        </DialogContent>
      </div>
    );
  }
}

export default ItemInfo;
