import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    padding: "12px"
  },
  cardImage: {
    margin: "10px 0px",
    objectFit: "contain",
    height: "50px"
  },
  cardContent: {
    marginBottom: "10px",
    color: "black"
  }
};

/** Name and Pic, clicking leads to open ItemModal */
class ItemCard extends React.Component {
  handleClick = event => {
    this.props.handleClick(this.props.berry);
  };

  // TODO - override CardContent padding

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root} onClick={this.handleClick}>
        <CardMedia
          component="img"
          className={classes.cardImage}
          // image={this.props.berry.image_src}
          image={`images/Dream_${this.props.berry.name}_Berry_Sprite.png`}
          title={this.props.berry.name}
        />
        <Typography variant="subtitle1" className={classes.cardContent}>
          {this.props.berry.name}
        </Typography>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
