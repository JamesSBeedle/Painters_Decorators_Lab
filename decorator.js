const Room = require("./room")

const Decorator = function () {
    this.stock = []
}

Decorator.prototype.paintInStock = function () {
    return this.stock.length
}

Decorator.prototype.addPaintToStock = function (paint) {
    this.stock.push(paint);
    return this.paintInStock()
    
}

Decorator.prototype.totalLitresInStock = function () {
    let totalLitres = this.paintInStock() * 15
    return totalLitres
}

Decorator.prototype.enoughPaint = function (room) {
    if (this.totalLitresInStock() >= room.area) {
        return true, room.painted = true
    }
    else{
        return false
    }
}



module.exports = Decorator;