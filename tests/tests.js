var assert = chai.assert;

suite('AnalisisLexico', function() {
	test('Funcionamiento del parser', function() {
    var ent = "var hola = \"Saludo\";";
    var wait = {
    "value": "=",
    "arity": "binary",
    "first": {
        "value": "hola",
        "arity": "name"
    },
    "second": {
        "value": "Saludo",
        "arity": "literal"
    }
}

    var exit = JSON.stringify(ent.tokens());
    assert.deepEqual(exit, wait);

});
