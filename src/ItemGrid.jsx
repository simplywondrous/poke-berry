import React from "react";
import axios from "axios";

import ItemCard from "./ItemCard";

/** A Grid of ItemCards -
 *  Queries for all berries - ignoring gen. for now
 *  Passes on object with name and url to ItemCard
 */

let instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/berry"
});

class ItemGrid extends React.Component {
  componentDidMount() {}

  render() {
    return <ItemCard />;
  }
}

export default ItemGrid;

/**Styling:
 *  Background - gray
 *  Wrap-around, columns, dynamic
 */
