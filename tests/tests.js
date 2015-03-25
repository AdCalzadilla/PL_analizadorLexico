var assert = chai.assert;

suite('AnalisisLexico', function() {
	test('Funcionamiento analizador lexico.', function() {
    var ent = "var hola = \"Saludo\";";
    var wait = '[{"type":"name","value":"var","from":0,"to":3},{"type":"name","value":"hola","from":4,"to":8},{"type":"operator","value":"=","from":9,"to":10},{"type":"string","value":"Saludo","from":11,"to":19},{"type":"operator","value":";","from":19,"to":20}]';
    var exit = JSON.stringify(ent.tokens());
    assert.deepEqual(exit, wait);
	});

	test('Funcionamiento del analizador lexico usando una operacion aritmetica.', function() {
			var entrada = "var suma = 4+5;";
			var seEspera = '[{"type":"name","value":"var","from":0,"to":3},{"type":"name","value":"suma","from":4,"to":8},{"type":"operator","value":"=","from":9,"to":10},{"type":"number","value":4,"from":11,"to":12},{"type":"operator","value":"+","from":12,"to":13},{"type":"number","value":5,"from":13,"to":14},{"type":"operator","value":";","from":14,"to":15}]';
			var salida = JSON.stringify(entrada.tokens());
			assert.deepEqual(salida, seEspera);
	});

	test('Funcionamiento funcion parser', function() {
			var parse = make_parse();
			var ent = "var hola = \"Saludo\";";
			var wait = '{\n    "value": "=",\n    "arity": "binary",\n    "first": {\n        "value": "hola",\n        "arity": "name"\n    },\n    "second": {\n        "value": "Saludo",\n        "arity": "literal"\n    }\n}';
			var exit, tree;
			try {
		tree = parse(ent);
		exit = JSON.stringify(tree, ['key', 'name', 'message',
				'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
			} catch (e) {
		salida = JSON.stringify(e, ['name', 'message', 'from', 'to', 'key',
					'value', 'arity', 'first', 'second', 'third', 'fourth'], 4);
			}
			assert.deepEqual(exit, wait);

	});

});
