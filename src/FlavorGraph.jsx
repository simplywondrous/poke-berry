import React from "react";
import { RadarChart, XAxis, YAxis } from "react-vis";

// Takes in all the data necessary to make graph, displays that graph
// In this case, graph will only be used for flavors

// Graph is a little misleading where if flavor = "0" it's just not included
// Graphs only non-zero values to make shape, following Gen IV graph style

// TODO - Axes aren't showing for some reason, also text orientation
// Also general styling to be like : https://serebii.net/berrydex-dp/19.png

const BG_DISPLAY = [
  {
    name: "Spider5",
    spicy: 50,
    dry: 50,
    sweet: 50,
    bitter: 50,
    sour: 50,
    fill: "#eee",
    stroke: "#cccccc"
  },
  {
    name: "Spider4",
    spicy: 40,
    dry: 40,
    sweet: 40,
    bitter: 40,
    sour: 40,
    fill: "white",
    stroke: "white"
  },
  {
    name: "Spider3",
    spicy: 30,
    dry: 30,
    sweet: 30,
    bitter: 30,
    sour: 30,
    fill: "#eee",
    stroke: "#eee"
  },
  {
    name: "Spider2",
    spicy: 20,
    dry: 20,
    sweet: 20,
    bitter: 20,
    sour: 20,
    fill: "white",
    stroke: "white"
  },
  {
    name: "Spider1",
    spicy: 10,
    dry: 10,
    sweet: 10,
    bitter: 10,
    sour: 10,
    fill: "#eee",
    stroke: "#eee"
  },
  {
    name: "Spider0",
    spicy: 0.01,
    dry: 0.01,
    sweet: 0.01,
    bitter: 0.01,
    sour: 0.01,
    fill: "white",
    stroke: "white"
  }
];

const FlavorGraph = props => {
  let modData = {};
  for (let flavor in props.data) {
    if (props.data[flavor] === 0) {
      modData[flavor] = 3;
    } else {
      modData[flavor] = props.data[flavor];
    }
  }
  const RADAR_PROPS = {
    data: [...BG_DISPLAY, modData],
    domains: [
      { name: "Spicy", domain: [0, 50], getValue: d => d.spicy },
      { name: "Sour", domain: [0, 50], getValue: d => d.sour },
      { name: "Bitter", domain: [0, 50], getValue: d => d.bitter },
      { name: "Sweet", domain: [0, 50], getValue: d => d.sweet },
      { name: "Dry", domain: [0, 50], getValue: d => d.dry }
    ],
    height: 250,
    width: 250
  };
  return (
    <RadarChart
      data={RADAR_PROPS.data}
      domains={RADAR_PROPS.domains}
      width={RADAR_PROPS.width}
      height={RADAR_PROPS.height}
      tickFormat={t => {
        return "";
      }}
      startingAngle={Math.PI / 5}
      style={{
        polygons: {
          strokeWidth: 1,
          strokeOpacity: 0.8,
          fillOpacity: 0.8
        },
        labels: {
          textAnchor: "middle"
        },
        axes: {
          line: {
            fillOpacity: 0.8,
            strokeWidth: 5,
            strokeOpacity: 0.8
          },
          ticks: {
            fillOpacity: 0,
            strokeOpacity: 1
          },
          text: {}
        }
      }}
      // colorRange={['transparent']}
      hideInnerMostValues={false}
      renderAxesOverPolygons={true}
      margin={{
        left: 70,
        top: 70,
        bottom: 70,
        right: 70
      }}
    />
  );
};

export default FlavorGraph;
