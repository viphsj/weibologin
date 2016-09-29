var WeiboLogin=require('../weiboLib/login');
var path=require('path');
var fs=require('fs');
var assert=require('assert');


var account = fs.readFileSync('./weibo.json');
account = JSON.parse(account);
console.log(account);

var weibo=new WeiboLogin();
weibo.setAccount(account);
weibo.onekeyLogin(function(err,loginInfo){
	if(err){
		console.log('login fail:',err.message);
	}else{
		console.log('isLogin:',loginInfo.logined);
		console.log('userinfo:',loginInfo.userinfo);
    // next time ,you could parse this file and directly setAccount to weibologin, and it will check if cookie is still
    // available
    fs.writeFileSync('reuse_cookie.json',JSON.stringify(loginInfo,null,4))
	}
	//var request = weibo.getRequest();
	// request.get|post(url_you_like,option,callback)
	// this request contain cookie of current user
});



