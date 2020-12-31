import angular from 'angular';

// Create the module where our functionality can attach to
let homeModule = angular.module('home', []);

// Include our UI-Router config settings
import HomeConfig from './home.config';
homeModule.config(HomeConfig);

// Controllers
import HomeCtrl from './home.controller';
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;

/* Eléments de calcul */
		var mini_ama = 2.23;
		var mini_ged = 8.18;
		/* Fonctions */
		function Reset() {
			document.getElementById("type").value = "";
			document.getElementById("calque1").style.display = "none";
			document.getElementById("calque2").style.display = "none";
			document.getElementById("calque3").style.display = "none";
		}
		function verifierCaracteres(event) {
			var keyCode = event.which ? event.which : event.keyCode;
			var touche = String.fromCharCode(keyCode);
			var champ = document.getElementById('mon_input');
			var caracteres = '0123456789.';
			if(caracteres.indexOf(touche) >= 0) {
				champ.value += touche;
			}
		}
		function Type() {
			var type = document.getElementById("type").value;
			/* On affiche le champ suivant */
			document.getElementById("tauxhoraire").value = "";
			if(type=="ama") {
				document.getElementById("tauxhoraire").placeholder = "Ex : "+mini_ama;
			} else {
				document.getElementById("tauxhoraire").placeholder = "Ex : "+mini_ged;
			}
			document.getElementById("salairemensuel").value = "";
			document.getElementById("calque1").style.display = "block";
			document.getElementById("calque2").style.display = "none";
			document.getElementById("calque3").style.display = "none";
		}
		function Tauxhoraire() {
			var type = document.getElementById("type").value;
			var tauxhoraire = document.getElementById("tauxhoraire").value;
			if(type=="ama") {
				var tauxtest = mini_ama;
			} else {
				var tauxtest = mini_ged;
			}
			if(tauxhoraire!=="0" && tauxhoraire>=tauxtest) {
				document.getElementById("calque2").style.display = "none";
				document.getElementById("calque3").style.display = "none";
				document.getElementById("nbheureshebdo").value = "";
				document.getElementById("calque2").style.display = "block";
			} else {
				alert("Merci de respecter le minimum horaire de "+tauxtest+" €");
			}
		}
		function NbJoursHebdo() {
			var type = document.getElementById("type").value;
			var tauxhoraire = document.getElementById("tauxhoraire").value;
			if(type=="ama") {
				var tauxtest = mini_ama;
			} else {
				var tauxtest = mini_ged;
			}
			if(tauxhoraire!=="0" && tauxhoraire>=tauxtest) {
				document.getElementById("calque2").style.display = "none";
				document.getElementById("calque3").style.display = "none";
				document.getElementById("nbheureshebdo").value = "";
				document.getElementById("calque2").style.display = "block";
			} else {
				alert("Merci de respecter le minimum horaire de "+tauxtest+" €");
			}
		}
		function SalaireMensuel() {
			var type = document.getElementById("type").value;
			var tauxhoraire = document.getElementById("tauxhoraire").value;
			var nbheureshebdo = document.getElementById("nbheureshebdo").value;
			var calc = tauxhoraire*nbheureshebdo*4;
			document.getElementById("salairemensuel").value = calc;
			document.getElementById("calque3").style.display = "block";
			Send();
		}
		function Send() {
			document.getElementById("send").style.display = "block";
		}
