var ge = ge || {};

/**
 * Initialies the game map.
 * @param width The width of the map, 8 by default.
 * @param height The height of the map, 8 by default.
 * @suppress this.map
 *
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