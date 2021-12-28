const layersOrder = [
  { name: '00_bg', number: 2},
  { name: '01_bgdeco', number: 5},
  { name: '02_hair-back', number: 15},
  { name: '03_body', number: 2},
  { name: '04_face', number: 1},
  { name: '05_mouth', number: 12},
  { name: '06_eyes', number: 5},
  { name: '07_brow', number: 5},
  { name: '08_hair-front', number: 15},
  { name: '09_deco', number: 13},
  { name: '10_hands', number: 7},
];

const format = {
    width: 1200,
    height: 1200
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 1000;

module.exports = { layersOrder, format, rarity, defaultEdition };
