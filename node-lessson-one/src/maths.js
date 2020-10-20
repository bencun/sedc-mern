class Maths {
    power(x, p) {
        return Math.pow(x, p);
    }
    
    add(x,y) {
        return x+y;
    }
}

module.exports = {
    Maths,
    instance: new Maths()
};