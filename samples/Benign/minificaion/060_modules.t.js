StartTest(function(a){a.diag("Modules");a.autoCheckGlobals=!1;a.ok(Joose.Namespace.Manager,"Joose.Namespace.Manager is here");a.ok(Joose.Namespace.Keeper,"Joose.Namespace.Keeper is here");Module("TestModule",{VERSION:.01,AUTHORITY:"auth",body:function(b){this.foo="bar";b.bar="baz";a.ok(.01==TestModule.meta.VERSION,"Correct VERSION detected");a.ok("auth"==TestModule.meta.AUTHORITY,"Correct AUTHORITY detected")}});a.ok(TestModule,"Something in the module spot appears");a.ok(TestModule.meta.constructor==
Joose.Namespace.Keeper,".. and its a Joose.Namespace.Keeper");a.is(TestModule.foo,"bar","Body of module was executed in the scope of its container");a.is(TestModule.bar,"baz","Module namespacekeeper was also passed as 1st argument to body");a.diag("Modules with several name parts");Module("Test1.Test2.Test3",{body:function(b){this.foo="bar";b.bar="baz"}});a.ok(Test1&&Test1.meta.constructor==Joose.Namespace.Keeper,"Module 'Test1' was created");a.ok(Test1.Test2&&Test1.Test2.meta.constructor==Joose.Namespace.Keeper,
"Module 'Test1.Test2' was created");a.ok(Test1.Test2.Test3&&Test1.Test2.Test3.meta.constructor==Joose.Namespace.Keeper,"Module 'Test1.Test2.Test3' was created");a.ok("bar"==Test1.Test2.Test3.foo&&"baz"==Test1.Test2.Test3.bar,"Test1.Test2.Test3 was correctly setuped");a.diag("Exceptions");a.throws_ok(function(){new TestModule},"Module [TestModule] may not be instantiated.","Not filled Modules can't be instantiated");a.throws_ok(function(){Module("Testy.meta.bla",function(){})},Joose.is_IE?"":"Module name [Testy.meta.bla] may not include a part called 'meta' or 'my' or empty part.",
"meta is not allowed in a module name");a.throws_ok(function(){Module("Testy..bla",function(){})},Joose.is_IE?"":"Module name [Testy..bla] may not include a part called 'meta' or 'my' or empty part.","meta is not allowed in a module name");a.throws_ok(function(){Module("Testy.my.bla",function(){})},Joose.is_IE?"":"Module name [Testy.my.bla] may not include a part called 'meta' or 'my' or empty part.","meta is not allowed in a module name");a.diag("Basic nesting");Module("TestModule",{body:function(){Class("Test1",
{methods:{world:function(){return"hello1"}}});Class("Test2",{methods:{world:function(){return"hello2"}}});Module("Test3",function(b){this.foo="bar";b.bar="baz"});Module(".Global.Test3",function(b){this.foo="bar3";b.bar="baz3"})}});a.ok(TestModule.Test1,"There is something in the class spot");a.ok(TestModule.Test1.meta.constructor==Joose.Meta.Class,"it is a class");a.ok("TestModule.Test1"==TestModule.Test1.meta.name,"The class name is correct");a.ok("hello1"==(new TestModule.Test1).world(),"Class was correctly instantiated");
a.ok(TestModule.Test2,"There is something in the class#2 spot");a.ok(TestModule.Test2.meta.constructor==Joose.Meta.Class,"it is a class");a.ok("TestModule.Test2"==TestModule.Test2.meta.name,"The class name is correct");a.ok("hello2"==(new TestModule.Test2).world(),"Class was correctly instantiated");a.ok(TestModule.Test3,"Something in the nested module spot appears");a.ok(TestModule.Test3.meta.constructor==Joose.Namespace.Keeper,".. and its a Joose.Namespace.Keeper");a.ok("bar"==TestModule.Test3.foo&&
"baz"==TestModule.Test3.bar,"TestModule.Test3 was correctly setuped");a.ok(Global.Test3,"Something in the nested module spot appears");a.ok(Global.Test3.meta.constructor==Joose.Namespace.Keeper,".. and its a Joose.Namespace.Keeper");a.ok("bar3"==Global.Test3.foo&&"baz3"==Global.Test3.bar,"Global.Test3 was correctly setuped");a.diag("Modules redeclaration");a.ok("bar"==TestModule.foo&&"baz"==TestModule.bar,"TestModule is still the same after extension");Module("TestModule.Test3",{body:function(){Module("Test4")}});
a.ok(TestModule.Test3.Test4,"Something in the nested module spot appears");a.ok(TestModule.Test3.Test4.meta.constructor==Joose.Namespace.Keeper,".. and its a Joose.Namespace.Keeper");a.ok("bar"==TestModule.Test3.foo&&"baz"==TestModule.Test3.bar,"TestModule.Test3 hasn't changed");a.diag("Promotion of Module to Class");Class("TestModule.Test3",{have:{one:1},methods:{two:function(){return 2}}});a.ok(TestModule.Test3.meta.constructor==Joose.Meta.Class,"Module was promoted to class");var c=new TestModule.Test3;
a.ok(1==c.one&&2==c.two(),"Class was constructed correctly");a.ok("bar"==TestModule.Test3.foo&&"baz"==TestModule.Test3.bar,"and TestModule.Test3 function itself hasn't changed");a.diag("Class usage in Module context");Class("TestModule.Test3.FooBar",{have:{one:1},methods:{two:function(){return 2}}});a.ok(TestModule.Test3.FooBar,"We can use a class as Module");a.ok(TestModule.Test3.FooBar.meta.constructor==Joose.Meta.Class,"it is a class");c=new TestModule.Test3.FooBar;a.ok(1==c.one&&2==c.two(),"Class was constructed correctly");
a.diag("More basic nesting");Module("Testy",function(){Module("Nested",function(){Class("Testing",{methods:{three:function(){return 3}}})});Module("Nested.Copy",function(){Class("Testing",{methods:{four:function(){return 4}}})})});a.ok(Testy&&Testy.meta.constructor==Joose.Namespace.Keeper,"Module 'Testy' was created");a.ok(Testy.Nested&&Testy.Nested.meta.constructor==Joose.Namespace.Keeper,"Module 'Testy.Nested' was created");a.ok(Testy.Nested.Copy&&Testy.Nested.Copy.meta.constructor==Joose.Namespace.Keeper,
"Module 'Testy.Nested.Copy' was created");a.ok(Testy.Nested.Testing&&Testy.Nested.Testing.meta.constructor==Joose.Meta.Class,"Class 'Testy.Nested.Testing' was created");a.ok(Testy.Nested.Copy.Testing&&Testy.Nested.Copy.Testing.meta.constructor==Joose.Meta.Class,"Class 'Testy.Nested.Copy.Testing' was created");a.ok(3==(new Testy.Nested.Testing).three(),"Class 'Testy.Nested.Testing' was constructed correctly");a.ok(4==(new Testy.Nested.Copy.Testing).four(),"Class 'Testy.Nested.Copy.Testing' was constructed correctly");
a.diag("Advanced nesting modules");Module("Level1.Level2",{body:function(){a.ok(Level1.Level2&&Level1.Level2.meta.constructor==Joose.Namespace.Keeper,"Level1.Level2 spot filled correctly");Module("Level3_1",{body:function(){Class("Level4",{methods:{three:function(){return 3}}});a.ok(Level1.Level2.Level3_1.Level4&&Level1.Level2.Level3_1.Level4.meta.constructor==Joose.Meta.Class,"Level1.Level2.Level3_1.Level4 spot filled correctly");a.ok(3==(new Level1.Level2.Level3_1.Level4).three(),"Level1.Level2.Level3_1.Level4 class constructed correctly")}});
a.ok(Level1.Level2.Level3_1&&Level1.Level2.Level3_1.meta.constructor==Joose.Namespace.Keeper,"Level1.Level2.Level3_1 spot filled correctly");Module("Level3_2",{body:function(){Class("Level4",{methods:{four:function(){return 4}}});a.ok(Level1.Level2.Level3_2.Level4&&Level1.Level2.Level3_2.Level4.meta.constructor==Joose.Meta.Class,"Level1.Level2.Level3_2.Level4 spot filled correctly");a.ok(4==(new Level1.Level2.Level3_2.Level4).four(),"Level1.Level2.Level3_2.Level4 class constructed correctly");Class(".Glob.Level44",
{methods:{four:function(){return 44}}});a.ok(Glob.Level44&&Glob.Level44.meta.constructor==Joose.Meta.Class,"Glob.Level44 spot filled correctly")}});a.ok(Level1.Level2.Level3_2&&Level1.Level2.Level3_2.meta.constructor==Joose.Namespace.Keeper,"Level1.Level2.Level3_2 spot filled correctly")}});a.diag("Class is already constructed in 'body' execution");Class("TestClass",{methods:{four:function(){return 4}},body:function(){a.ok(TestClass&&TestClass.meta.constructor==Joose.Meta.Class,"TestClass spot filled correctly");
a.ok(!TestClass.meta.stem.opened,"TestClass's stem is closed");a.ok(4==(new TestClass).four(),"TestClass class is already constructed")}});a.done()});