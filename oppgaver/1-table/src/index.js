const data = [
  { name: "diamond", hardness: 10, color: "white" },
  { name: "ruby", hardness: 9, color: "red" },
  { name: "sapphire", hardness: 9, color: "blue" },
  { name: "topaz", hardness: 8, color: "yellow" },
  { name: "emerald", hardness: 7.5, color: "green" },
  { name: "amethyst", hardness: 7, color: "purple" },
  { name: "opal", hardness: 6, color: "black" }
];

// Entrypoint for d3
const tableTH = d3
  .select("#table")
  .append("thead")
  .append("tr");

tableTH
  .append("th")
  .text("Name");

tableTH
  .append("th")
  .text("Hardness");

tableTH
  .append("th")
  .text("Color");

const tableTB = d3
  .select("#table")
  .append("tbody")
  .selectAll("tr")
  .data(data);

const tableTR = tableTB
  .enter()
  .append("tr");

const numberFormat = d3.format(".1f");

tableTR
  .append("td")
  .text((d, i) => d.name);

tableTR
  .append("td")
  .text((d, i) => numberFormat(d.hardness));

tableTR
  .append("td")
  .text((d, i) => d.color)
  .attr("style", (d, i) => `color: ${d.color}`);
