var data;
        $(document).ready(function(){
          //
  	    $("#r").click(function(){
              let xhr = new XMLHttpRequest();

              xhr.open('get','http://120.26.194.198:5100/EFStudent/PageStudent?pageIndex=1&pageSize=10',true);
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
          //添加学生信息
          $("#btn-add").click(function(){
              let id = $('#id').val();
              let name = $('#name').val();
              let teName = $('#teName').val();
              let age = $('#age').val();
              let xhr = new XMLHttpRequest();
              if(id == '' || name == '' || teName ==  '' || age == '')
              {
                alert("添加的信息不完整，请核对");
              }
              xhr.open('post','http://localhost:5791/EFStudent/addStu?id='+id+'&name='+name+'&teName='+teName+'&age='+age,true);
              xhr.onload = function()
              {
                if(xhr.status == 200 && xhr.readyState == 4 && xhr.responseText =='success')
                {
                  alert('学生信息添加成功');
                }
                else
                {
                  alert(xhr.responseText);
                }
              }
              xhr.send();
          })
 });