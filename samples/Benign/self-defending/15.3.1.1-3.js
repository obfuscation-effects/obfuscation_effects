var a0_0x542265=(function(){var _0x28b7a9=!![];return function(_0x36aade,_0x365219){var _0x3dc402=_0x28b7a9?function(){if(_0x365219){var _0x2fbe24=_0x365219['apply'](_0x36aade,arguments);return _0x365219=null,_0x2fbe24;}}:function(){};return _0x28b7a9=![],_0x3dc402;};}()),a0_0x280eca=a0_0x542265(this,function(){return a0_0x280eca['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](a0_0x280eca)['search']('(((.+)+)+)+$');});a0_0x280eca();var SECTION='15.3.1.1-3',VERSION='ECMA_1';startTest();var TITLE='The\x20Function\x20Constructor\x20Called\x20as\x20a\x20Function';writeHeaderToLog(SECTION+'\x20'+TITLE);var args='';for(var i=0x0;i<0x7d0;i++){args+='arg'+i,i!=0x7cf&&(args+=',');}var s='';for(var i=0x0;i<0x7d0;i++){s+='.0005',i!=0x7cf&&(s+=',');}MyFunc=Function(args,'var\x20r=0;\x20for\x20(var\x20i\x20=\x200;\x20i\x20<\x20MyFunc.length;\x20i++\x20)\x20{\x20if\x20(\x20eval(\x27arg\x27+i)\x20==\x20void\x200)\x20break;\x20else\x20r\x20+=\x20eval(\x27arg\x27+i);\x20};\x20return\x20r'),MyObject=Function(args,'for\x20(var\x20i\x20=\x200;\x20i\x20<\x20MyFunc.length;\x20i++\x20)\x20{\x20if\x20(\x20eval(\x27arg\x27+i)\x20==\x20void\x200)\x20break;\x20eval(\x27this.arg\x27+i\x20+\x27=arg\x27+i);\x20};');var MY_OB=eval('MyFunc('+s+')');new TestCase(SECTION,'MyFunc.length',0x7d0,MyFunc['length']),new TestCase(SECTION,'var\x20MY_OB\x20=\x20eval(\x27MyFunc(s)\x27)',0x1,MY_OB),new TestCase(SECTION,'var\x20MY_OB\x20=\x20eval(\x27MyFunc(s)\x27)',0x1,eval('var\x20MY_OB\x20=\x20MyFunc('+s+');\x20MY_OB')),new TestCase(SECTION,'MyObject.length',0x7d0,MyObject['length']),new TestCase(SECTION,'FUN1\x20=\x20Function(\x20\x27a\x27,\x27b\x27,\x27c\x27,\x20\x27return\x20FUN1.length\x27\x20);\x20FUN1.length',0x3,eval('FUN1 = Function(\'a\', \'b\', \'c\', \'return\\\\x20FUN1.length\'), FUN1[\'length\'];')),new TestCase(SECTION,'FUN1\x20=\x20Function(\x20\x27a\x27,\x27b\x27,\x27c\x27,\x20\x27return\x20FUN1.length\x27\x20);\x20FUN1()',0x3,eval('FUN1 = Function(\'a\', \'b\', \'c\', \'return\\\\x20FUN1.length\'), FUN1();')),new TestCase(SECTION,'FUN1\x20=\x20Function(\x20\x27a\x27,\x27b\x27,\x27c\x27,\x20\x27return\x20FUN1.length\x27\x20);\x20FUN1(1,2,3,4,5)',0x3,eval('FUN1 = Function(\'a\', \'b\', \'c\', \'return\\\\x20FUN1.length\'), FUN1(1, 2, 3, 4, 5);')),test();