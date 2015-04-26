var ge = ge || {};
var log = log || new ge.logger();

/**
 * Generate an empty map with the given size.
 * @param {number} width The width of the map.
 * @param {number} height The height of the map.
 * @return {string[]} The generated map.
 */
generate_empty_map = function (width, height) {
    var map = [];
    for(var i= 0; i < height; i++) {
        var row = [];
        for(var j= 0; j < width; j++) {
            row.push('E');
        }
        map.push(row);
    }
    return map
};

/**
 * Initializes the map system.
 * @param {number} [width=8] The width of the map.
 * @param {number} [height=8] The height of the map.
 */
ge.map_system = function (width, height) {
    log.write('Initializing map');
    this.height = height || 8;
    this.width = width || 8;
    this.map = generate_empty_map(this.width, this.height);
};

/**
 * @todo load a json string as a map.
 */
ge.map_system.prototype.loadMap = function () {

};

/**
 * @todo save a json string as a map.
 */
ge.map_system.prototype.saveMap = function () {

};

/**
 * @todo generate a map with random tiles.
 */
ge.map_system.prototype.generateRandomMap = function () {

};