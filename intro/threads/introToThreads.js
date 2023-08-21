const { isMainThread, workerData, Worker } = require('worker_threads');

if (isMainThread) {
    console.log(`This is the main thread. The process id is: ${process.pid}`);
    new Worker(__filename, {
        workerData: [5, 1, 4, 2]
    });
    new Worker(__filename, {
        workerData: [9, 5, 3, 1]
    });
} else {
    console.log(`This is a worker. The process id is: ${process.pid}`);
    console.log(`Original worker array: ${workerData}. 
        Sorted array: ${workerData.sort()}`)
}