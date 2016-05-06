System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, name, city, email) {
                    this.id = id;
                    this.name = name;
                    this.city = city;
                    this.email = email;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});

//# sourceMappingURL=user.js.map
