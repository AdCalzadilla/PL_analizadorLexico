var assert = chai.assert;

suite('Aanalizador_Lexico_JS', function() {
	test('Funcionamiento funcion tokens', function() {
	      var entrada = "var aux = \"prueba\";";
	      var seEspera = '[{"type":"name","value":"var","from":0,"to":3},{"type":"name","value":"aux","from":4,"to":7},{"type":"operator","value":"=","from":8,"to":9},{"type":"string","value":"prueba","from":10,"to":18},{"type":"operator","value":";","from":18,"to":19}]';
	      var salida = JSON.stringify(entrada.tokens());
	      assert.deepEqual(salida, seEspera);

	});


});
