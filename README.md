# weibologin


# install
```
	npm install weibologin

``` 

# use
```
var WeiboLogin=require('weibologin');
var path=require('path');
var fs=require('fs');
var assert=require('assert');


var account = fs.readFileSync('./weibo.json');
account = JSON.parse(account);
/**
{
    "email": "username",
    "passwd": "password"
}
**/

var weibo=new WeiboLogin();
weibo.setAccount(account);
weibo.onekeyLogin(function(err,loginInfo){
	if(err){
		console.log(err);
	}else{
		console.log('isLogin:',loginInfo.logined);
		console.log('userinfo:',loginInfo.userinfo);
	}
	// var request = weibo.getRequest();
	// request.get|post(url_you_like,option,callback)
	// this request contain cookie of current user
});

```

# debug 信息
```
windows:
set DEBUG=weibologin
node yourapp.js

linux:
export DEBUG=weibologin 
node youapp.js
```
