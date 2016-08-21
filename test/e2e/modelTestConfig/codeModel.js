var CodeField = require('../fieldTestObjects/codeField');
var TextField = require('../fieldTestObjects/textField');

module.exports = function CodeList(config) {
	return {
		name: new TextField({fieldName: 'name'}),
		fieldA: new CodeField({fieldName: 'fieldA'}),
		fieldB: new CodeField({fieldName: 'fieldB'}),
	};
};
