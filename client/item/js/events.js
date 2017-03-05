// web ("/new") > local ("item/item-new")
Template.item_new.events({
  'submit .js-input-painting-data':function(event){
    event.preventDefault();
    Meteor.myFunctions.insertData();
    var user = Meteor.user().username;
    if (user != "admin"){
      Router.go("/database/myitems");
    } else {
      Router.go("/admin/prosperoDB");
    }
  },
  'change #data_img_front': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var img_front = $("#img_front").val();
        var noValue = "";
        if(img_front != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("frontId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var frontImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var frontImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_front").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#img_front").val(frontImg);
            $("#img_front_id").val(frontImgId);
            document.getElementById("upload_front").innerHTML = filename; //no jquery
            Session.set("frontId", frontImgId);
          }
        });
     });
   },
  'change #data_img_back': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var img_back = $("#img_back").val();
        var noValue = "";
        if(img_back != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("backId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var backImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var backImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_back").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_back").val(backImg);
            $("#img_back_id").val(backImgId);
            document.getElementById("upload_back").innerHTML = filename; //no jquery
            Session.set("backId", backImgId);
          }
        });
     });
   },
  'change #research': function(event, template) {
    event.preventDefault();
      console.log("fajlovi");
      FS.Utility.eachFile(event, function(file) {
        var research = $("#data_research").val();
        var noValue = "";
        if(research != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("researchId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var dataResearch = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var dataResearchId = fileObj._id;

            var fullPath = document.getElementById("research").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#data_research").val(dataResearch);
            $("#data_research_id").val(dataResearchId);
            document.getElementById("upload_research").innerHTML = filename; //no jquery
            Session.set("researchId", dataResearchId);
          }
        });
     });
   }
})

Template.form_research.events({
  'click #myTab li':function(e){
 // e.preventDefault();
    $(this).find('a').tab('show');
 // $(this).tab('show');
     $(this).closest('ul').find('input[type="checkbox"]').prop('checked','');
     $(this).closest('li').find('input[type="checkbox"]').prop('checked','checked');
  }
})

Template.item_basic.events({
  'click .btn_toggleBasic':function(event){
    event.preventDefault();
    $('.toggleBasic').slideToggle('slow').toggleClass('active');
    
    if ($('.toggleBasic').hasClass('active')) {
      $('.btn_toggleBasic').text('Expand');
    } else {
      $('.btn_toggleBasic').text('Colapse');
    }
  }
})

Template.materials_techniques.events({
  'click .btn_toggleMaterials':function(event){
    event.preventDefault();
    $('.toggleMaterials').slideToggle('').toggleClass('active');
    
    if ($('.toggleMaterials').hasClass('active')) {
      $('.btn_toggleMaterials').text('Expand');
    } else {
      $('.btn_toggleMaterials').text('Colapse');
    }
  }
})

Template.methods.events({
  'click .btn_toggleMethods':function(event){
    event.preventDefault();
    $('.toggleMethods').slideToggle('').toggleClass('active');
    
    if ($('.toggleMethods').hasClass('active')) {
      $('.btn_toggleMethods').text('Expand');
    } else {
      $('.btn_toggleMethods').text('Colapse');
    }
  }
})

Template.methods_checkbox.events({
  'click .method-checkbox':function(event){
    event.stopPropagation();
    event.preventDefault();
    var methodId = $(event.target).attr('for');

    console.log(methodId);
    $('#toggle-'+methodId).slideToggle('').toggleClass('active');

    if ($('#toggle-'+methodId).hasClass('active')) {
      $(event.target).addClass('check-active');
    } else {
      $(event.target).removeClass('check-active');
    }
  }
})


Template.pigment_dye_binder_basic.events({
  'click .btn_toggleMaterialsBasic':function(event){
    event.preventDefault();
    $('.toggleMaterialsBasic').slideToggle('slow').toggleClass('active');
    
    if ($('.toggleMaterialsBasic').hasClass('active')) {
      $('.btn_toggleMaterialsBasic').text('Expand');
    } else {
      $('.btn_toggleMaterialsBasic').text('Colapse');
    }
  }
})



Template.material_checkbox.events({
  'click .method-checkbox':function(event){
    event.stopPropagation();
    event.preventDefault();
    var methodId = $(event.target).attr('for');

    console.log(methodId);
    $('#toggle-'+methodId).slideToggle('').toggleClass('active');

    if ($('#toggle-'+methodId).hasClass('active')) {
      $(event.target).addClass('check-active');
    } else {
      $(event.target).removeClass('check-active');
    }
  }
})

Template.pigment_dye_binder_methods.events({
  'click .btn_toggleMaterialsMethods':function(event){
    event.preventDefault();
    $('.toggleMaterialsMethods').slideToggle('').toggleClass('active');
    
    if ($('.toggleMaterialsMethods').hasClass('active')) {
      $('.btn_toggleMaterialsMethods').text('Expand');
    } else {
      $('.btn_toggleMaterialsMethods').text('Colapse');
    }
  }
})