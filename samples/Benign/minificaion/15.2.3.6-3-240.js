ES5Harness.registerTest({id:"15.2.3.6-3-240",path:"TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-240.js",description:"Object.defineProperty - 'set' property in 'Attributes' is own data property that overrides an inherited accessor property (8.10.5 step 8.a)",test:function(){var b={},a={},d="data",e="data";Object.defineProperty(a,"set",{get:function(){return function(c){d=c}}});var f=function(){};f.prototype=a;a=new f;Object.defineProperty(a,"set",{value:function(c){e=c}});Object.defineProperty(b,
"property",a);b.property="overrideData";return b.hasOwnProperty("property")&&"data"===d&&"overrideData"===e},precondition:function(){return fnExists(Object.defineProperty)}});