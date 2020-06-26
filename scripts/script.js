$(".button").click(function(){
if($("#name").val() ==""){
alert("Please Enter City Name");
return false;
}
$city=$("#name").val();
$i=0;
  $.getJSON("https://api.covid19india.org/v2/state_district_wise.json", function(result){

       

    $.each(result, function(i, field){
    //console.log(field.state);
    
    $.each(field.districtData, function (key, val) {
    if(val.district ==$city){
    $("#death").text(val.deceased);
    $("#recovered").text(val.recovered);
    $("#cases").text(val.confirmed);
    $("#active").text(val.active);
    $i++; 
    }


      
        

    });


   

    });

 
 



    if($i==0){
    alert("No Result Found");
    }
  });

 $.each(field.districtData,function(key,val){
    totalcase.push(val.confirmed);
    totalrecovered.push(val.recovered);
    totalactive.push(val.active);
    totaldeath.push(val.deceased);
   });



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['confirmed', 'active', 'recovered', 'death'],
        datasets: [

        {
            label: 'confirmed',
            data:totalcase,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
           
            
            borderColor: 
                'rgba(255, 99, 132, 1)',
               
            borderWidth: 1
        },

        {
            label: 'active',
            data:totalactive,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
            
            
            borderColor: 
                'rgba(255, 99, 132, 1)',
               
        
            borderWidth: 1
        },

        {
            label: 'recovered',
            data:totalrecovered,
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
          
            
            borderColor: 
                'rgba(255, 99, 132, 1)',
              
            borderWidth: 1
        },

        {
            label: 'death',
            data: totaldeath,
            backgroundColor:'rgba(153, 102, 255, 0.2)',
            
            borderColor:'rgba(255, 159, 64, 1)',
        
            borderWidth: 1
        }


        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
});