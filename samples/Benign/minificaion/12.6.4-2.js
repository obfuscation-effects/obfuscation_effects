function testcase(){var a={};Object.defineProperty(a,"prop",{value:"inheritedValue",enumerable:!1,configurable:!0,writable:!0});var b=function(){};b.prototype=a;a=new b;Object.defineProperty(a,"prop1",{value:"overridedValue1",enumerable:!1});Object.defineProperty(a,"prop2",{value:"overridedValue2",enumerable:!0});var d=b=!1,c;for(c in a)a.hasOwnProperty(c)&&("prop1"===c&&(b=!0),"prop2"===c&&(d=!0));return!b&&d&&"overridedValue1"===a.prop1&&"overridedValue2"===a.prop2}runTestCase(testcase);
