"use strict";
exports.__esModule = true;
var requirement_1 = require("./requirement");
var testinterface_1 = require("./testinterface");
var i = new requirement_1.Implementor();
i.display();
i.requirement1();
var i2 = new testinterface_1.MyInterfaceImpl();
i2.requirement1();
i2.requirement2();
i2.requirement3();
