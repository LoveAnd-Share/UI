var data;
        $(document).ready(function(){
  	    $("#c").click(function(){
              var xhr = new XMLHttpRequest();

              xhr.open('get','http://localhost:5791/EFStudent/PageStudent?pageIndex=6&pageSize=10',true);
              xhr.onload = function()
              {
                  data = JSON.parse(xhr.responseText);
                  //alert(org.students[5].id);
                  for (let index = 0; index < data.length; index++) {
                    $("tbody").append(
                     "<tr><td>"+data[index].id+"</td><td>"+data[index].name+"</td><td>"+data[index].teName+"</td><td>"+data[index].age+"</td></tr>"            
                    );                     
                  }                                                                                                
              }
              xhr.send();
          });
 });