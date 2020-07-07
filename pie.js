$(document).ready(function (){
	var ctx1 = $("#pie-chartcanvas-1");
	var ctx2 = $("#pie-chartcanvas-2");

	var data1 = {
		labels : ["match1", "match2", "match3", "match4", "match5"],
		datasets : [
		    {
		    	label : "TeamA score",
		    	data : [10, 50, 25, 70, 40],
		    	backgoundColor : [
		    	     "#CD5C5C",
		    	     "#DC143C",
		    	     "#FF0000",
		    	     "#B22222",
		    	     "#8B0000",

		    	],
		    	borderColor : [
		    	    "#CDA776",
		    	    "#989898",
		    	    "#CB252B",
		    	    "#E39371",
		    	    "#1D7A46"
		    	],
		    	borderWidth : [1, 1, 1, 1, 1]

		    }

		]
	};


	var data2 = {
		labels : ["match1", "match2", "match3", "match4", "match5"],
		datasets : [
		    {
		    	label : "TeamB score",
		    	data : [20, 35, 40, 60, 50],
		    	backgoundColor : [
		    	     "#FAEBD7",
		    	     "#DCDCDC",
		    	     "#E9967A",
		    	     "#F5DEB3",
		    	     "#9ACD32"

		    	],
		    	borderColor : [
		    	    "#E9DAC6",
		    	    "#CBCBCB",
		    	    "#D88569",
		    	    "#E4CDA2",
		    	    "#89BC21"
		    	],
		    	borderWidth : [1, 1, 1, 1, 1]

		    }

		]
	};
	








	var chart1 = new Chart( ctx1, {
		type : "pie",
		data : data1,
		options : {}
	});
    

    var chart2 = new Chart( ctx2, {
		type : "pie",
		data : data2,
		options : {}
	});

});