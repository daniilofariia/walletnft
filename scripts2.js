function gerenciarimagens(c){
	var x,i;
	x=document.getElementsByClassName("img")
	for(i=0;i<x.length;i++){
		x[i].style.display="none";
		}
		if(c=='tudo'){
		for(i=0;i<x.length;i++){
		x[i].style.display="block";
		}
}else{
	x=document.getElementsByClassName(c);
	for(i=0;i<x.length;i++){
		x[i].style.display="block";
}
}
}
	var btns=document.getElementsByClassName("btn");
	for(i=0;i<btns.length;i++){
		btns[i].addEventListener('click',function(){
 		var btnatual=document.getElementsByClassName("ativo")[0];
 		btnatual.className = btnatual.className.replace("ativo", " ");
 		this.className+=" ativo";


		});
	}

gerenciarimagens("tudo");