ES5Harness.registerTest({id:"15.2.3.7-6-a-175",path:"TestCases/chapter15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-175.js",description:"Object.defineProperties - 'O' is an Array, 'P' is the length property of 'O', the [[Value]] field of 'desc' is less than value of  the length property, test value of the length property is set to the last non-configurable index named property of 'O' plus 1 (15.4.5.1 step 3.l.iii.1)",test:function(){var a=[0,1,2,3];Object.defineProperty(a,"1",{configurable:!1});try{return Object.defineProperties(a,
{length:{value:1}}),!1}catch(b){return b instanceof TypeError&&2===a.length}},precondition:function(){return fnExists(Object.defineProperties)&&fnExists(Object.defineProperty)}});
