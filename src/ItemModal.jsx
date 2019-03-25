import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import ItemInfo from "./ItemInfo";

/** At some point, change to be generic modal */
// TODO - should the parent handle hide / show or the component itself?
// For now - this class handles opening / closing, all other display is in ItemInfo
/** Modal pop-up of Item */
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
        <DialogActions>
          <Button onClick={this.handleClose}>X</Button>
        </DialogActions>
        <ItemInfo item={this.props.item} />
      </Dialog>
    );
  }
}

export default ItemModal;
