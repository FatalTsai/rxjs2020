const Rx = require('rxjs/Rx')

function map(callback) {
    return Rx.Observable.create((observer) => {
        //console.log(typeof(observer))
        return this.subscribe(
            (value) => { 
                try{
                    observer.next(callback(value));
                } catch(e) {
                    observer.error(e);
                }
            },
            (err) => { observer.error(err); },
            () => { observer.complete() }
        )
    })
}
Rx.Observable.prototype.map = map;
var people = Rx.Observable.of('Jerry', 'Anna');
var helloPeople = people.map((item) => item + ' Hello~');

helloPeople.subscribe(console.log);
// Jerry Hello~
// Anna Hello~