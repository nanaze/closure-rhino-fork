goog.provide('goog.labs.rhino.stdErr');
goog.provide('goog.labs.rhino.stdOut');

goog.labs.rhino.stdErr.println = function(msg) {
    java.lang.System.err.println(msg);
};

goog.labs.rhino.stdOut.println = function(msg) {
    java.lang.System.out.println(msg);
};