console.log('have fun!');
// etape 1
var inputs = $("input");
console.log(inputs);
var firstname = $(inputs[0]).val();
console.log(firstname);
var lastname = $(inputs[1]).val();
console.log(lastname);
var city = $(inputs[2]).val();
console.log(city);

var foo = {
	prenom: $("#first_name").val()
	, nom: $("#last_name").val()
	, ville: $("#city").val()
, };
console.log(foo);


$("#username").text(foo.prenom + foo.nom);
