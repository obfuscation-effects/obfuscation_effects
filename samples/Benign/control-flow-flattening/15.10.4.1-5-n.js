var gTestfile='15.10.4.1-5-n.js',BUGNUMBER='61266',summary='Negative\x20test:\x20Passing\x20(RegExp\x20object,\x20flag)\x20to\x20RegExp()\x20constructor',statprefix='Passing\x20RegExp\x20object\x20on\x20pattern\x20',statsuffix=';\x20passing\x20flag\x20',cnFAILURE='Expected\x20an\x20exception\x20to\x20be\x20thrown,\x20but\x20none\x20was\x20-',singlequote='\x27',i=-0x1,j=-0x1,s='',f='',obj1={},obj2={},patterns=new Array(),flags=new Array();patterns[0x0]='',patterns[0x1]='abc',patterns[0x2]='(.*)(3-1)sw',patterns[0x3]='(.*)(...)\x5cs\x5cw',patterns[0x4]='[^A-Za-z0-9_]',patterns[0x5]='[^\x0c\x0a\x0d\x09\x0b](123.5)([4\x20-\x208]$)',flags[0x0]='i',flags[0x1]='g',flags[0x2]='m',DESCRIPTION='Negative\x20test:\x20Passing\x20(RegExp\x20object,\x20flag)\x20to\x20RegExp()\x20constructor',EXPECTED='error',test();function test(){var _0xbba815={'BsWGk':'test','fVmqM':function(_0x58812a,_0x552db1){return _0x58812a(_0x552db1);},'XTnSO':function(_0x375b55,_0x31fa9c){return _0x375b55(_0x31fa9c);},'ejWnB':function(_0x42c765,_0x59ea70){return _0x42c765(_0x59ea70);},'dthwo':function(_0x4c0e9f,_0x230edb,_0x1bbfb5){return _0x4c0e9f(_0x230edb,_0x1bbfb5);},'hZkdq':function(_0x23509f,_0x461b31,_0x2415a1,_0x1c8ecc){return _0x23509f(_0x461b31,_0x2415a1,_0x1c8ecc);},'gkDHo':'PASS','LPxGa':'FAIL'};enterFunc(_0xbba815['BsWGk']),_0xbba815['fVmqM'](printBugNumber,BUGNUMBER),_0xbba815['XTnSO'](printStatus,summary);for(i in patterns){s=patterns[i];for(j in flags){var _0x1df680='3|0|4|1|2'['split']('|'),_0x19cfd7=0x0;while(!![]){switch(_0x1df680[_0x19cfd7++]){case'0':_0xbba815['ejWnB'](printStatus,_0xbba815['dthwo'](getStatus,s,f));continue;case'1':obj2=new RegExp(obj1,f);continue;case'2':_0xbba815['hZkdq'](reportCompare,_0xbba815['gkDHo'],_0xbba815['LPxGa'],cnFAILURE);continue;case'3':f=flags[j];continue;case'4':obj1=new RegExp(s,f);continue;}break;}}}exitFunc(_0xbba815['BsWGk']);}function getStatus(_0x38fc77,_0x45a1fb){var _0x538307={'ponLa':function(_0x1a4362,_0x580e3f){return _0x1a4362+_0x580e3f;},'onDzt':function(_0x51b2f6,_0x32eba0){return _0x51b2f6+_0x32eba0;},'iGqBI':function(_0x59776f,_0x45a80f){return _0x59776f(_0x45a80f);}};return _0x538307['ponLa'](_0x538307['onDzt'](statprefix+_0x538307['iGqBI'](quote,_0x38fc77),statsuffix),_0x45a1fb);}function quote(_0x39965a){var _0x362ee3={'CcrpL':function(_0xe29b13,_0x1a9182){return _0xe29b13+_0x1a9182;}};return _0x362ee3['CcrpL'](_0x362ee3['CcrpL'](singlequote,_0x39965a),singlequote);}