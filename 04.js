function Producer() {
	
	// 這個 if 只是避免使用者不小心把 Producer 當作函式來調用
	if(!(this instanceof Producer)) {
	  throw new Error('請用 new Producer()!');
	  // 仿 ES6 行為可用： throw new Error('Class constructor Producer cannot be invoked without 'new'')
	}
	
	this.listeners = [];
}

// 加入監聽的方法
Producer.prototype.addListener = function(listener) {
	if(typeof listener === 'function') {
		this.listeners.push(listener)
	} else {
		throw new Error('listener 必須是 function')
	}
}

// 移除監聽的方法
Producer.prototype.removeListener = function(listener) {
	this.listeners.splice(this.listeners.indexOf(listener), 1)
}

// 發送通知的方法
Producer.prototype.notify = function(message) {
	this.listeners.forEach(listener => {
		listener(message);
	})
}


var egghead = new Producer(); 
// new 出一個 Producer 實例叫 egghead

function listener1(message) {
	console.log(message + 'from listener1');
}

function listener2(message) {
	console.log(message + 'from listener2');
}

egghead.addListener(listener1); // 註冊監聽
egghead.addListener(listener2);

egghead.notify('A new course!!') // 當某件事情方法時，執行