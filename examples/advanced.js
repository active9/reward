var reward = require('../');

reward.add('hello', function(user) {
	return 'Hello '+ user;
});

var helloReward = reward.get('hello', function(result) {
	if (!result) {
		console.log('hello not found');
	}
	return result;
});

console.log(helloReward('Joe'));
