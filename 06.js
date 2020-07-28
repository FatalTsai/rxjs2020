const Rx = require('rxjs/Rx')
/*
var source = Rx.Observable
    .create(function(observer) {
        observer.next('Jerry');
        observer.next('Anna');
        observer.complete();
    });
*/
var source = Rx.Observable.of('Jerry', 'Anna');

source.subscribe({
    next: function(value) {
    	console.log(value)
    },
    complete: function() {
    	console.log('complete!');
    },
    error: function(error) {
    console.log(error)
    }
});