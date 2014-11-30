var ScrollReveal = {

	init: function(){

		var self = this;

		this.nav = document.querySelector('.nav')

		this.mTop = this.nav.offsetTop;

		this.h = this.nav.offsetHeight

		this.y = 0;

		this.prevScroll = 0;

		/* Scroll handler */

		window.onscroll = handleScroll

		function handleScroll(){
			self._scroll()
		}

	},

	_scroll: function(){

		var sTop = window.pageYOffset? window.pageYOffset : window.scrolltop;

		var y = Math.max(-50, Math.min(this.y + this.prevScroll - sTop, 0))				
		
		if(sTop > this.mTop){

			document.body.classList.add('nav-fixed')
			
			
			if(this.y != y){
				this._transform(y)
			}

			this.y = y


		}else{
			
			this._transform(0)
			
			this.y = 0;
			
			document.body.classList.remove('nav-fixed')
		}

		this.prevScroll =  Math.max(sTop, 0)

	},

	_transform: function(value){

		this.nav.style.transform = 'translate3d(0,'+value+'px, 0)'
		
	}
}