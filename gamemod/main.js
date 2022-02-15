/* https://www.youtube.com/watch?v=SBfZAVzbhCg&t=281s
made from scratch 3d game world
make a game engine
*/

// GAME
console.log('hi');

const {
    Worker,
    isMainThread,
    setEnvironmentData,
    getEnvironmentData,
  } = require('worker_threads');
  
  if (isMainThread) {
    setEnvironmentData('Hello', 'World!');
    const worker = new Worker(__filename);
  } else {
    console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
  }

  var myWorker = new Worker(__filename);

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}
