$(function(){

  // jQuery methods go here...

      $("#drug-allergies").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
            $("#input-group-hidden").show();
          }
          else{
              $("#input-group-hidden").hide();
          }
    });
      $("#recent-travel").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
            $("#input-group-hidden-travel").show();
          }
          else{
              $("#input-group-hidden-travel").hide();
          }
      });
      $("#morbidities").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
              $("#input-group-hidden-morbidities").show();
          }
          else{
              $("#input-group-hidden-morbidities").hide();
          }
      });
      $("#fever").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
              $("#input-group-hidden-fever").show();
          }
          else{
              $("#input-group-hidden-fever").hide();
          }
      });
      $("#headache").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
              $("#input-group-hidden-headache").show();
          }
          else{
              $("#input-group-hidden-headache").hide();
          }
      });
      $("#rhinorrhea").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
              $("#input-group-hidden-rhinorrhea").show();
          }
          else{
              $("#input-group-hidden-rhinorrhea").hide();
          }
      });
      $("#sore-throat").change(function(){
          var selectedOption = $(this).children("option:selected").val();
          if(selectedOption=="Yes"){
            console.log("success");
              $("#input-group-hidden-sore-throat").show();
          }
          else{
              $("#input-group-hidden-sore-throat").hide();
          }
      });
});
