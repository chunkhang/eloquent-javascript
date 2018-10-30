const util = require('./util.js');
const roads = require('./roads.js');

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roads.roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      const parcels = this.parcels.map(p => {
        if (p.place !== this.place) return p;
        return {
          place: destination,
          address: p.address
        };
      }).filter(p => p.place !== p.address);
      return new VillageState(destination, parcels);
    }
  }

  static random(parcelCount = 5) {
    const parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      const address = util.randomPick(Object.keys(roads.roadGraph));
      let place;
      do {
        place = util.randomPick(Object.keys(roads.roadGraph));
      } while (place === address);
      parcels.push({place, address});
    }
    return new VillageState('Post Office', parcels);
  }
}

module.exports = {
  VillageState
};
