var myWorker = new SharedWorker('/gamemod/main.js', 'main.js');

myWorker.port.start();

first.onchange = function() { 
    myWorker.port.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}

second.onchange = function() { 
    myWorker.port.postMessage([first.value,second.value]);
    console.log('Message posted to worker');
}

myWorker.port.onmessage = function(e) {
    result.textContent = e.data;
    console.log('Message received from worker');
}

