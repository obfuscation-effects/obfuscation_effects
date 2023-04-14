function testcase(){var a=new Date,b=!1;Object.defineProperty(a,"prop",{get:function(){b=this instanceof Date;return{}},enumerable:!0});Object.defineProperties({},a);return b}runTestCase(testcase);
