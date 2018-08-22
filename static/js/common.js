//成功
const SUCCESS_CODE = 200;
//服务器错误
const SERVER_ERROR_CODE = 500;
//没有权限
const NO_PERMISSION_CODE = 300;
//用户信息认证未通过
const NO_USER_CODE = 400;
//服务器地址
const SERVER_ADDRESS = "http://127.0.0.1";
const VIEW_ADDRESS = SERVER_ADDRESS + "/static/view";
const BASE_ADDRESS = SERVER_ADDRESS + "/static";

/**
 * @url 请求接口url
 * @obj 请求参数对象
 * @success 成功的回调函数
 * @error 失败的回调函数
 * @sync 是否同步
 */
function $ajaxPost(url, obj, success, error, sync){
	$.ajaxSettings.async = sync;
// 	$.ajax({
// 		url: url,
// 		async: sync,//这一步是非常重要的，作用是设置为同步执行
// 		type: "POST",
// 		data: obj,
// 		dataType: "json",
// 		success: function (resp) {
// 			console.log(resp)
// 			//成功
// 			if(resp.code === SUCCESS_CODE){
// 				success(resp)
// 			} 
// 			//服务器错误
// 			else if(resp.code === SERVER_ERROR_CODE){
// 				success(resp)
// 			}
// 			//没有权限错误
// 			else if(resp.code === NO_PERMISSION_CODE){
// 				location.href=VIEW_ADDRESS+"no-permission.html";
// 			}
// 			//用户信息认证失败
// 			else if(resp.code === NO_USER_CODE){
// 				location.href=VIEW_ADDRESS+"no-user.html";
// 			}
// 		},
// 		error: function(resp){
// 			error(resp)
// 			console.log(resp)
// 		}
// 	})
	
	$.post(url, obj, function(resp){
		console.log(resp)
		//成功
		if(resp.code === SUCCESS_CODE){
			success(resp)
		} 
		//服务器错误
		else if(resp.code === SERVER_ERROR_CODE){
			success(resp)
		}
		//没有权限错误
		else if(resp.code === NO_PERMISSION_CODE){
			location.href=BASE_ADDRESS+"/no-permission.html";
		}
		//用户信息认证失败
		else if(resp.code === NO_USER_CODE){
			location.href=BASE_ADDRESS+"/index.html";
		}
	},"json");
	$.ajaxSettings.async = true;
}