// console.log("hello world")

// non blocking 時間がかかる処理はコールバック関数
setTimeout(function() {
  console.log("world");
}, 1000);


// blocking
//console.log("hello")
//
//var start = new Date().getTime()
//while(new Date().getTime() < start + 1000)
//console.log("world")
