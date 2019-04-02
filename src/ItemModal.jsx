import React from "react";

import Dialog from "@material-ui/core/Dialog";
import ItemInfo from "./ItemInfo";

/** At some point, change to be generic modal */
// TODO - should the parent handle hide / show or the component itself?
// For now - this class handles opening / closing, all other display is in ItemInfo
/** Modal pop-up of Item */
// Where do I handle close

class ItemModal extends React.Component {
  state = {
    open: true
  };

  handleClose = () => {
    this.props.onClose();
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog open={this.state.open} onClose={this.handleClose}>
        <ItemInfo
          item={this.props.item}
          onClose={this.handleClose}
          onBerrySelect={this.props.onBerrySelect}
        />
      </Dialog>
    );
  }
}

export default ItemModal;
