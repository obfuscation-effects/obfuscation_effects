var gTestfile='15.11.7.6-002.js',UBound=0x0,BUGNUMBER=0x31505,summary='Prototype\x20of\x20predefined\x20error\x20objects\x20should\x20be\x20DontDelete',status='',statusitems=[],actual='',actualvalues=[],expect='',expectedvalues=[];function testDontDelete(_0x49161a){var _0x3839d9,_0x40e575=_0x49161a['prototype'];try{delete _0x49161a['prototype'];}catch(_0x1f8a43){}return _0x49161a['prototype']===_0x40e575;}var list=['Error','ConversionError','EvalError','RangeError','ReferenceError','SyntaxError','TypeError','URIError'];for(i in list){var F=this[list[i]];F&&(status='Testing\x20DontDelete\x20attribute\x20of\x20|'+list[i]+'.prototype|',actual=testDontDelete(F),expect=!![],addThis());}test();function addThis(){statusitems[UBound]=status,actualvalues[UBound]=actual,expectedvalues[UBound]=expect,UBound++;}function test(){var _0x476e60=(function(){var _0x26f620=!![];return function(_0x4d3851,_0xef6808){var _0x3a1569=_0x26f620?function(){if(_0xef6808){var _0x1ae8ef=_0xef6808['apply'](_0x4d3851,arguments);return _0xef6808=null,_0x1ae8ef;}}:function(){};return _0x26f620=![],_0x3a1569;};}()),_0x47491f=_0x476e60(this,function(){return _0x47491f['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](_0x47491f)['search']('(((.+)+)+)+$');});_0x47491f(),enterFunc('test'),printBugNumber(BUGNUMBER),printStatus(summary);for(var _0x2db0c5=0x0;_0x2db0c5<UBound;_0x2db0c5++){reportCompare(expectedvalues[_0x2db0c5],actualvalues[_0x2db0c5],statusitems[_0x2db0c5]);}exitFunc('test');}