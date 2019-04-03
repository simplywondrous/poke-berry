import React from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import FlavorGraph from "./FlavorGraph";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  icon: {
    top: "15px",
    right: "initial",
    transform: "translateY(-50%) rotate(180deg)"
  },
  expandedSummary: {
    transform: "translateY(-50%) rotate(180deg)"
  }
});

// TODO - why is it also .berry.berry :( )
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.expanded
    };
  }

  handleClick = event => {
    this.setState(prevState => {
      if (prevState.expanded) {
        this.props.onClose();
      }
      return { expanded: !prevState.expanded };
    });
  };

  componentDidUpdate = prevProps => {
    if (prevProps.expanded !== this.props.expanded) {
      this.setState({ expanded: this.props.expanded });
    }
  };

  render() {
    const { classes, expanded, berry } = this.props;
    return (
      <div className="footer-container">
        <ExpansionPanel expanded={this.state.expanded || expanded}>
          <ExpansionPanelSummary
            classes={{
              expandIcon: classes.icon,
              expanded: classes.expandedSummary
            }}
            expandIcon={<ExpandMoreIcon />}
            onClick={this.handleClick}
          />
          <ExpansionPanelDetails>
            <div className="footer-expanded">
              {expanded ? (
                <FooterContent berry={berry.berry} />
              ) : (
                <Typography variant="subtitle1">
                  No berry selected, click on a berry to select!
                </Typography>
              )}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

// Re-rendered upon close! Need a way to save
const FooterContent = props => {
  const { berry } = props;
  return (
    <span>
      <ItemCard berry={berry} handleClick={() => null} />

      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "0",
          height: "50px"
        }}
      >
        {/*  */}
        <FlavorGraph data={berry.flavors} />
      </div>
    </span>
  );
};

export default withStyles(styles)(Footer);

/**
 * Idea:
 *
 * Card with berry info on one side, arrow, other side is poffin image (if there is one)
 *  Or just poffin showing the calculated poffin data
 *
 * Honestly probably make a class for what'll be inside the footer to separate it out
 */
