import React from "react";
import axios from "axios";

import ItemCard from "./ItemCard";

/** A Grid of ItemCards -
 *  Queries for all berries - ignoring gen. for now
 *  Children need stuff, so make own object with correct props to pass down
 */

let instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});
const BERRY_QUERY = "berry";
const ITEM_QUERY = "item";
const GET_ALL = "?limit=100";

class ItemGrid extends React.Component {
  state = localStorage.getItem("cachedState")
    ? JSON.parse(localStorage.getItem("cachedState"))
    : {
        itemList: []
      };

  async componentDidMount() {
    // For every berry item
    // Get berry id response
    // Get item id response
    // Consolidate
    // Save in local storage
    const berry_response = await instance.get(BERRY_QUERY + GET_ALL);
    const berry_list = berry_response.data.results;

    const promises = berry_list.map(async berry_obj => {
      let berry = {};
      berry.name = berry_obj.name;

      const berry_id_response = await instance.get(berry_obj.url);
      const berry_id_obj = berry_id_response.data;
      const {
        id: berry_id,
        firmness,
        flavors,
        growth_time,
        max_harvest,
        size,
        smoothness,
        soil_dryness
      } = berry_id_obj;
      berry.berry_id = berry_id;
      berry.firmness = firmness.name;
      // This is assuming it follows the order spicy, dry, sweet, bitter, sour
      berry.flavors = flavors.map(flavor => {
        return flavor.potency;
      });
      berry.growth_time = growth_time;
      berry.max_harvest = max_harvest;
      berry.size = size;
      berry.smoothness = smoothness;
      berry.soil_dryness = soil_dryness;

      const berry_item_response = await instance.get(berry_id_obj.item.url);
      const berry_item_obj = berry_item_response.data;
      const {
        id: item_id,
        cost,
        effect_entries: effects,
        flavor_text_entries: flavor_text,
        sprites
      } = berry_item_obj;
      berry.item_id = item_id;
      berry.cost = cost;
      berry.effect = effects.short_effect;
      berry.flavor_texts = flavor_text.filter(item => {
        return item.language.name === "en";
      });
      berry.sprite = sprites.default;

      return berry;
    });
    const berry_dex = await Promise.all(promises);

    console.log(berry_dex);
    // this.setState({
    //   itemList: response.data.results
    // });
  }

  render() {
    const { itemList } = this.state;
    const itemCardList = itemList.map(item => {
      return <ItemCard key={item.name} name={item.name} url={item.url} />;
    });
    // return <div>{itemCardList}</div>;
    return null;
  }
}

export default ItemGrid;

/**Styling:
 *  Background - gray
 *  Wrap-around, columns, dynamic
 */
