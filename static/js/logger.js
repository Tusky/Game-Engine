var ge = ge || {};

/**
 * Wrapper for logging.
 */
ge.logger = function () {};

/**
 * Output log into destination.
 * @param {string} text The text to be outputted by the logger.
 */
ge.logger.prototype.write = function (text) {
    console.log(text);
};