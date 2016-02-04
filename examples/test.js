var reward = require('../');

reward.add('welcome', function() {
	return 'Hello World';
});

reward.get('welcome', function(result) {
	if (!result) {
		console.log('welcome not found');
	}
	console.log('welcome:', result());
});

reward.remove('welcome', function() {
	console.log('Removed welcome reward');
});

reward.get('welcome', function(result) {
	if (!result) {
		console.log('welcome not found');
	}
});

reward.add('goodbye', function() {
	return 'Bye!';
});

reward.list(function(rewards) {
	console.log('Rewards:', rewards);
});