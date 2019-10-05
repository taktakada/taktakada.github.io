ddaccordion.init({
	headerclass: "title",
	contentclass: "items",
	revealtype: "click",
	collapseprev: true,
	defaultexpanded: [0],
	onemustopen: false,
	animatedefault: true,
	persiststate: false,
	toggleclass: ["closeheader", "openheader"],
	togglehtml: ["suffix", "<img src='img/societies/plus.gif' class='statusicon'>", "<img src='img/societies/minus.gif' class='statusicon'>"],
	animatespeed: "normal",
	oninit:function(headers, expandedindices){
		//do nothing
	},
	onopenclose:function(header, index, state, isuseractivated){
		//do nothing
	}
})
