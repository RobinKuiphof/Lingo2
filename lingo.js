var words = [
	"appel",
	"aldus",
	"afwas",
	"aftel",
	"aarde",
	"armen",
	"actie",
	"apart",
	"adres",
	"avond",
	"aders",
	"alarm",
	"boten",
	"balen",
	"beter",
	"bomen",
	"boren",
	"boven",
	"boxen",
	"brood",
	"broek",
	"brand",
	"breed",
	"benen",
	"beeld",
	"brief",
	"beten",
	"basis",
	"blauw",
	"beren",
	"buren",
	"banen",
	"bloed",
	"broer",
	"blond",
	"boter",
	"beleg",
	"breng",
	"baken",
	"beker",
	"blind",
	"bezig",
	"baden",
	"bedel",
	"bazen",
	"bazin",
	"baren",
	"beden",
	"beken",
	"bezem",
	"baard",
	"bidet",
	"breuk",
	"conus",
	"cello",
	"creme",
	"cloud",
	"cacao",
	"cadet",
	"cavia",
	"ceder",
	"combi",
	"china",
	"clown",
	"draai",
	"deden",
	"dalen",
	"derde",
	"delen",
	"dwaas",
	"daden",
	"dader",
	"dames",
	"diner",
	"datum",
	"dozen",
	"dreun",
	"duits",
	"dagen",
	"deren",
	"dwerg",
	"dwaal",
	"dwing",
	"druil",
	"droog",
	"draad",
	"dweil",
	"drank",
	"duren",
	"dwars",
	"drugs",
	"daten",
	"daler",
	"doorn",
	"disco",
	"degen",
	"droom",
	"dient",
	"drone",
	"dadel",
	"duwen",
	"druif",
	"deken",
	"deler",
	"elven",
	"eigen",
	"enger",
	"engel",
	"elder",
	"enkel",
	"effen",
	"email",
	"egaal",
	"fiets",
	"friet",
	"files",
	"forel",
	"films",
	"feest",
	"fruit",
	"falen",
	"flora",
	"fauna",
	"feeen",
	"freak",
	"forum",
	"fusie",
	"geven",
	"gaven",
	"groen",
	"graai",
	"getal",
	"grens",
	"grond",
	"groef",
	"graal",
	"gewei",
	"games",
	"grote",
	"groet",
	"garen",
	"gebak",
	"graag",
	"genre",
	"glans",
	"geluk",
	"geeuw",
	"horen",
	"heren",
	"halen",
	"hagel",
	"haren",
	"helen",
	"harde",
	"hemel",
	"hoofd",
	"huren",
	"hamer",
	"haken",
	"heden",
	"hotel",
	"hobby",
	"heler",
	"hoger",
	"ieder",
	"index",
	"immer",
	"icoon",
	"inlog",
	"inzet",
	"innig",
	"jovel",
	"jaren",
	"jicht",
	"jabot",
	"jacht",
	"jaden",
	"jagen",
	"jager",
	"japon",
	"jarig",
	"jawel",
	"jeans",
	"jemig",
	"jeugd",
	"joint",
	"jonas",
	"joule",
	"koken",
	"kreet",
	"koker",
	"kerst",
	"kegel",
	"koude",
	"kader",
	"krent",
	"kamer",
	"kaars",
	"kaart",
	"kraan",
	"krant",
	"keren",
	"kruid",
	"kerel",
	"kubus",
	"kraal",
	"kleur",
	"kroon",
	"klein",
	"korst",
	"klopt",
	"kabel",
	"kunst",
	"kopje",
	"krans",
	"klimt",
	"kater",
	"klink",
	"kudde",
	"kruis",
	"lopen",
	"laten",
	"lepel",
	"links",
	"laden",
	"leven",
	"lezen",
	"lucht",
	"lenen",
	"laser",
	"lente",
	"licht",
	"lader",
	"leder",
	"lunch",
	"lijst",
	"leger",
	"leden",
	"legen",
	"lagen",
	"lezer",
	"lever",
	"lingo",
	"loper",
	"luier",
	"lager",
	"leeuw",
	"maand",
	"malen",
	"maken",
	"media",
	"meter",
	"motor",
	"maten",
	"markt",
	"mazen",
	"molen",
	"meest",
	"meren",
	"model",
	"meden",
	"maden",
	"macht",
	"meeuw",
	"mager",
	"magen",
	"maren",
	"manen",
	"noord",
	"nieuw",
	"negen",
	"namen",
	"neven",
	"nodig",
	"naden",
	"neder",
	"nemen",
	"onder",
	"optel",
	"ovaal",
	"ovale",
	"onwel",
	"optie",
	"orden",
	"oppas",
	"ouder",
	"ophef",
	"oases",
	"palen",
	"plein",
	"pegel",
	"paars",
	"prijs",
	"piano",
	"pixel",
	"paden",
	"pasta",
	"pizza",
	"poten",
	"paard",
	"puber",
	"pauze",
	"preek",
	"polis",
	"pater",
	"proef",
	"panda",
	"penis",
	"prins",
	"pluto",
	"polen",
	"plint",
	"quota",
	"quant",
	"quark",
	"queue",
	"quilt",
	"quote",
	"robot",
	"reken",
	"raden",
	"regen",
	"radio",
	"rente",
	"regio",
	"rugby",
	"reden",
	"roken",
	"ruzie",
	"ruist",
	"regel",
	"racen",
	"races",
	"riool",
	"ramen",
	"radar",
	"roman",
	"rokje",
	"razen",
	"roede",
	"staan",
	"staal",
	"speel",
	"steeg",
	"stoel",
	"stook",
	"steek",
	"schep",
	"spijs",
	"stoep",
	"shirt",
	"samen",
	"sites",
	"sport",
	"spalk",
	"sjaal",
	"storm",
	"staat",
	"steun",
	"strak",
	"serie",
	"shows",
	"schat",
	"snoep",
	"sfeer",
	"smeer",
	"speer",
	"scene",
	"speld",
	"smeed",
	"smaak",
	"super",
	"stand",
	"steer",
	"smelt",
	"sedan",
	"skier",
	"sluis",
	"sneer",
	"steel",
	"truck",
	"terug",
	"typen",
	"talen",
	"taboe",
	"tegel",
	"taart",
	"tafel",
	"trouw",
	"teken",
	"teren",
	"taken",
	"treur",
	"tenen",
	"titel",
	"thuis",
	"tiara",
	"teder",
	"toets",
	"tabak",
	"trein",
	"tarwe",
	"telen",
	"teler",
	"uiten",
	"uilig",
	"uitje",
	"uiver",
	"ultra",
	"uniek",
	"uppie",
	"uraan",
	"uiers",
	"velen",
	"vloer",
	"video",
	"varen",
	"vegen",
	"veren",
	"vader",
	"vaten",
	"vuren",
	"vrouw",
	"vlees",
	"vogel",
	"vroeg",
	"vezel",
	"veins",
	"vorst",
	"veder",
	"vanaf",
	"vieze",
	"veger",
	"villa",
	"veler",
	"vrede",
	"vries",
	"woord",
	"wagen",
	"wonen",
	"waren",
	"warme",
	"weten",
	"water",
	"weren",
	"wazig",
	"wegen",
	"weven",
	"wezen",
	"weken",
	"wraak",
	"wilde",
	"wreed",
	"wrede",
	"wenst",
	"woest",
	"xenon",
	"yacht",
	"yucca",
	"zwaar",
	"zware",
	"zesde",
	"zagen",
	"zalig",
	"zomer",
	"zeden",
	"zwart",
	"zeven",
	"zicht",
	"zadel",
	"zweet",
	"zenuw",
	"zweer",
	"zweef",
	"zaden",
	"zaken",
	"zeker",
	"zever",
	"zeeen"];
var random = Math.random()*479;
var randomround =Math.round(random)
var randomword = words[randomround]
var splitrandomword = randomword.split("")
console.log(randomword)
document.body.style.backgroundColor = "grey";
var container = document.getElementById("container");
var label1 = document.createElement("label")
container.appendChild(label1)
container.style.width = "600px";
container.style.height = "300px";
container.style.backgroundColor = "yellow";
container.style.margin =  "15px auto";
label1.style.marginLeft = "198px";
label1.style.lineHeight = "100px";

var node1 = document.createTextNode("Word");
label1.appendChild(node1);
var input = document.createElement("input");
container.appendChild(input);
input.type = "text";
input.id = "label1";
input.name = "Word";
var input3 = document.createElement("input");
container.appendChild(input3);
input3.id = "button"; 
input3.style.dispay = "block";
input3.style.marginLeft = "275px";
input3.style.marginTop = "30px";
input3.type = "submit";
input3.value = "Submit";

var div = document.createElement("div");
container.appendChild(div);
div.style.marginTop = "50px";
div.style.backgroundColor = "white";
div.style.height = "270px";






for(i=1; i<6; i++){
	var div2 = document.createElement("div");
	div.appendChild(div2);
	div2.style.marginLeft = "180px";
	div2.id = "divje" + i;
}
var aantal = 0
var trys = 0
var aantall = 0
for(x=0; x<5; x++){
	for(i=0; i<5; i++){
		if(i == 0){
			aantal++
			var p = document.createElement("p");
			var node4 = document.createTextNode(splitrandomword[0]);
			p.appendChild(node4)
		}
		var p = document.createElement("p");
		p.style.display = "inline-block";
		p.style.padding = "6px 12px 12px 12px";
		p.style.height = "13px";
		p.style.width = "7px";
		p.style.border = "1px solid black";
		p.style.marginLeft = "10px";
		var div3 = document.getElementById("divje" + aantal);
		div3.appendChild(p);
		p.innerHTML = "-"
		p.id = "p" + aantall;
		var pid2 = document.getElementById("p" + aantall);
		if(aantall == 0 || aantall == 5 || aantall == 10 || aantall == 15 || aantall == 20){
			p.innerHTML = ""
			var pid = document.getElementById("p" + aantall);
			pid.appendChild(node4);
			pid.style.backgroundColor = "green"
		}
		aantall++
	}
}
var getal1 = 0
var nummer = 0
var geraden = [] 
button.onclick = function(){



	trys++
	for(i=1; i<5; i++){
		nummer++
		var pid = document.getElementById("p" + nummer)
		pid.innerHTML = ""
		var value = document.getElementById("label1");
		var value1 = value.value;
		var splitvalue1 = value1.split("");
		if(splitvalue1[i] == undefined){
			var node3 = document.createTextNode(geraden[i]);
		}
		else{
			var node3 = document.createTextNode(splitvalue1[i]);
		}
		
		pid.appendChild(node3); 
	}



	for(i=0; i<5; i++){
		for(x=0; x<5; x++){
			if(splitrandomword[i] == " "){
				var partmatchp = document.getElementById("p" + getal1)
				partmatchp.style.backgroundColor = "green";
				partmatchp.style.borderRadius = "0px";
			}
			if(splitvalue1[i] == splitrandomword[i]){	
				var partmatchp = document.getElementById("p" + getal1);
				partmatchp.style.backgroundColor = "green";
				partmatchp.style.borderRadius = "0px";
				geraden[i] = splitvalue1[i]
				splitrandomword[i] = " "
			}
		}
		getal1++
	}
	for(i=0; i<5; i++){
		if(splitvalue1[i] == splitrandomword[x] ){
			var partmatchp = document.getElementById("p" + getal1);
			partmatchp.style.backgroundColor = "yellow";
			partmatchp.style.borderRadius = "25px";
		}
	}
	if(splitvalue1[0] == geraden[0] && splitvalue1[1] == geraden[1] && splitvalue1[2] == geraden[2] && splitvalue1[3] == geraden[3] && splitvalue1[4] == geraden[4]){
		var i=6
		var x=6
		alert("you won");
		var won = true;
	}
	nummer++
	if(trys == 5 && won != true){
		alert("game over");
	}
}
