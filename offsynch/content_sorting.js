document.querySelector('#help_icon').addEventListener('click',function(e){
	alert('how to use: \n 1. check situation, condition and remember previous notes (if there)  \n 2. plan for steps  \n 3. you use may use devide route \n 4. you can use "<" and ">" to hide text,\n   use <br> for new line ');
	alert('any error?  \n if there are nothing in the list todo, add something from input \n clear all todo if crashed (its due to lack of bandwidth/memory capability');
});


let subcontent_singlelog = document.querySelector('#subcontent_singlelog');		
 

//saat reload -function
function openthem(){
		let that_one_targetted = document.querySelector('#content_selection').innerHTML;
		
		let subcontent_list = document.querySelector('#subcontent_list');
		subcontent_list.innerHTML = '';
		
		let selected_daftar = JSON.parse(localStorage.getItem(that_one_targetted));
		
		selected_daftar.forEach(function(something){
			let myli = document.createElement('li');
			myli.innerHTML = something;
			subcontent_list.appendChild(myli);
		});
}

	let sans = ['daftar_selection', 'daftar_todonow', 'daftar_rencana','daftar_error']; 
///prekondisi sebelum terasu dijalankan
		let content_selection = document.querySelector('#content_selection');
		content_selection.innerHTML = 0;///jaga-jaga aja klo undefined
		
		terasu();
function terasu(){
	let eyn = content_selection.innerHTML;
	let sans_target =  sans[eyn];

	document.querySelector('#content_selection').innerHTML = sans_target;
	
	let content_closelist = document.querySelector('#content_closelist');
	content_closelist.innerHTML='';

	sans.forEach(function(something){
		let myli = document.createElement('li');
		myli.innerHTML = something;
		content_closelist.appendChild(myli);
	});		
	openthem();/// sebenernya akan bisa "lag" bila terlalu panjang arraynya, namun ini dipanggil biar mudah aja 
}



//saat reload -declaration
	document.querySelector('#subcontent_reloader').addEventListener('click',function(e){	openthem(); subcontent_singlelog.innerHTML = 'here what we have: ' });
	
//saat nambah
	document.querySelector('#subcontent_newaddlist').addEventListener('click',function(e)
	{	
		let that_one_targetted = document.querySelector('#content_selection').innerHTML;
		
		let Selection_inputed = document.querySelector('#selection');
		
		let daftar_selection;
		if (localStorage.getItem(that_one_targetted)===null){daftar_selection = [];}
		else{daftar_selection = JSON.parse(localStorage.getItem(that_one_targetted));}
		daftar_selection.push(Selection_inputed.value);	
		localStorage.setItem(that_one_targetted,JSON.stringify(daftar_selection));
		
		subcontent_singlelog.innerHTML = Selection_inputed.value +" berhasil disimpan";
		Selection_inputed.value ='';openthem();
	});

// saat menghapus
	document.querySelector('#hapus').addEventListener('click',function(e)
	{	
		let that_one_targetted = document.querySelector('#content_selection').innerHTML;
		
		let daftar_selection;
		if (localStorage.getItem(that_one_targetted)===null)
		{daftar_selection = [];}
		else {daftar_selection = JSON.parse(localStorage.getItem(that_one_targetted));	}
		daftar_selection.pop();	
		localStorage.setItem(that_one_targetted,JSON.stringify(daftar_selection));
		subcontent_singlelog.innerHTML = " deleted";
		let subcontent_list = document.querySelector('#subcontent_list');		
		subcontent_list.innerHTML = "";openthem();
	});


//  swap
	document.querySelector('#swap').addEventListener('click',function(e)
	{ 
	let that_one_targetted = document.querySelector('#content_selection').innerHTML;
	
	document.querySelector('#swap').display === 'block';
		let index1 = document.querySelector('#cortraiter_a').value;
		let index2 = document.querySelector('#cortraiter_b').value;
					let daftar_selection;
					if (localStorage.getItem(that_one_targetted)===null){daftar_selection = [];}
					else {daftar_selection = JSON.parse(localStorage.getItem(that_one_targetted));	};
					
		if(index1>=daftar_selection.length ){alert('tak ada array di parse an A')}
		else if(index2>daftar_selection.length){alert('tak ada array di parse an B')}
		else{
				temp = daftar_selection[index1]; 
				daftar_selection[index1] = daftar_selection[index2];
				daftar_selection[index2] = temp; 
  				/* resave and show: */ 
				localStorage.setItem(that_one_targetted,JSON.stringify(daftar_selection));
				subcontent_singlelog.innerHTML = " ter swapp"; openthem();
				};
	});

	document.querySelector('#cleaner').addEventListener('click',function(e){ 
		let that_one_targetted = document.querySelector('#content_selection').innerHTML;
		
		let retVal = confirm("Do you want to clear things you've put inside??");
  		if( retVal == true ){ alert("things cleared");
   			localStorage.clear(that_one_targetted);
			openthem();
			return true; 
			}
   		else{ alert('Data not deleted...')
			 return false;}
	});

	document.querySelector('#etcbutton').addEventListener('click',function(e)
	{	
  		let x = document.getElementById('moreoption');
		if (x.style.display === "none") {x.style.display = "block";} 
		else {x.style.display = "none";}
	});

