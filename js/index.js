// 关闭弹窗
function closePopup() {
    $(".popupBg").hide();
}

// 打开弹窗
function openPopup() {
    $(".popupBg").show();
}

var userName = '';  //用户名
var userTel = '';  //电话号码
var formType = '';  //提交信息位置
var requirement = '';  //其他信息

function namePopupOnclick(e){
    userName = e;
}

function telPopupOnclick(e) {
    userTel = e;
    $(".formMustPopup").hide();
    if (userTel == '') {
        $(".formMustPopup").show();
    }
}

$(".thr-edu-type span").click(function (event) {
    $(this).addClass("hover").siblings().removeClass("hover");
})

//提交表单
function formBtn(index) {
    if(index == 1){
        formType = '页面顶部';  //最上面 
    }else if(index == 2){
        formType = '页面底部'; //最下面
    }else{
        formType = '页面弹窗'; //弹窗
    }

    if(userName=="" || userName=="您的姓名"){
        alert("请输入姓名!");
        if(index == 1){
            $("#userName1").focus();
        }else if(index == 2){
            $("#userName2").focus();
        }else{
            $("#userName3").focus();
        }
        return;
    }

    var pattern = /^1{1}[0-9]{10}$/;
    if(userTel=="" || userTel=="您的电话"){
        alert("请输入手机号!");
        if(index == 1){
            $("#userTel1").focus();
        }else if(index == 2){
            $("#userTel2").focus();
        }else{
            $("#userTel3").focus();
        }
        return;
    } else {
        if (!pattern.test(userTel)) {
            alert("请输入正确的手机号！");
            if(index == 1){
                $("#userTel1").focus();
            }else if(index == 2){
                $("#userTel2").focus();
            }else{
                $("#userTel3").focus();
            }
            return;
        }
    }	
    var eduType = '';
    $(".thr-edu-type span").each(function () {
        if ($(this).hasClass('hover')) {
            eduType = $(this).text();
        }
    });	
    if (index == 1 && !eduType) {
        alert("请选择培训类型！");
        return;
    }
    requirement = formType + ((index !== 1 || !eduType) ? '' : (',' + eduType))     
    addApply(index);
}

function addApply(index){
    $.ajax({
        url : "https://admin.96koo.net/moma/saveOpportunity",
        data : {
            compellation:userName,
            phone:userTel,
            referer: window.location.href,
            industry: requirement
        },
        type : "post",
        dataType : "json",
        cache : false,
        async : false,
        success : function(res) {
            if(res.msg == 'OK') {
                alert("提交信息成功");
                $(".formTel,.formName").val("");
                $(".thr-edu-type span").each(function (event) {$(this).removeClass("hover");})
                userName = '';
                userTel = '';
                requirement = '';
            }
        },
        error : function(error) {
            console.log("服务出现问题，请稍后再试！")
        }
    });
}

		