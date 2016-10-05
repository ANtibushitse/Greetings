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
// etape deux je créer un objet 
/*var obj = { propriété_1:   valeur_1,   // propriété_# peut être un identifiant
            2:             valeur_2,   // ou un nombre
            // ...,
            "propriété n": valeur_n }; // ou une chaîne*/
var foo = {
	prenom: $("#first_name").val()
	, nom: $("#last_name").val()
	, ville: $("#city").val()
, };
console.log(foo);
// Etape trois cconcaténer firstname+ last name. 
$("#username").text(foo.prenom + foo.nom);
// THE END .
//"Doo or doo Not ther is no try" un petit être vert.
//"Doo or doo Not ther is no try" un petit être vert.
//"Doo or doo Not ther is no try" un petit être vert.