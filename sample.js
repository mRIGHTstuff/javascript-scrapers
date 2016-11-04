var casper = require('casper').create();
casper.options.viewportSize = {width: 1600, height: 950};
casper.start('https://identity.linuxfoundation.org/user?destination=cas/login%3Fservice%3Dhttps%253A//training.linuxfoundation.org/cas%253Fdestination%253Dportal', function(){
	this.fill('form#user-login', { 
		name: 'yourlogin',
		pass: 'yourpass' 
	}, true);
});

casper.then(function() {
	this.click('#edit-submit');
});

casper.thenOpen('https://identity.linuxfoundation.org/cas/login?service=https%3A%2F%2Fapi.360training.com%2FLS360ProxyAPIWeb%2Frestful%2Fsso%2Fcas%2Flf', function() {
	this.click('.btn_normal');
});

casper.then(function() {
	this.capture('linux.png');
});

casper.run();