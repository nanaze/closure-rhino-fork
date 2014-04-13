goog.provide('goog.labs.rhino');

goog.require('goog.functions');

/**
 * @return {boolean} Whether this is Rhino.
 */ 
goog.labs.rhino.isRhino = goog.functions.cacheReturnValue(function() {
    return ("" + java) == "[JavaPackage java]";
});