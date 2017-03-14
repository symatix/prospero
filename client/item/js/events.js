// web ("/new") > local ("item/item-new")
Template.item_new.events({
  'submit .js-input-painting-data':function(event){
    event.preventDefault();
    Meteor.myFunctions.insertData();
//    var user = Meteor.user().username;

//    if (user != "admin"){
//      Router.go("/database/myitems");
//    } else {
//      Router.go("/admin/prosperoDB");
//    }

  },
})

Template.form_research.events({
  'click #form-basic-select li':function(e){
 // e.preventDefault();
    $(this).find('a').tab('show');
 // $(this).tab('show');
     $(this).closest('ul').find('input[type="checkbox"]').prop('checked','');
     $(this).closest('li').find('input[type="checkbox"]').prop('checked','checked');
     var type = $('input[type="checkbox"]:checked').val();
     $("#objectType").val(type);
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
    $('#object_toggle-'+methodId).slideToggle('').toggleClass('active');

    if ($('#object_toggle-'+methodId).hasClass('active')) {
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