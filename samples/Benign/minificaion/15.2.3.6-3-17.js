ES5Harness.registerTest({id:"15.2.3.6-3-17",path:"TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-17.js",description:"Object.defineProperty - 'Attributes' is a boolean primitive (8.10.5 step 1)",test:function(){try{return Object.defineProperty({},"property",!0),!1}catch(a){return a instanceof TypeError}},precondition:function(){return fnExists(Object.defineProperty)}});
