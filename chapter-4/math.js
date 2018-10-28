function randomPointOnCircle(radius) {
  const angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
