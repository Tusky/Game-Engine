var ge = ge || {};

/**
 * Creates a tile with the given parameters.
 * @param {string} name Name of the tile.
 * @param {boolean} [passable=true] Whether a character can pass through.
 * @param {string[]} [special_event=[]] List of events to be called.
 */
ge.tile = function (name, passable, special_event) {
    this.name = name;
    this.passable = passable || true;
    this.special_event = special_event || [];
};

/**
 * Runs all special events added to a tile.
 */
ge.tile.prototype.run_special_event = function () {
    for(var i=0;i < this.special_event.length;i++) {
        window[this.special_event[i]]();
    }
};