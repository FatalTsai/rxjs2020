const Rx = require('rxjs/Rx');

var observable = Rx.Observable
.create(function(observer) {
    observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
    observer.next('Anna');
})

console.log('start');
observable.subscribe(function(value) {
console.log(value);
});
console.log('end');