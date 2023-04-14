function testcase(){var a=function(){return arguments}(),c=!1,b;for(b in a)a.hasOwnProperty(b)&&"callee"===b&&(c=!0);return!c&&a.hasOwnProperty("callee")}runTestCase(testcase);
