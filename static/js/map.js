var ge = ge || {};

/**
 * Generate an empty map with the given size.
 * @param {number} width The width of the map.
 * @param {number} height The height of the map.
 */
generate_empty_map = function (width, height) {
    this.map = [];
    for(var i= 0; i < height; i++) {
        var row = [];
        for(var j= 0; j < width; j++) {
            row.push('E');
        }
        this.map.push(row);
    }
};

/**
 * Initialies the game map.
 * @param {number} [width=8] The width of the map.
 * @param {number} [height=8] The height of the map.
 */
ge.game_map = function (width, height) {
    console.log('initialize map');
    this.height = height || 8;
    this.width = width || 8;
    this.map = generate_empty_map(this.width, this.height);
};

/***
 * @todo load a json string as a map.
 */
ge.game_map.prototype.loadMap = function () {

};

/***
 * @todo save a json string as a map.
 */
ge.game_map.prototype.saveMap = function () {

};

/***
 * @todo generate a map with random tiles.
 */
ge.game_map.prototype.generateRandomMap = function () {

};