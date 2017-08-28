/*document.getElementById("submessage").onclick = function () {
    var username = $("#contact_name").val();
    var email = $("#contact_email").val();
    var tel = $("#contact_tel").val();
    var subject = $("#contact_subject").val();
    var message = $("#contact_message").val();
    var data="username="+username+"&email="+email+"&tel="+tel+"&subject="+subject+"&message="+message;
    console.log("username=" +username);
    $.ajax({
        type: "POST",
        url: "/guest/addGeust",
        data: data,
        success: function(msg){

        }
    });
}*/


$(document).ready(function () {
	$("#guestform").bootstrapValidator({
        message:"表单校验",
        feedbackIcons:{
        	valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
		},
        fields:{
            username:{
                message: '用户名校验。',
                validators:{
                    notEmpty:{
                        message: '用户名必须填写。'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: '用户名长度大于6且小于30个字符。'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户可以由字母、数字、下划线组成。'
                    }
                }
			},
            email:{
            	message:'邮箱校验',
                validators:{
            		notEmpty:{
                        message: '用户名必须填写。'
                    },
                    emailAddress:{
            			message:'输入的不是一个有效的邮箱。'
					}
				}
			},
            tel:{
                message:'电话校验',
                validators:{
                    notEmpty:{
                        message: '用户名必须填写。'
                    },
                    phone:{
                    	message:'输入的不是一个有效的电话。',
                        country:'CN'
					}
				}
			},
            subject:{
            	message:'标题校验',
                validators:{
            		notEmpty:{
            			message:'主题必须填写。'
					},
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: '主题长度大于6且小于30个字符。'
                    },
				}
			},
            message:{
                message:'内容校验',
                validators:{
                    notEmpty:{
                        message:'内容必须填写。'
                    },
                    stringLength: {
                        min: 10,
                        max: 300,
                        message: '内容长度大于50且小于300个字符。'
                    },
                }
            }
		}
	}).on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        $.post($form.attr('action'), $form.serialize(), function(result) {
            console.log(result);
        }, 'json');
    });
});
/*var form = $('#guestform');
$("#submessage").click(function () {
    var bv = form.data("bootstrapValidator");
    alert(bv.isValid());
    if (bv.isValid()){
        var username = $("#contact_name").val();
        var email = $("#contact_email").val();
        var tel = $("#contact_tel").val();
        var subject = $("#contact_subject").val();
        var message = $("#contact_message").val();
        var data="username="+username+"&email="+email+"&tel="+tel+"&subject="+subject+"&message="+message;
        console.log("username=" +username);
        alert("sss11");
        $.ajax({
            type: "POST",
            url: "/guest/addGeust",
            data: data,
            success: function(msg){

            }
        });
    }
})*/
