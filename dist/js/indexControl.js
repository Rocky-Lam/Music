(function (root) {
    function Index(len) {
        this.index = 0;
        this.len = len
    }
    Index.prototype = {
        next() {
            return this.get(-1)
        },
        prev() {
            return this.get(+1)
        },
        get(val) {
            this.index = (this.index + val + this.len) % this.len;
            return this.index;
        }
    }
    root.controlIndex = Index;
})(window.player || (window.player = {}))