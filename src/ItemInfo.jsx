import React from "react";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import FlavorGraph from "./FlavorGraph";
import TestChart from "./TestChart";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

/** All info of item */
// TODO - getting pretty confused how to make generic modal and info classes, and how data should be passed in between and who should render what for a modal
// Just gonna do specific stuff for now
class ItemInfo extends React.Component {
  state = {
    berry: this.props.item
  };

  handleSelect = event => {
    this.props.onBerrySelect(this.state.berry.berry);
  };

  render() {
    const { berry } = this.state.berry;
    // TODO why is it berry.berry :(
    // console.log(berry.flavor_texts);
    return (
      <div>
        <DialogActions>
          <Button position="absolute" onClick={this.props.onClose}>
            X
          </Button>
        </DialogActions>

        <DialogTitle>{berry.name} Berry</DialogTitle>
        <DialogContent>
          <DialogContentText>{berry.flavor_texts[0].text}</DialogContentText>
          <br />
          <Typography variant="body1">
            Size: {berry.size}
            Growth Time: {berry.growth_time}
            Max Harvest: {berry.max_harvest}
          </Typography>
          <FlavorGraph data={berry.flavors} />
          {/* <TestChart /> */}
        </DialogContent>

        <DialogActions>
          <Button variant="contained" onClick={this.handleSelect}>
            Let's Make Poffin!
          </Button>
        </DialogActions>
      </div>
    );
  }
}

export default ItemInfo;

/**
 * Description of berry (flavortext) under title
 *
 * Cost, effect
 *
 * Chart
 *
 * Table for:
 * Size, Growth Time, Max Harvest, Soil Drain Time, Firmness, Smoothness
 */
