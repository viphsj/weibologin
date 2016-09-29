# weibologin


# install
```
	npm install weibologin

``` 

# use
```
var WeiboLogin=require('weibologin');

var account ={
    "email": "username_or_phone",
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
        // you can save loginInfo to a file, and next file parse from file and setAccount, then it could reuse the cookie.
        // reference to test/test.js
	}
	// var request = weibo.getRequest();
	// request.get|post(url_you_like,option,callback) => https://github.com/yizhiren/poorequest
	// this request contain cookie of current user
});

```
