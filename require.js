(function (global) {                                                          // 2
    require = function (module) {
        return exports[module];
    }
    // Initialize an empty module object to be referenced                       // 3
    module = {};                                                                // 4
                                                                                // 5
    // Set getters and setters for `module.exports` and the `exports` alias     // 6
    var name = 'exports';                                                       // 7
    if (typeof Object.getOwnPropertyDescriptor(module, name) === 'undefined') { // 8
        // Extend the global namespace from the local object                      // 9
        Object.defineProperty(module, name, {                                     // 10
            // Set a setter to handle the object's properties                       // 11
            set: function (props) {                                                 // 12
                // Export each local variable to the `this` object.                   // 13
                for (var prop in props) {                                             // 14
                    // Make sure we aren't inheriting any prototype properties          // 15
                    if (props.hasOwnProperty(prop)) {                                   // 16
                        global[prop] = props[prop];                                       // 17
                    }                                                                   // 18
                }                                                                     // 19
            },                                                                      // 20
            get: function () {                                                      // 21
                return global;                                                        // 22
            }                                                                       // 23
        });                                                                       // 24
    }                                                                           // 25
    // Set `exports` to the original value of `module.exports`                  // 26
    exports = module.exports;                                                   // 27
}(this));
