#Reward
![Reward System](https://raw.githubusercontent.com/active9/reward/master/reward.png)

Reward is a simple reward system written in NodeJS.

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/reward
cd reward*
npm install
```

Using NPM:
```bash
npm install reward
```

#MODULE
Above may run included as a module in your projects.
```js
var reward = require('reward');

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

```

#EXAMPLES
More examples in the [examples](https://github.com/active9/reward/tree/master/examples) folder on the github repo.

~Enjoy!

#CONTRIB

Reward is open-source via the MIT license we encourage Forking.

#LICENSE
MIT



