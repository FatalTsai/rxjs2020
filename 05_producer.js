const Rx = require('rxjs/Rx');


var observable = Rx.Observable
	.create(function (observer) {
			observer.next('Jerry');
			observer.next('Anna');
	})
	
observable.subscribe({
	next: function(value) {
		console.log(value);
	},
	error: function(error) {
		console.log(error)
	},
	complete: function() {
		console.log('complete')
	}
})

function subscribe(observer) {
    observer.next('Jerry');
    observer.next('Anna');
}

subscribe({
next: function(value) {
    console.log(value);
},
error: function(error) {
    console.log(error)
},
complete: function() {
    console.log('complete')
}
});