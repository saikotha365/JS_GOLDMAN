var counter = (function () {
    i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            i++;
        }
    }
})();
console.log(counter.get());
counter.set(7);
counter.increment();
console.log(counter.get());