var a0_0x589f12=a0_0x34f1;(function(_0xa1dec9,_0x5def45){var _0xc74595=a0_0x34f1,_0x59e06a=_0xa1dec9();while(!![]){try{var _0x2e2a97=-parseInt(_0xc74595(0x14d))/0x1*(parseInt(_0xc74595(0x14f))/0x2)+-parseInt(_0xc74595(0x139))/0x3+-parseInt(_0xc74595(0x144))/0x4+parseInt(_0xc74595(0x148))/0x5+-parseInt(_0xc74595(0x142))/0x6+parseInt(_0xc74595(0x152))/0x7+parseInt(_0xc74595(0x13e))/0x8*(parseInt(_0xc74595(0x137))/0x9);if(_0x2e2a97===_0x5def45)break;else _0x59e06a['push'](_0x59e06a['shift']());}catch(_0x4353d9){_0x59e06a['push'](_0x59e06a['shift']());}}}(a0_0x5cf6,0x40079));var fs=require('fs'),path=require(a0_0x589f12(0x150)),wrench=require(a0_0x589f12(0x13d)),CONST=require(a0_0x589f12(0x13c)),logger=require(a0_0x589f12(0x143)),dir,file,projectPath;function a0_0x34f1(_0x586937,_0x46fbd6){var _0x5cf6a3=a0_0x5cf6();return a0_0x34f1=function(_0x34f164,_0x1527b8){_0x34f164=_0x34f164-0x136;var _0x1c3d4e=_0x5cf6a3[_0x34f164];return _0x1c3d4e;},a0_0x34f1(_0x586937,_0x46fbd6);}function BuildLog(_0x1723bb){var _0x12fc25=a0_0x589f12;if(BuildLog[_0x12fc25(0x147)])return BuildLog['instance'];BuildLog[_0x12fc25(0x147)]=this,projectPath=_0x1723bb,dir=path['join'](projectPath,CONST[_0x12fc25(0x145)][_0x12fc25(0x146)]),file=path['join'](dir,_0x12fc25(0x136)),this[_0x12fc25(0x141)]=!![],this[_0x12fc25(0x149)]={},!fs[_0x12fc25(0x153)](dir)&&wrench[_0x12fc25(0x13b)](dir,0x1ed),this[_0x12fc25(0x154)]();}function a0_0x5cf6(){var _0x5f3c65=['existsSync','read','writeFileSync','build.json','11556yPSloK','Unable\x20to\x20write\x20build\x20log\x20to\x20\x22','1332111ccxPOX','stringify','mkdirSyncRecursive','../../common/constants','wrench','5584aZopOM','\x22\x20is\x20corrupt,\x20creating\x20a\x20new\x20one...','exports','isNew','2057424oOWcbc','../../logger','910316ARIBVa','DIR','BUILD','instance','634145hPvUIU','data','utf8','parse','warn','27ATNGlu','Build\x20log\x20at\x20\x22','2782lVPhzX','path','prototype','2038967RXGNxD'];a0_0x5cf6=function(){return _0x5f3c65;};return a0_0x5cf6();}BuildLog['prototype']['read']=function(){var _0x10cae3=a0_0x589f12;if(!fs['existsSync'](file))this['isNew']=!![],this[_0x10cae3(0x149)]={};else{this[_0x10cae3(0x141)]=![];try{this['data']=JSON[_0x10cae3(0x14b)](fs['readFileSync'](file,_0x10cae3(0x14a)));}catch(_0x47efef){logger[_0x10cae3(0x14c)](_0x10cae3(0x14e)+path['relative'](projectPath,file)+_0x10cae3(0x13f)),this[_0x10cae3(0x149)]={};}}},BuildLog[a0_0x589f12(0x151)]['write']=function(){var _0x364737=a0_0x589f12;try{fs[_0x364737(0x155)](file,JSON[_0x364737(0x13a)](this[_0x364737(0x149)]));}catch(_0x534139){logger['warn'](_0x364737(0x138)+path['relative'](projectPath,file)+'\x22');}},module[a0_0x589f12(0x140)]=BuildLog;