ES5Harness.registerTest({id:"15.2.3.6-4-550",path:"TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-550.js",description:"ES5 Attributes - property ([[Get]] is a Function, [[Set]] is a Function, [[Enumerable]] is false, [[Configurable]] is true) is unenumerable",test:function(){var a={};Object.defineProperty(a,"prop",{get:function(){return 1001},set:function(e){},enumerable:!1,configurable:!0});var c=a.hasOwnProperty("prop"),d=Object.getOwnPropertyDescriptor(a,"prop"),b;for(b in a)if("prop"===b)return!1;
return c&&!1===d.enumerable},precondition:function(){return fnExists(Object.defineProperty)&&fnExists(Object.getOwnPropertyDescriptor)}});
