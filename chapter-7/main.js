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
  const turns1 = [], turns2 = [];
  for (let i = 0; i < 100; i++) {
    const state = village.VillageState.random();
    turns1.push(runRobot(state, robot1, memory1));
    turns2.push(runRobot(state, robot2, memory2));
  }
  const average1 = turns1.reduce((a, b) => a + b) / turns1.length;
  const average2 = turns2.reduce((a, b) => a + b) / turns2.length;
  console.log(`Robot 1 used an average of ${average1} steps`);
  console.log(`Robot 2 used an average of ${average2} steps`);
  if (average1 <= average2) {
    console.log('Robot 1 is faster');
  } else {
    console.log('Robot 2 is faster');
  }
}

compareRobots(
  robots.routeRobot, robots.mailRoute,
  robots.goalOrientedRobot, []
);
