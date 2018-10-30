const util = require('./util.js');
const roads = require('./roads.js');

const mailRoute = [
  'Alice\'s House', 'Cabin', 'Alice\'s House', 'Bob\'s House',
  'Town Hall', 'Daria\'s House', 'Ernie\'s House',
  'Grete\'s House', 'Shop', 'Grete\'s House', 'Farm',
  'Marketplace', 'Post Office'
];

function findRoute(graph, from, to) {
  const work = [
    {
      at: from,
      route: []
    }
  ];
  for (let i = 0; i < work.length; i++) {
    const {at, route} = work[i];
    for (const place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({
          at: place,
          route: route.concat(place)
        });
      }
    }
  }
}

function randomRobot(state) {
  return {
    direction: util.randomPick(roads.roadGraph[state.place])
  };
}

function routeRobot(state, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return {
    direction: memory[0],
    memory: memory.slice(1)
  };
}

function goalOrientedRobot({place, parcels}, route) {
  if (route.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roads.roadGraph, place, parcel.place);
    } else {
      route = findRoute(roads.roadGraph, place, parcel.address);
    }
  }
  return {
    direction: route[0],
    memory: route.slice(1)
  };
}

module.exports = {
  mailRoute,
  randomRobot,
  routeRobot,
  goalOrientedRobot
};
