var a0_0x592f5b=(function(){var _0xdae5d3=!![];return function(_0x4d6a2e,_0x42b8a3){var _0x3fef88=_0xdae5d3?function(){if(_0x42b8a3){var _0x1755f3=_0x42b8a3['apply'](_0x4d6a2e,arguments);return _0x42b8a3=null,_0x1755f3;}}:function(){};return _0xdae5d3=![],_0x3fef88;};}()),a0_0x44664c=a0_0x592f5b(this,function(){return a0_0x44664c['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](a0_0x44664c)['search']('(((.+)+)+)+$');});a0_0x44664c(),gTestfile='13.3.5.js',START('13.3.5\x20-\x20Properties\x20of\x20QName\x20Instances'),q=new QName('http://someuri','foo'),TEST(0x1,!![],q['hasOwnProperty']('localName')),TEST(0x2,!![],q['hasOwnProperty']('uri')),TEST(0x3,!![],q['propertyIsEnumerable']('localName')),TEST(0x4,!![],q['propertyIsEnumerable']('uri'));var localNameCount=0x0,uriCount=0x0,p;for(p in q){if(p=='localName')localNameCount++;if(p=='uri')uriCount++;}TEST(0x5,0x1,localNameCount),TEST(0x6,0x1,uriCount),TEST(0x7,'http://someuri',q['uri']),TEST(0x8,'foo',q['localName']),END();