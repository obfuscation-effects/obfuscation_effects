function testcase(){var a=function(f,g){},c=!1;c=a.hasOwnProperty("length")&&2===a.length;var d=!1;a.length=1001;d=1001===a.length;var e=!1;for(b in a)"length"===b&&(e=!0);var b=!1;delete a.length;b=a.hasOwnProperty("length");return c&&!d&&!e&&b}runTestCase(testcase);