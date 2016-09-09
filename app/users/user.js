System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address, User;
    return {
        setters:[],
        execute: function() {
            Address = (function () {
                function Address() {
                }
                return Address;
            }());
            exports_1("Address", Address);
            User = (function () {
                function User(id, username, email, phone, street, suite, city, zipcode) {
                    this.address = new Address();
                    this.id = id;
                    this.username = username;
                    this.email = email;
                    this.phone = phone;
                    this.address.street = street;
                    this.address.suite = suite;
                    this.address.city = city;
                    this.address.zipcode = zipcode;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map