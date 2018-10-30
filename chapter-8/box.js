const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  }
};

function withBoxUnlocked(body) {
  const initiallyLocked = !box.locked;
  try {
    box.unlock();
    body();
  } finally {
    if (!initiallyLocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function() {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}
console.log(box.locked);

box.unlock();
withBoxUnlocked(function() {
  console.log('Peek at box');
});
console.log(box.locked);
