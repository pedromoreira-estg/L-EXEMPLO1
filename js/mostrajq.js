/**
 * @author Pedro Moreira
 */
$(document).ready(function () {
			$("div.contentor div.foto").hide();
			$("div.contentor div.legenda").click(function (){
				$(this).parent().children("div.foto").toggle();
			})
		});
		

			
			/* 
			   window.addEventListener("load", function () {
			 	var fotos = document.getElementsByClassName("foto");
			 	var f;
			 	for(f=0; f < fotos.length; f++) {
					fotos[f].style.display="none";
					}
				var legendas = document.getElementsByClassName("legenda");
				var l;
				for(l=0; l < legendas.length; l++) {
					legendas[l].addEventListener("click",function () {
						//alert("ui   " + this.innerHTML);
						//debugger;
						this.parentNode;
						var afoto = this.parentNode.getElementsByClassName("foto")[0];
						if (afoto.style.display == "block") {
								afoto.style.display = "none";	
						} else { 
								afoto.style.display = "block";
						}
					});
				}
			});

		*/