// Type definitions for RPG Maker MV JS Library v1.1.0
// Project: http://
// Definitions by: aaa<https://>, bbb<https://>
// Definitions: https://


interface GraphicsStatic {
    render(stage: Stage);
}
declare var Graphics: GraphicsStatic;

declare class Bitmap {
    constructor(width?: number, height?: number);
    addLoadListener(listner: () => any): void;
    adjustTone(r: number, g: number, b: number): void;
    blt(source: Bitmap, sx: number, sy: number, sw: number , sh: number,
        dx: number, dy: number, dw?: number, dh?: number): void;
    fillAll(color: string);
}

declare class Sprite {
    constructor(bitmap?: Bitmap);
    bitmap: Bitmap;
    x: number;
    y: number;
    update();
}

declare class Stage {
    constructor();
    addChild(childe: any);
}


/**
 * This is not a class, but contains some methods that will be added to the
 * standard Javascript objects.
 *
 * @class JsExtensions
 */
declare class JsExtensions {}

interface Array<T> {
    /**
     * Makes a shallow copy of the array.
     *
     * @method Array.prototype.clone
     * @return {Array} A shallow copy of the array
     */
    clone(): Array<T>;

    /**
     * Checks whether the array contains a given element.
     *
     * @method Array.prototype.contains
     * @param {Any} element The element to search for
     * @return {Boolean} True if the array contains a given element
     */
    contains(element: T): boolean;

    /**
     * Checks whether the two arrays are same.
     *
     * @method Array.prototype.equals
     * @param {Array} array The array to compare to
     * @return {Boolean} True if the two arrays are same
     */
    equals(array: any[]): boolean;
}

interface Math {
    /**
     * Generates a random integer in the range (0, max-1).
     *
     * @static
     * @method Math.randomInt
     * @param {Number} max The upper boundary (excluded)
     * @return {Number} A random integer
     */
    randomInt(max: number): number;
}

interface Number {
    /**
     * Returns a number whose value is limited to the given range.
     *
     * @method Number.prototype.clamp
     * @param {Number} min The lower boundary
     * @param {Number} max The upper boundary
     * @return {Number} A number in the range (min, max)
     */
    clamp(min: number, max: number): number;

    /**
     * Returns a modulo value which is always positive.
     *
     * @method Number.prototype.mod
     * @param {Number} n The divisor
     * @return {Number} A modulo value
     */
    mod(n: number): number;

    /**
     * Makes a number string with leading zeros.
     *
     * @method Number.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

interface String {
    /**
     * Checks whether the string contains a given string.
     *
     * @method String.prototype.contains
     * @param {String} string The string to search for
     * @return {Boolean} True if the string contains a given string
     */
    contains(string): boolean;

    /**
     * Replaces %1, %2 and so on in the string to the arguments.
     *
     * @method String.prototype.format
     * @param {Any} ...args The objects to format
     * @return {String} A formatted string
     */
    format(...args: any[]): string;

    /**
     * Makes a number string with leading zeros.
     *
     * @method String.prototype.padZero
     * @param {Number} length The length of the output string
     * @return {String} A string with leading zeros
     */
    padZero(length: number): string;
}

declare class Point {
    /**
     * The point class.
     *
     * @class Point
     * @constructor
     * @param {Number} x The x coordinate
     * @param {Number} y The y coordinate
     */
    constructor(x?: number, y?: number);

    /**
     * The x coordinate.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate.
     *
     * @property y
     * @type Number
     */
    y: number;
}

declare class Rectangle {
    /**
     * The rectangle class.
     *
     * @class Rectangle
     * @constructor
     * @param {Number} x The x coordinate for the upper-left corner
     * @param {Number} y The y coordinate for the upper-left corner
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);

    /**
     * The x coordinate for the upper-left corner.
     *
     * @property x
     * @type Number
     */
    x: number;

    /**
     * The y coordinate for the upper-left corner.
     *
     * @property y
     * @type Number
     */
    y: number;

    /**
     * The width of the rectangle.
     *
     * @property width
     * @type Number
     */
    width: number;

    /**
     * The height of the rectangle.
     *
     * @property height
     * @type Number
     */
    height: number;

    /**
     * @static
     * @property emptyRectangle
     * @type Rectangle
     * @private
     */
    static emptyRectangle: Rectangle;
}

declare class ScreenSprite {
    /**
     * The sprite which covers the entire game screen.
     *
     * @class ScreenSprite
     * @constructor
     */
    constructor();

    /**
     * The opacity of the sprite (0 to 255).
     *
     * @property opacity
     * @type Number
     */
    opacity: number;

    /**
     * Sets black to the color of the screen sprite.
     *
     * @method setBlack
     */
    setBlack();

    /**
     * Sets white to the color of the screen sprite.
     *
     * @method setWhite
     */
    setWhite();

    /**
     * Sets the color of the screen sprite by values.
     *
     * @method setColor
     * @param {Number} r The red value in the range (0, 255)
     * @param {Number} g The green value in the range (0, 255)
     * @param {Number} b The blue value in the range (0, 255)
     */
    setColor(r?: number, g?: number, b?: number);

    /**
     * @method _renderCanvas
     * @param {Object} renderSession
     * @private
     */
    _renderCanvas(renderSession: any);
}

interface JsonExStatic {
    /**
     * The maximum depth of objects.
     *
     * @static
     * @property maxDepth
     * @type Number
     * @default 100
     */
    maxDepth: number;

    /**
     * Makes a deep copy of the specified object.
     *
     * @static
     * @method makeDeepCopy
     * @param {Object} object The object to be copied
     * @return {Object} The copied object
     */
    makeDeepCopy(object: any): any;

    /**
     * Converts an object to a JSON string with object information.
     *
     * @static
     * @method stringify
     * @param {Object} object The object to be converted
     * @return {String} The JSON string
     */
    stringify(object: any): string;

    /**
     * Parses a JSON string and reconstructs the corresponding object.
     *
     * @static
     * @method parse
     * @param {String} json The JSON string
     * @return {Object} The reconstructed object
     */
    parse(json: string): any;
}

/**
 * The static class that handles JSON with object information.
 *
 * @class JsonEx
 */
declare var JsonEx: JsonExStatic;
