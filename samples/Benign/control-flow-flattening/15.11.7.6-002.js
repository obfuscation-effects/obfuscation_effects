var gTestfile='15.11.7.6-002.js',UBound=0x0,BUGNUMBER=0x31505,summary='Prototype\x20of\x20predefined\x20error\x20objects\x20should\x20be\x20DontDelete',status='',statusitems=[],actual='',actualvalues=[],expect='',expectedvalues=[];function testDontDelete(_0x18cd50){var _0x4a9c53={'TbOCt':function(_0x294d74,_0x323634){return _0x294d74===_0x323634;}},_0x600ed1,_0x2b3de3=_0x18cd50['prototype'];try{delete _0x18cd50['prototype'];}catch(_0x31919d){}return _0x4a9c53['TbOCt'](_0x18cd50['prototype'],_0x2b3de3);}var list=['Error','ConversionError','EvalError','RangeError','ReferenceError','SyntaxError','TypeError','URIError'];for(i in list){var F=this[list[i]];F&&(status='Testing\x20DontDelete\x20attribute\x20of\x20|'+list[i]+'.prototype|',actual=testDontDelete(F),expect=!![],addThis());}test();function addThis(){statusitems[UBound]=status,actualvalues[UBound]=actual,expectedvalues[UBound]=expect,UBound++;}function test(){var _0x2b4525={'NxNjg':'4|0|2|3|1','kYxJW':function(_0x58761f,_0x5d49f7){return _0x58761f(_0x5d49f7);},'smNAY':'test','FJuow':function(_0x173041,_0x320bae){return _0x173041(_0x320bae);},'BJvLY':function(_0x4aa3b2,_0x144bfe){return _0x4aa3b2<_0x144bfe;},'PDoYC':function(_0x159448,_0x25cbee,_0x2a322a,_0x14e364){return _0x159448(_0x25cbee,_0x2a322a,_0x14e364);}},_0x2688da=_0x2b4525['NxNjg']['split']('|'),_0x425f01=0x0;while(!![]){switch(_0x2688da[_0x425f01++]){case'0':printBugNumber(BUGNUMBER);continue;case'1':_0x2b4525['kYxJW'](exitFunc,_0x2b4525['smNAY']);continue;case'2':_0x2b4525['FJuow'](printStatus,summary);continue;case'3':for(var _0x4faff3=0x0;_0x2b4525['BJvLY'](_0x4faff3,UBound);_0x4faff3++){_0x2b4525['PDoYC'](reportCompare,expectedvalues[_0x4faff3],actualvalues[_0x4faff3],statusitems[_0x4faff3]);}continue;case'4':_0x2b4525['FJuow'](enterFunc,_0x2b4525['smNAY']);continue;}break;}}