var Rx = require('rx');
module.exports = GraphService;

/*
 * @ngInject
 */
function GraphService() {

    var self = this;

    // Publically exposed function
    self.exampleCall = function() {
        console.log('Example Service has been Called!');
    }

    self.Nodes$ = new Rx.ReplaySubject();

    self.RelationValue$ = new Rx.ReplaySubject();

    self.Nodes$.onNext([{
        renderData: {
            color: 'red',
            name: 'sensor a',
            description: 'Sensor A Description',
            id: 'a'
        },
    }, {
        renderData: {
            color: 'green',
            name: 'sensor b',
            description: 'Sensor B Description',
            id: 'b'
        },
    }, {
        renderData: {
            color: 'blue',
            name: 'sensor c',
            description: 'Sensor C Description',
            id: 'c'
        },
    }, {
        renderData: {
            color: 'purple',
            name: 'sensor d',
            description: 'Sensor D Description',
            id: 'd'
        },
    }]);

    self.RelationValue$.onNext([{
        ids: ['a', 'b'],
        value: 0.7
    }, {
        ids: ['a', 'c'],
        value: 0.1
    }, {
        ids: ['c', 'd'],
        value: 0.4
    }, ]);

}