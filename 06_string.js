const Rx = require('rxjs/Rx')

var source = Rx.Observable.from('鐵人賽');

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