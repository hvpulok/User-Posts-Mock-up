System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InputValidators;
    return {
        setters:[],
        execute: function() {
            InputValidators = (function () {
                function InputValidators() {
                }
                InputValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                InputValidators.isEmail = function (control) {
                    if (!control.value.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
                        return { invalidEmail: true };
                    }
                    return null;
                };
                return InputValidators;
            }());
            exports_1("InputValidators", InputValidators);
        }
    }
});
//# sourceMappingURL=inputValidators.js.map