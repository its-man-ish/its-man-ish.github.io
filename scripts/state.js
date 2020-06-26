$(document).ready(function() {
	var url ="https://api.covid19india.org/data.json"


	$.get(url,function(data){
		console.log(data)

		var total_active, total_recovered,total_confirmed,total_death,time


		// variable for the chart 

        var states = [] 
        var confirmed = []
        var recovered = []
        var deaths = []
        var active=[]

        $.each(data.statewise,function(id,obj){
        	states.push(obj.state)
        	confirmed.push(obj.confirmed)
        	recovered.push(obj.recovered)
        	deaths.push(obj.deaths)
        	active.push(obj.active)
        })
   
        states.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        active.shift()

		total_active=data.statewise[0].active
		time=data.statewise[0].lastupdatedtime
		total_confirmed=data.statewise[0].confirmed
		total_recovered=data.statewise[0].recovered
		total_death=data.statewise[0].deaths
		$("#Active").append(total_active)
		$("#Death").append(total_death)
		$("#Recovered").append(total_recovered)
		$("#Confirmed").append(total_confirmed)
		$("#time").append(time)

		var myChart = document.getElementById('myChart').getContext('2d')
		var chart = new Chart(myChart,{
			type:'line',
			data:{
				labels: states,
				datasets: [

				{  
				 label: 'Cases',
				data: confirmed,
				fill : false,
				borderColor : '#FFF',
				backgroundColor: '#FFF',
				borderWidth : 1
					
				},

				{

					label: 'Recovered',
				data: recovered,
				fill : false,
				borderColor : '#009688',
				backgroundColor: '#009688',
				borderWidth : 1
			
				},

				{

					label: 'Deaths',
				data: deaths,
				fill : false,
				borderColor : '#f44336',
				backgroundColor: '#f44336',
				borderWidth : 1
					
				},


				{
					label: "Active",
					data: active,
					fill:false,
					backgroundColor: "blue",
					borderColor:"blue",
					borderWidth:1
				}

				]
			},
			options:{

				responsive : true,
			maintainAspectRatio : true
				
			
			}


		})


		


	})  
})