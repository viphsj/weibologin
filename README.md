# weibologin


# install
```
	npm install weibologin

``` 

# use
```
var WeiboLogin=require('weibologin');


var account = {
    "email": "email_or_phone",
    "passwd": "password"
}


var weibo=new WeiboLogin();
weibo.setAccount(account);
weibo.onekeyLogin(function(err,loginInfo){
	if(err){
		console.log(err);
	}else{
		console.log('isLogin:',loginInfo.logined);
		console.log('userinfo:',loginInfo.userinfo);
		// you can save loginInfo to a file, next time you can parse the file and setAccount, then you can reuse the cookie.
		// reference to test/test.js
	}
	// var request = weibo.getRequest();
	// request.get|post(url_you_like,option,callback);  // => https://github.com/yizhiren/poorequest
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

