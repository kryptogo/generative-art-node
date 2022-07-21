const layersOrder = [
  { name: '09_item', number: 10},
  { name: '00_fur', number: 8},
  { name: '01_hand', number: 11},
  { name: '02_eyes', number: 8},
  { name: '03_ear', number: 12},
  { name: '04_mouth', number: 5},
  { name: '05_cloth', number: 10},
  { name: '06_head', number: 10},
  { name: '07_bg', number: 6},
  { name: '08_fg', number: 3},
  //  { name: '10_rare', number: 6},
];
const format = {
    width: 100,
    height: 100
};

const rarity = [
  // { key: "", val: "original" },
  //   { key: "_r", val: "rare" },
  //   { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };
