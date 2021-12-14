export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  
export function stall(ms = random(500, 2500), throws) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (throws ? reject(new Error()) : resolve()), ms);
  });
}
    
export function getRandomColor() {
  const letters = 'BCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}