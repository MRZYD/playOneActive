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

//提交表单
function formBtn(index) {
    if(index == 1){
        formType = 'Top';  //最上面 
    }else if(index == 2){
        formType = 'Bottom'; //最下面
    }else{
        formType = 'Popup'; //弹窗
    }
    console.log(userName, userTel, formType);
    $(".formName").val('');
    $(".formTel").val('');
    // addApply(document.applyForm);
}

function addApply() {
    Requset({
        data: checkVal({
            mobile: '#mobile',
            userName: '#userName'
        }),
        method: 'post',
        success: function (res) {
            alert("提交成功！");
            $("#mobile,#userName").val("");
            console.log('000');
        },
        fail: function (err) {
            alert("提交成功！");
            $("#mobile,#userName").val("");
            console.log('111');
        }
    })

}