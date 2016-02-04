var rewards = [];
module.exports = {
	get: function (name,cb) {
		return cb(rewards[name]);
	},

	add: function (name,cb) {
		return rewards[name] = cb;
	},

	remove: function (name,cb) {
		return cb(delete rewards[name]);
	},

	list: function(cb) {
		return cb(rewards);
	},

	rewards: rewards
}