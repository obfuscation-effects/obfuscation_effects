function testcase(){var a={};Object.defineProperty(a,"property",{writable:Math});var b=a.hasOwnProperty("property");a.property="isWritable";a="isWritable"===a.property;return!0===b&&!0===a}runTestCase(testcase);
