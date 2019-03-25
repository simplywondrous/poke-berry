import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

/** Name and Pic, clicking leads to open ItemModal */
class ItemCard extends React.Component {
  handleClick = event => {
    this.props.handleClick(this.props.berry);
  };

  render() {
    //console.log(this.props.berry.image_src);
    return (
      <Card className="card" onClick={this.handleClick}>
        <CardMedia
          className="card-image"
          image={this.props.berry.image_src}
          title={this.props.berry.name}
        />
        <CardContent>
          <Typography component="h2">{this.props.berry.name}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ItemCard;
