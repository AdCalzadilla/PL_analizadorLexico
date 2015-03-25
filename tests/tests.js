var assert = chai.assert;

suite('AnalisisLexico', function() {
	test('Funcionamiento del parser', function() {
    var ent = "var hola = \"Saludo\";";
    var wait = '[{"type":"name","value":"var","from":0,"to":3},{"type":"name","value":"hola","from":4,"to":8},{"type":"operator","value":"=","from":9,"to":10},{"type":"string","value":"Saludo","from":11,"to":19},{"type":"operator","value":";","from":19,"to":20}]';
    var exit = JSON.stringify(ent.tokens());
    assert.deepEqual(exit, wait);
	});

});
