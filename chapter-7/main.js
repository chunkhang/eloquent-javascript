const village = require('./village.js');
const robots = require('./robots.js');

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length === 0) {
      return turn;
    }
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0, total2 = 0;
  for (let i = 0; i < 100; i++) {
    const state = village.VillageState.random();
    total1 += runRobot(state, robot1, memory1);
    total2 += runRobot(state, robot2, memory2);
  }
  const average1 = total1 / 100;
  const average2 = total2 / 100;
  console.log(`Robot 1 used an average of ${average1} steps`);
  console.log(`Robot 2 used an average of ${average2} steps`);
  if (average1 <= average2) {
    console.log('Robot 1 is faster');
  } else {
    console.log('Robot 2 is faster');
  }
}

compareRobots(
  robots.goalOrientedRobot, [],
  robots.smartRobot, []
);
