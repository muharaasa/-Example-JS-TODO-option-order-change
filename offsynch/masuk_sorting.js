//saat reload  tampilkan datelist
	function masuk_tampil(){
					let masuk_tanggal = document.querySelector('ol#masuk_tanggal');
		masuk_tanggal.innerHTML='';
		masuk_list = JSON.parse(localStorage.getItem('masuk_list'));
		masuk_list.forEach(function(selection){
			let myli = document.createElement('li');
			myli.innerHTML = selection;
			masuk_tanggal.appendChild(myli);
		});
		masuk_addata();
	}
	function masuk_addata(){
		let masuk_hari = document.querySelector('#masuk_hari');
		let masuk_persen = document.querySelector('#masuk_persen');
		masuk_hari.innerHTML = masuk_list.length		
	}
	document.querySelector('#masuk_tampil').addEventListener('click',function(e){
	masuk_tampil();
	masuk_addata();
	});

	
//saat sembunyikan
	document.querySelector('#masuk_sembunyi').addEventListener('click',function(e){	
			let masuk_tanggal = document.querySelector('ol#masuk_tanggal');
		masuk_tanggal.innerHTML='';
	});
	   
//saat nambah
	document.querySelector('#masuk_input').addEventListener('change',function(e)
	{	
		let masuk_input = document.querySelector('#masuk_input');
		
		let masuk_list;
		if (localStorage.getItem('masuk_list')===null){masuk_list = [];}
		else{masuk_list = JSON.parse(localStorage.getItem('masuk_list'));}
		masuk_list.push(masuk_input.value);	
		localStorage.setItem('masuk_list',JSON.stringify(masuk_list));
		
		alert(masuk_input.value+'berhasil disimpan');
		masuk_input.value ='';
		masuk_tampil();
	});
	
//saat hapus terakhir
	document.querySelector('#masuk_hapuslast').addEventListener('click',function(e)
	{	
		let masuk_list;
		if (localStorage.getItem('masuk_list')===null){masuk_list = [];}
		else {masuk_list = JSON.parse(localStorage.getItem('masuk_list'));	}
		masuk_list.pop();	
		localStorage.setItem('masuk_list',JSON.stringify(masuk_list));
		masuk_tampil();
	});

	
/*
subnext if ada date yang sama bilang dah ada

next  remove specific date
next date calculation 

unwilled next ganti nama dan penyusunan yang monoton no automasi
unwilled subnext tell what erased

next quest reward & plan on date(?)
*/
