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

ge.map_system.prototype.getMap = function () {
    return this.map;
}

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
 * Generates a random map.
 */
ge.map_system.prototype.generateRandomMap = function () {
    var that = this;
    $.getJSON('static/data/tileset.json', function(data) {
        var tile_set = data;
        var tile = tile_set[Math.floor((Math.random() * tile_set.length))];
        var map = [];
        for(var i= 0; i < that.map.length; i++) {
            var row = [];
            for(var j= 0; j < that.map[i].length; j++) {
                row.push(tile);
            }
            map.push(row);
        }
        that.setMapData(map);
    });
};

/**
 * Saves the randomly generated map to the model.
 * @param {object[]} map List of tiles.
 */
ge.map_system.prototype.setMapData = function(map) {
    this.map = map;
    //TODO: Create a custom event firing. So it can be waited out.
};