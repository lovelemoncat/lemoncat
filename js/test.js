/**
 * Created by Administrator on 2017/6/15 0015.
 */
(function (win) {
    //Bmob.initialize("Application ID", "REST API Key");
    Bmob.initialize("1d91703c1fd1d99e97b96d85e291dbe4", "0215f24a916bc9894e5f009a05c1b2a2");

    var TestObject = Bmob.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}, {
        success: function(object) {
            $(".success").show();
        },
        error: function(model, error) {
            $(".error").show();
        }
    });

})(window);