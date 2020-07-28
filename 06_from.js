const Rx = require('rxjs/Rx')

var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
var source = Rx.Observable.from(arr);

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

