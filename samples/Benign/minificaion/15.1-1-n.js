var SECTION="15.1-1-n",VERSION="ECMA_1";startTest();var TITLE="The Global Object";writeHeaderToLog(SECTION+" "+TITLE);DESCRIPTION="var MY_GLOBAL = new this()";EXPECTED="error";new TestCase(SECTION,"var MY_GLOBAL = new this()","error",eval("var MY_GLOBAL = new this()"));test();
