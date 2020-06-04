(function (root) {
	function renderImg(src){
		root.blurImg(src);	//给body添加背景图片
		var img = document.querySelector('.songImg img');
		img.src = src
	}
	function renderInfo(data){
		var songInfoChilden = document.querySelector('.songInfo').children;
		songInfoChilden[0].innerHTML = data.name;	
		songInfoChilden[1].innerHTML = data.singer;
		songInfoChilden[2].innerHTML = data.album;
	}

	function renderIsLike(isLike) {
		var lis = document.querySelectorAll('.control li');
		lis[0].className = isLike ? 'liking' : '';
	}
	root.render = function(data){
		renderImg(data.image)
		renderInfo(data);
		renderIsLike(data.isLike);	
	}
})(window.player || (window.player = {}))