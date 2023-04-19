

//get li index
	function content_selectinglist(){
			function getEventTarget(e){
				e = e || window.event;
				return e.target || e.srcElement;
			}

		let ul = document.querySelector('#content_closelist');
		ul.onclick = function(event){
			let target = getEventTarget(event);
			let li = target.closest('li'); // get reference
			let nodes = Array.from(li.closest('ul').children); // get array
			let index = nodes.indexOf(li); 

			document.querySelector('#content_selection').innerHTML = index;	
			terasu(); openthem();
		}
	}
	function content_unorviewlist(){
		let x = document.querySelector('#content_closebutton');
		let y = document.querySelector('#content_closelist');
		if (x.style.display === "block"){  x.style.display = "none"; y.style.display = "block" } 
		else { x.style.display = "block"; y.style.display = "none";};
	}
	
	document.querySelector('#content_closebutton').addEventListener('click',function(e){
		content_unorviewlist();
	});
	document.querySelector('#content_closelist').addEventListener('click',function(e){
		content_selectinglist();
		content_unorviewlist();

	})

//listing selection from data array
// adding button and view it
