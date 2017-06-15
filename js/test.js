/**
 * Created by Administrator on 2017/6/15 0015.
 */
(function (win) {

    var xuan = {
        version: "1.0"
    };
    win.xuan = xuan;
    xuan.setup = function () {

        xuan.db.init();
        //xuan.db.insertUser();
        xuan.db.getUsers();
    };
    xuan.db = {
        visitXuan: null,
        init: function () {
            //Bmob.initialize("Application ID", "REST API Key");
            Bmob.initialize("1d91703c1fd1d99e97b96d85e291dbe4", "0215f24a916bc9894e5f009a05c1b2a2");
            xuan.db.VisitXuan = Bmob.Object.extend("visitXuan");
        },
        insertUser: function () {
            var _name = $("#name").val();
            var _msg = $("#msg").val();
            if(_name=="" & _msg==""){
                alert('请留下“名字”和“祝福哦”');
                return;
            }

            var testObject = new xuan.db.VisitXuan();
            testObject.save({name: _name, msg: _msg}, {
                success: function (object) {
                    alert("【"+object.get('name')+"】祝福已送@");
                    window.location.href="https://lovelemoncat.github.io/lemoncat/";
                },
                error: function (model, error) {

                }
            });
        },
        getUsers: function () {

            var query = new Bmob.Query(xuan.db.VisitXuan);
            // 查询所有数据
            query.find({
                success: function (results) {
                    //alert("共查询到 " + results.length + " 条记录");
                    // 循环处理查询到的数据
                    for (var i = 0; i < results.length; i++) {
                        var object = results[i];

                            var temp ='<div>【<span id="list-name">'+object.get('name')+'</span>】' +
                                '<span id="list-msg">'+object.get('msg')+'</span></div>';
                        $('#list').append(temp);
                    }
                },
                error: function (error) {
                    alert("查询失败: " + error.code + " " + error.message);
                }
            });
        }
    }


})(window);