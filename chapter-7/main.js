const village = require('./village.js');
const robots = require('./robots.js');

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

runRobot(village.VillageState.random(), robots.randomRobot);
runRobot(village.VillageState.random(), robots.routeRobot, robots.mailRoute);
runRobot(village.VillageState.random(), robots.goalOrientedRobot, []);
