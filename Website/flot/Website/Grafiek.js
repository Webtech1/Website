//haalt gegevens voor grafiek op uit txt document
		$.get('grafiek.txt', function(data) {	
			//coordinaten moeten in de vorm 1,1 2,2 3,3 staan
			var graphs = data.split("\n");
			var grafiek1 = graphs[0].split(" ");			
			var grafiek2 = graphs[1].split(" ");			
			
			var data1 = [];			
			for (var i = 0; i < grafiek1.length; i++) {			
				data1.push(grafiek1[i].split(","));
			}			
			var data2 = [];			
			for (var i = 0; i < grafiek2.length; i++) {			
				data2.push(grafiek2[i].split(","));
			}
			Draw(data1, data2);					
			}, 'text');				
	
		function Draw(data1, data2){
		$.plot("#grafiek", [
			{ label: "graf1", data: data1 },
			{ label: "graf2", data: data2 }
			], {
			series: {
				lines: { show: true },
				points: { show: true }
			},
			xaxis: {
				ticks: 10,
				min: 0,
				max: 5,
				tickDecimal: 2 
			},
			yaxis: {
				ticks: 10,
				min: 0,
				max: 5,
				tickDecimals: 2
			},
			grid: {
				backgroundColor: { colors: [ "#fff", "#eee" ] },
				borderWidth: {
					top: 1,
					right: 1,
					bottom: 2,
					left: 2
				}
			}
		});	
		}