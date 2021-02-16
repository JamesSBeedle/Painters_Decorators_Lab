const assert = require('assert')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

    let decorator;

    beforeEach(function () {
        decorator = new Decorator()
        paint1 = new Paint(15)
        room = new Room(10)
    })

    it('should start with no stock', function () {
        const actual = decorator.paintInStock();
        assert.deepStrictEqual(actual, 0)
    })

    it('should be able to add a can of paint to stock', function () {
        const actual = decorator.addPaintToStock(paint1)        
        assert.strictEqual(actual, 1)
    })

    it('should be able to calculate the total number of litres in stock', function () {
        decorator.addPaintToStock(paint1);
        const actual = decorator.totalLitresInStock();
        assert.strictEqual(actual, 15)
    })

    it('should have enough paint to paint room', function() {
        decorator.addPaintToStock(paint1)
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, true)
    })


    it('should be able to paint room', function () {
        decorator.addPaintToStock(paint1);
        decorator.enoughPaint(room);
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
   

   



})