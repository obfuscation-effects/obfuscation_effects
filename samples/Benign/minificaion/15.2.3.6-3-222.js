ES5Harness.registerTest({id:"15.2.3.6-3-222",path:"TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-222.js",description:"Object.defineProperty - 'Attributes' is a Number object that uses Object's [[Get]] method to access the 'get' property (8.10.5 step 7.a)",test:function(){var a={},b=new Number(-2);b.get=function(){return"numberGetProperty"};Object.defineProperty(a,"property",b);return"numberGetProperty"===a.property},precondition:function(){return fnExists(Object.defineProperty)}});
