test("Exception; constructor",function(){var a=new nl.sara.webdav.Exception;deepEqual(a.message,null,"Exception without constructor parameters should have NULL value as message");deepEqual(a.code,null,"Exception without constructor parameters should have NULL value as code");a=new nl.sara.webdav.Exception("test message");deepEqual(a.message,"test message","Exception without code parameter should have the message set correctly");deepEqual(a.code,null,"Exception without code parameter should have NULL value as code");
a=new nl.sara.webdav.Exception("test message",3467);deepEqual(a.message,"test message","Exception with all parameters should have the message set correctly");deepEqual(a.code,3467,"Exception with all parameters should have the code set correctly")});