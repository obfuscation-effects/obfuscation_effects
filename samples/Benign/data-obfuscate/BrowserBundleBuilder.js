'use strict';var a0_0x1c2a3d=a0_0x2f9b;(function(_0x3f4a69,_0x3546d2){var _0x4813b6=a0_0x2f9b,_0x2df70b=_0x3f4a69();while(!![]){try{var _0x14f01e=-parseInt(_0x4813b6(0x209))/0x1+-parseInt(_0x4813b6(0x24f))/0x2+-parseInt(_0x4813b6(0x200))/0x3*(parseInt(_0x4813b6(0x244))/0x4)+parseInt(_0x4813b6(0x1f3))/0x5*(parseInt(_0x4813b6(0x22b))/0x6)+parseInt(_0x4813b6(0x225))/0x7+-parseInt(_0x4813b6(0x220))/0x8+parseInt(_0x4813b6(0x1f5))/0x9*(parseInt(_0x4813b6(0x1f7))/0xa);if(_0x14f01e===_0x3546d2)break;else _0x2df70b['push'](_0x2df70b['shift']());}catch(_0x35724e){_0x2df70b['push'](_0x2df70b['shift']());}}}(a0_0x31fc,0xdba2c));module['exports']=BrowserBundleBuilder;var path=require(a0_0x1c2a3d(0x236)),util=require(a0_0x1c2a3d(0x1eb)),fs=require(a0_0x1c2a3d(0x20d)),ncp=require('ncp')[a0_0x1c2a3d(0x252)],mkdirp=require(a0_0x1c2a3d(0x1f1)),rimraf=require(a0_0x1c2a3d(0x257)),UglifyJS=require(a0_0x1c2a3d(0x1ec)),browserify=require('browserify'),moduleHelper=require(a0_0x1c2a3d(0x259)),requireHelper=require(a0_0x1c2a3d(0x1fc)),packageDescriptionPath=path[a0_0x1c2a3d(0x21e)](process[a0_0x1c2a3d(0x258)](),a0_0x1c2a3d(0x20b)),packageDescription;function a0_0x2f9b(_0x2b8ca6,_0x16ef5b){var _0x31fc13=a0_0x31fc();return a0_0x2f9b=function(_0x2f9b70,_0x2a8022){_0x2f9b70=_0x2f9b70-0x1ea;var _0x2345ac=_0x31fc13[_0x2f9b70];return _0x2345ac;},a0_0x2f9b(_0x2b8ca6,_0x16ef5b);}function a0_0x31fc(){var _0x1af1e7=['errorTemplateSource:\x20%s','figure_out_scope','eventBus','compute_char_frequency','\x0a{name:\x20\x27%s\x27,\x20constructor:\x20%s}','__BrowserBundle.js','add','getValidPath','resolve','bundleBuilt','publicDirectoryPath','join','readFile','19792rVLxFb','replace','create','_logger','toString','12132050QlzgOt','templateProvider','name:\x20\x27%s\x27,\x20','/*\x20%s:\x20%s\x20*/\x0a','_currentStores','_currentComponents','2826324CYKmnQ','length','_isRelease','name','_componentFinder','stores','makeDir','require(\x27%s\x27)','_storeFinder','Looking\x20for\x20stores\x20and\x20components...','prototype','path','null','source','relative','_findModules','compiledSource','all','catch','routes.js','bundle.js','transform','Files\x20were\x20changed,\x20rebuilding\x20browser\x20bundle...','now','_publicPath','4RVBcEn','_createRealBootstrapper','Compressor','logger','assets','\x27__templateEngine\x27','exists','config','forEach','map','_copyComponentAssets','1254806CHdDDA','print_to_string','storeFinder','ncp','file','writeFile','isRelease','version','rimraf','cwd','./helpers/moduleHelper','template','emit','keys','format','error','utf8','to\x20public\x20directory...','util','uglify-js','stringify','injectionFinder','string','\x5c$&','mkdirp','Copying\x20assets\x20of\x20every\x20component\x20','10XnXwLU','then','1724589neNmKR','constructor:\x20%s,\x20','40JjGAxZ','unlink','_watchFiles','properties','dirname','./helpers/requireHelper','_isBuilt','_eventBus','/**__stores**/','3344061VxNVwW','info','_generateRequiresForComponents','\x27__routeDefinitions\x27','componentFinder','templateSource:\x20\x27%s\x27,\x20','_optimize','_templateProvider','push','797550kPAAUL','parse','package.json','Watching\x20files\x20for\x20changes\x20to\x20rebuild\x20bundle...','./promises/fs','/**__components**/','Bootstrapper.js','DEFAULT_LOGIC_FILENAME','find','errorTemplate'];a0_0x31fc=function(){return _0x1af1e7;};return a0_0x31fc();}try{packageDescription=require(packageDescriptionPath);}catch(a0_0x3e4b08){}var DEFAULT_PUBLIC_DIRECTORY=path[a0_0x1c2a3d(0x21e)](process['cwd'](),'public'),BROWSER_ROOT_PATH=path[a0_0x1c2a3d(0x21e)](__dirname,'..','browser'),INFO_BUILDING_BUNDLE='Building\x20browser\x20script\x20bundle...',INFO_LOOKING_FOR_MODULES=a0_0x1c2a3d(0x234),INFO_OPTIMIZING_BROWSER_BUNDLE='Optimizing\x20code\x20of\x20browser\x20bundle...',INFO_WATCHING_FILES=a0_0x1c2a3d(0x20c),INFO_FILES_CHANGED=a0_0x1c2a3d(0x241),INFO_COPYING_ASSETS=a0_0x1c2a3d(0x1f2)+a0_0x1c2a3d(0x1ea),TEMPORARY_BOOTSTRAPPER_FILENAME=a0_0x1c2a3d(0x218),BOOTSTRAPPER_FILENAME=a0_0x1c2a3d(0x20f),BROWSER_SCRIPT_FILENAME='browser.js',BUNDLE_FILENAME=a0_0x1c2a3d(0x23f),STORE_FORMAT=a0_0x1c2a3d(0x217),STORES_REPLACE=a0_0x1c2a3d(0x1ff),COMPONENT_FORMAT='\x0a{'+a0_0x1c2a3d(0x227)+a0_0x1c2a3d(0x1f6)+'properties:\x20%s,\x20'+a0_0x1c2a3d(0x205)+a0_0x1c2a3d(0x213)+'}',ASSETS_DIRECTORY_NAME=a0_0x1c2a3d(0x248),COMPONENTS_REPLACE=a0_0x1c2a3d(0x20e),ROUTE_DEFINITIONS_REPLACE=a0_0x1c2a3d(0x203),ROUTE_DEFINITIONS_FILENAME=a0_0x1c2a3d(0x23e),TEMPLATE_ENGINE_REPLACE=a0_0x1c2a3d(0x249),REQUIRE_FORMAT=a0_0x1c2a3d(0x232),HEADER_FORMAT=a0_0x1c2a3d(0x228),BRACKETS_REGEXP=/(?:^\[)|(?:\]$)/g;function BrowserBundleBuilder(_0x1745d1){var _0x19696b=a0_0x1c2a3d,_0x25c6b4=_0x1745d1[_0x19696b(0x21b)](_0x19696b(0x24b));this[_0x19696b(0x1fe)]=_0x1745d1['resolve'](_0x19696b(0x215)),this['_logger']=_0x1745d1[_0x19696b(0x21b)](_0x19696b(0x247)),this[_0x19696b(0x243)]=_0x25c6b4[_0x19696b(0x21d)]||DEFAULT_PUBLIC_DIRECTORY,this[_0x19696b(0x207)]=_0x1745d1['resolve'](_0x19696b(0x226)),this['_injectionFinder']=_0x1745d1[_0x19696b(0x21b)](_0x19696b(0x1ee)),this[_0x19696b(0x233)]=_0x1745d1[_0x19696b(0x21b)](_0x19696b(0x251)),this['_componentFinder']=_0x1745d1['resolve'](_0x19696b(0x204)),this[_0x19696b(0x22d)]=Boolean(_0x25c6b4[_0x19696b(0x255)]);}BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x1fd)]=![],BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x207)]=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x233)]=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)]['_componentFinder']=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)]['_eventBus']=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x223)]=null,BrowserBundleBuilder['prototype'][a0_0x1c2a3d(0x22d)]=![],BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x243)]='',BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x22a)]=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x229)]=null,BrowserBundleBuilder[a0_0x1c2a3d(0x235)]['build']=function(){var _0x6ad34c=a0_0x1c2a3d,_0x1cf9f7=this,_0x481f76=Date['now'](),_0xc70e6d=path['join'](process[_0x6ad34c(0x258)](),TEMPORARY_BOOTSTRAPPER_FILENAME),_0x561335=path[_0x6ad34c(0x21e)](process[_0x6ad34c(0x258)](),BROWSER_SCRIPT_FILENAME),_0x2a8822=path[_0x6ad34c(0x21e)](this['_publicPath'],BUNDLE_FILENAME),_0x518def=browserify({'debug':!this[_0x6ad34c(0x22d)]});return fs['exists'](this[_0x6ad34c(0x243)])[_0x6ad34c(0x1f4)](function(_0x392f7f){var _0x1c1025=_0x6ad34c;return!_0x392f7f?fs[_0x1c1025(0x231)](_0x1cf9f7['_publicPath']):null;})['then'](function(){var _0x434a27=_0x6ad34c;return _0x1cf9f7[_0x434a27(0x23a)]();})[_0x6ad34c(0x1f4)](function(){var _0x189288=_0x6ad34c,_0x59a645=path[_0x189288(0x21e)](_0x1cf9f7[_0x189288(0x243)],ASSETS_DIRECTORY_NAME);return remove(_0x59a645)[_0x189288(0x23d)](function(){});})[_0x6ad34c(0x1f4)](function(){var _0x1116fc=_0x6ad34c;return _0x1cf9f7[_0x1116fc(0x24e)]();})[_0x6ad34c(0x1f4)](this[_0x6ad34c(0x245)]['bind'](this))[_0x6ad34c(0x1f4)](function(_0x186957){return fs['writeFile'](_0xc70e6d,_0x186957);})[_0x6ad34c(0x1f4)](function(){var _0x36881f=_0x6ad34c;return fs[_0x36881f(0x24a)](_0x561335);})[_0x6ad34c(0x1f4)](function(_0xf8654a){var _0x5eac62=_0x6ad34c;return _0xf8654a?_0x518def[_0x5eac62(0x219)](_0x561335):null;})[_0x6ad34c(0x1f4)](function(){return new Promise(function(_0x165616,_0x52a8c1){var _0x222f6b=a0_0x2f9b;_0x1cf9f7['_logger'][_0x222f6b(0x201)](INFO_BUILDING_BUNDLE),_0x518def['bundle'](function(_0x16b9aa,_0x3083f6){var _0x651ac=_0x222f6b;if(_0x16b9aa){_0x52a8c1(_0x16b9aa);return;}_0x165616(_0x3083f6[_0x651ac(0x224)]());});});})[_0x6ad34c(0x1f4)](function(_0x56e20c){var _0x4ac95f=_0x6ad34c,_0x3af829=_0x56e20c;return _0x1cf9f7['_isRelease']&&(_0x1cf9f7[_0x4ac95f(0x223)][_0x4ac95f(0x201)](INFO_OPTIMIZING_BROWSER_BUNDLE),_0x3af829=_0x1cf9f7[_0x4ac95f(0x206)](_0x56e20c)),packageDescription&&packageDescription[_0x4ac95f(0x22e)]&&packageDescription[_0x4ac95f(0x256)]&&(_0x3af829=util[_0x4ac95f(0x25d)](HEADER_FORMAT,packageDescription[_0x4ac95f(0x22e)],packageDescription[_0x4ac95f(0x256)])+_0x3af829),fs[_0x4ac95f(0x254)](_0x2a8822,_0x3af829);})['then'](function(){var _0xf8cd95=_0x6ad34c;return fs[_0xf8cd95(0x1f8)](_0xc70e6d);})[_0x6ad34c(0x1f4)](function(){var _0x335973=_0x6ad34c;_0x1cf9f7[_0x335973(0x1fd)]=!![],_0x1cf9f7[_0x335973(0x1fe)][_0x335973(0x25b)](_0x335973(0x21c),{'path':_0x2a8822,'time':Date[_0x335973(0x242)]()-_0x481f76});})[_0x6ad34c(0x23d)](function(_0x5328f9){var _0x4d3f9a=_0x6ad34c;_0x1cf9f7[_0x4d3f9a(0x1fe)][_0x4d3f9a(0x25b)](_0x4d3f9a(0x25e),_0x5328f9);});},BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x1f9)]=function(){var _0x55e39d=a0_0x1c2a3d;if(this[_0x55e39d(0x22d)])return;var _0x3b93ae=this,_0xed093d=function(){var _0xb73880=_0x55e39d;if(!_0x3b93ae['_isBuilt'])return;_0x3b93ae[_0xb73880(0x223)][_0xb73880(0x201)](INFO_FILES_CHANGED),_0x3b93ae['build']();};this[_0x55e39d(0x223)]['info'](INFO_WATCHING_FILES),this[_0x55e39d(0x233)]['watch'](_0xed093d),this[_0x55e39d(0x22f)]['watch'](_0xed093d);},BrowserBundleBuilder[a0_0x1c2a3d(0x235)][a0_0x1c2a3d(0x245)]=function(){var _0x17e42e=a0_0x1c2a3d,_0x46b4c2=this,_0x589406=path[_0x17e42e(0x21e)](BROWSER_ROOT_PATH,BOOTSTRAPPER_FILENAME),_0x828f89=path[_0x17e42e(0x21e)](process[_0x17e42e(0x258)](),ROUTE_DEFINITIONS_FILENAME);return this[_0x17e42e(0x223)][_0x17e42e(0x201)](INFO_LOOKING_FOR_MODULES),fs['readFile'](_0x589406,{'encoding':_0x17e42e(0x25f)})['then'](function(_0x59fee5){var _0x5c923a=_0x17e42e;return Promise[_0x5c923a(0x23c)]([_0x46b4c2['_generateRequiresForStores'](),_0x46b4c2[_0x5c923a(0x202)]()])[_0x5c923a(0x1f4)](function(_0x44f893){return{'file':_0x59fee5,'stores':_0x44f893[0x0],'components':_0x44f893[0x1]};});})[_0x17e42e(0x1f4)](function(_0x2f7e41){var _0x3b145d=_0x17e42e;return fs['exists'](_0x828f89)[_0x3b145d(0x1f4)](function(_0x31f813){var _0xddea2f=_0x3b145d,_0x438c42=_0x31f813?util['format'](REQUIRE_FORMAT,'./'+path[_0xddea2f(0x239)](process[_0xddea2f(0x258)](),requireHelper['getValidPath'](_0x828f89))):_0xddea2f(0x237);return _0x2f7e41[_0xddea2f(0x253)][_0xddea2f(0x221)](COMPONENTS_REPLACE,_0x2f7e41['components'])[_0xddea2f(0x221)](STORES_REPLACE,_0x2f7e41[_0xddea2f(0x230)])['replace'](ROUTE_DEFINITIONS_REPLACE,_0x438c42);});})[_0x17e42e(0x23d)](function(_0x4f3966){var _0x3c9c00=_0x17e42e;_0x46b4c2[_0x3c9c00(0x1fe)][_0x3c9c00(0x25b)](_0x3c9c00(0x25e),_0x4f3966);});},BrowserBundleBuilder['prototype'][a0_0x1c2a3d(0x23a)]=function(){var _0x3c76b7=a0_0x1c2a3d,_0x51559e=this;return Promise[_0x3c76b7(0x23c)]([this[_0x3c76b7(0x233)]['find'](),this[_0x3c76b7(0x22f)][_0x3c76b7(0x211)]()])['then'](function(_0x1c47c1){var _0x19873c=_0x3c76b7;_0x51559e[_0x19873c(0x229)]=_0x1c47c1[0x0],_0x51559e[_0x19873c(0x22a)]=_0x1c47c1[0x1],_0x51559e[_0x19873c(0x1f9)]();});},BrowserBundleBuilder['prototype'][a0_0x1c2a3d(0x24e)]=function(){var _0x16cafc=a0_0x1c2a3d;this[_0x16cafc(0x223)][_0x16cafc(0x201)](INFO_COPYING_ASSETS);var _0x1637b3=this,_0x114bc3=this[_0x16cafc(0x22a)],_0x537f58=Object[_0x16cafc(0x25c)](_0x114bc3)['map'](function(_0x44da12){var _0x434fa8=_0x16cafc,_0x211817=path[_0x434fa8(0x21e)](path[_0x434fa8(0x1fb)](_0x114bc3[_0x44da12]['path']),ASSETS_DIRECTORY_NAME),_0x1598e2=path[_0x434fa8(0x21e)](_0x1637b3[_0x434fa8(0x243)],ASSETS_DIRECTORY_NAME,_0x114bc3[_0x44da12]['name']);fs['exists'](_0x211817)['then'](function(_0x4d6636){return!_0x4d6636?createDir(_0x1598e2):null;})[_0x434fa8(0x1f4)](function(){return copy(_0x211817,_0x1598e2);});});return Promise[_0x16cafc(0x23c)](_0x537f58);},BrowserBundleBuilder[a0_0x1c2a3d(0x235)]['_generateRequiresForStores']=function(){var _0x260892=a0_0x1c2a3d,_0x37f448=[],_0x2558b3=this['_currentStores'];return Object[_0x260892(0x25c)](_0x2558b3)[_0x260892(0x24c)](function(_0x428c4a){var _0x48bced=_0x260892,_0x1a1973=_0x2558b3[_0x428c4a][_0x48bced(0x236)]?util[_0x48bced(0x25d)](REQUIRE_FORMAT,requireHelper[_0x48bced(0x21a)]('./'+path[_0x48bced(0x239)](process[_0x48bced(0x258)](),_0x2558b3[_0x428c4a]['path']))):null;if(!_0x1a1973)return;_0x37f448[_0x48bced(0x208)](util[_0x48bced(0x25d)](STORE_FORMAT,_0x428c4a,_0x1a1973));}),Promise[_0x260892(0x21b)](_0x37f448[_0x260892(0x21e)](','));},BrowserBundleBuilder['prototype'][a0_0x1c2a3d(0x202)]=function(){var _0x5b0829=a0_0x1c2a3d,_0x36ff58=this,_0x56574a=this[_0x5b0829(0x22a)],_0x442261=[];return Object['keys'](_0x56574a)[_0x5b0829(0x24c)](function(_0x18d2c3){var _0x5ed383=_0x5b0829,_0x290b48=_0x56574a[_0x18d2c3],_0x44ede2=path['dirname'](_0x290b48[_0x5ed383(0x236)]),_0xaaa984=_0x56574a[_0x18d2c3][_0x5ed383(0x1fa)]['logic']||moduleHelper[_0x5ed383(0x210)],_0x5492cd=path[_0x5ed383(0x21b)](_0x44ede2,_0xaaa984),_0x3a166b=path[_0x5ed383(0x239)](process['cwd'](),_0x5492cd),_0xebc755;try{_0xebc755=require(_0x5492cd);}catch(_0x46838f){_0x36ff58['_eventBus'][_0x5ed383(0x25b)]('error',_0x46838f);}if(typeof _0xebc755!=='function'||typeof _0x290b48[_0x5ed383(0x1fa)][_0x5ed383(0x25a)]!==_0x5ed383(0x1ef))return;var _0x251dde=[];_0x251dde[_0x5ed383(0x208)]({'name':_0x290b48['name'],'isErrorTemplate':![],'path':path['resolve'](_0x44ede2,_0x290b48[_0x5ed383(0x1fa)]['template'])});if(_0x290b48[_0x5ed383(0x1fa)][_0x5ed383(0x212)]){var _0x1d1dd6=moduleHelper['getNameForErrorTemplate'](_0x290b48[_0x5ed383(0x22e)]),_0x23b642=path[_0x5ed383(0x21b)](_0x44ede2,_0x290b48[_0x5ed383(0x1fa)]['errorTemplate']);_0x251dde[_0x5ed383(0x208)]({'name':_0x1d1dd6,'isErrorTemplate':!![],'path':_0x23b642});}var _0x340046=_0x251dde[_0x5ed383(0x24d)](function(_0x32572f){var _0x3c2147=_0x5ed383;return fs[_0x3c2147(0x21f)](_0x32572f['path'])['then'](function(_0x5f4b82){var _0x494af7=_0x3c2147,_0x41ee8f=Object[_0x494af7(0x222)](_0x32572f);return _0x41ee8f[_0x494af7(0x238)]=_0x5f4b82['toString'](),_0x41ee8f;});}),_0x7a73e8=Promise[_0x5ed383(0x23c)](_0x340046)[_0x5ed383(0x1f4)](function(_0x153d28){var _0x4f9206=_0x5ed383,_0x3d45f5=_0x153d28[_0x4f9206(0x24d)](function(_0x2a961a){var _0x51a6e7=_0x4f9206,_0x1c4dd0=_0x36ff58[_0x51a6e7(0x207)]['compile'](_0x2a961a[_0x51a6e7(0x238)],_0x2a961a[_0x51a6e7(0x22e)]);return Promise['resolve'](_0x1c4dd0)[_0x51a6e7(0x1f4)](function(_0xe04a4c){var _0x5f0951=_0x51a6e7,_0x360243=Object[_0x5f0951(0x222)](_0x2a961a);return _0x360243[_0x5f0951(0x23b)]=_0xe04a4c,_0x360243;});});return Promise[_0x4f9206(0x23c)](_0x3d45f5);})['then'](function(_0x5ba315){var _0x5a4cd0=_0x5ed383;return util[_0x5a4cd0(0x25d)](COMPONENT_FORMAT,_0x18d2c3,util[_0x5a4cd0(0x25d)](REQUIRE_FORMAT,'./'+requireHelper[_0x5a4cd0(0x21a)](_0x3a166b)),JSON[_0x5a4cd0(0x1ed)](_0x290b48[_0x5a4cd0(0x1fa)]),escapeTemplateSource(_0x5ba315[0x0]['compiledSource']),_0x5ba315[_0x5a4cd0(0x22c)]>0x1&&typeof _0x5ba315[0x1][_0x5a4cd0(0x23b)]==='string'?'\x27'+escapeTemplateSource(_0x5ba315[0x1][_0x5a4cd0(0x23b)])+'\x27':_0x5a4cd0(0x237));});_0x442261[_0x5ed383(0x208)](_0x7a73e8);}),Promise['all'](_0x442261)[_0x5b0829(0x1f4)](function(_0x3c586d){return _0x3c586d['join'](',');});},BrowserBundleBuilder[a0_0x1c2a3d(0x235)]['_optimize']=function(_0x4618d6){var _0x501a53=a0_0x1c2a3d,_0x50281a=UglifyJS[_0x501a53(0x20a)](_0x4618d6),_0x4d2a6b=UglifyJS[_0x501a53(0x246)]({'warnings':![]}),_0xf7f0ef=this['_injectionFinder']['find'](_0x50281a);return _0x50281a[_0x501a53(0x214)](),_0x50281a=_0x50281a[_0x501a53(0x240)](_0x4d2a6b),_0x50281a['figure_out_scope'](),_0x50281a[_0x501a53(0x216)](),_0x50281a['mangle_names']({'except':_0xf7f0ef}),_0x50281a[_0x501a53(0x250)]();};function escapeTemplateSource(_0x364c54){var _0x204ceb=a0_0x1c2a3d;return _0x364c54[_0x204ceb(0x221)](/(\\.)/g,_0x204ceb(0x1f0))['replace'](/'/g,'\x5c\x27')[_0x204ceb(0x221)](/\r/g,'\x5cr')['replace'](/\n/g,'\x5cn')['replace'](/\t/g,'\x5ct');}function remove(_0x249808){return new Promise(function(_0x1e4bc0,_0x3192f2){rimraf(_0x249808,function(_0x216db8){if(_0x216db8){_0x3192f2(_0x216db8);return;}_0x1e4bc0();});});}function createDir(_0x4f1d3b){return new Promise(function(_0x495111,_0x43eef9){mkdirp(_0x4f1d3b,function(_0x4a24f8){if(_0x4a24f8){_0x43eef9(_0x4a24f8);return;}_0x495111();});});}function copy(_0x54f1f0,_0x215092){return new Promise(function(_0x35dceb,_0x278486){ncp(_0x54f1f0,_0x215092,function(_0x3f074d){if(_0x3f074d){_0x278486(_0x3f074d);return;}_0x35dceb();});});}