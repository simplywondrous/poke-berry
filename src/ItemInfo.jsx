import React from "react";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import FlavorGraph from "./FlavorGraph";

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
    return (
      <div>
        <DialogTitle>
          <img
            src={berry.image_src}
            alt="berry-img"
            style={{ position: "relative", top: "8px", paddingRight: "5px" }}
          />
          {berry.name} Berry
        </DialogTitle>
        <Button
          onClick={this.props.onClose}
          style={{ position: "absolute", top: 0, right: 0, margin: "15px" }}
        >
          X
        </Button>

        <DialogContent>
          <DialogContentText>{berry.flavor_texts[0].text}</DialogContentText>
          <br />
          <DialogContentText color="black">
            <table className="item-info-table">
              <tr>
                <th colspan="3">Effect</th>
              </tr>
              <tr>
                <td colspan="3">{berry.effect}</td>
              </tr>
              <br />
            </table>

            <table className="item-info-table" style={{ textAlign: "center" }}>
              <tr>
                <th>Growth Time</th>
                <th>Max Harvest</th>
                <th>Soil Dryness</th>
              </tr>
              <tr>
                <td>{berry.growth_time}</td>
                <td>{berry.max_harvest}</td>
                <td>{berry.soil_dryness}</td>
              </tr>
              <tr>
                <th>Size</th>
                <th>Smoothness</th>
                <th>Firmness</th>
              </tr>
              <tr>
                <td>{berry.size}</td>
                <td>{berry.smoothness}</td>
                <td>{berry.firmness}</td>
              </tr>
              <br />
            </table>
          </DialogContentText>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" onClick={this.handleSelect}>
              Let's Make Poffin!
            </Button>
          </div>
        </DialogContent>
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
