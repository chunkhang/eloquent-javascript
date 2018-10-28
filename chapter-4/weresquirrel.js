const JOURNAL = require('./journal.js');

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function tableFor(event, journal) {
  const table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    const entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  const events = [];
  for (const entry of journal) {
    for (const event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

for (const event of journalEvents(JOURNAL)) {
  const correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ':', correlation);
  }
}

for (const entry of JOURNAL) {
  if (entry.events.includes('peanuts') &&
    !entry.events.includes('brushed teeth')) {
    entry.events.push('peanut teeth');
  }
}
console.log(phi(tableFor('peanut teeth', JOURNAL)));
