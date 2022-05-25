var org;
        $(document).ready(function(){
  	    $("#c").click(function(){
              var xhr = new XMLHttpRequest();

              xhr.open('get','http://localhost:5791/EFStudent/PageStudent?pageIndex=6&pageSize=10',true);
              xhr.onload = function()
              {
                  org = JSON.parse('{"students":'+xhr.responseText+'}');
                  //alert(org.students[5].id);
                  for (let index = 0; index < org.students.length; index++) {
                    $("tbody").append(
                     "<tr><td>"+org.students[index].id+"</td><td>"+org.students[index].name+"</td><td>"+org.students[index].tename+"</td><td>"+org.students[index].age+"</td></tr>"            
                    );                     
                  }                                                                                                
              }
              xhr.send();
          });
 });