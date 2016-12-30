Meteor.myFunctions = {
  dateFormat:function(){
    Date.prototype.getHoursCustom = function(){
      var retval = this.getHours();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getMinutesCustom = function(){
      var retval = this.getMinutes();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    Date.prototype.getSecondsTwoCustom = function(){
      var retval = this.getSeconds();
      if (retval < 10) {
          return ("0" + retval.toString());
      } else {
          return retval.toString();
      }
    }
    var date = new Date();
    var dateFormat = (date.getMonth() + 1) + '.' + date.getDate() + '.' +  date.getFullYear() + '. '+date.getHoursCustom() + ':' + date.getMinutesCustom() + ':' + date.getSecondsTwoCustom();
    return dateFormat;
  },
clearIndividualValues: function(){
    event.target.author.value = '';
    event.target.title.value = '';
    event.target.date.value = '';
    event.target.period_style.value = '';
    event.target.collection_owner.value = '';
    event.target.museum_gallery.value = '';
    event.target.painting_technique.value = '';
    event.target.stretcher.value = '';
    event.target.support.value = '';
    event.target.priming.value = '';
    event.target.paint_layer.value = '';
    event.target.varnish.value = '';
    event.target.img_front.value ='',
    event.target.img_back.value =''
  },
  insertData: function(){
    var itemDetails = {
    userId:Meteor.user()._id,
    createdAt: Meteor.myFunctions.dateFormat(),
    addedBy:Meteor.user().profile.full_name,
    last_edit: Meteor.myFunctions.dateFormat(),
    editedBy:Meteor.user().profile.full_name,
    editorId:Meteor.user()._id,
    visible:"public",
	  basic:{
		  author:event.target.author.value,
		  title:event.target.title.value,
		  date:event.target.date.value,
		  period_style:event.target.period_style.value,
		  collection_owner:event.target.collection_owner.value,
		  museum_gallery:event.target.museum_gallery.value,
		  painting_technique:event.target.painting_technique.value,
		  stretcher:event.target.stretcher.value,
		  support:event.target.support.value,
		  priming:event.target.priming.value,
		  paint_layer:event.target.paint_layer.value,
		  varnish:event.target.varnish.value
	  },
	  data:{
      research:{
        research:event.target.data_research.value,
        researchId:event.target.data_research_id.value
      },
		  imgs:{
			  img_front:event.target.img_front.value,
			  img_front_id:event.target.img_front_id.value,
			  img_back:event.target.img_back.value,
			  img_back_id:event.target.img_back_id.value
		  }
	  }
    }
    Meteor.call("insertItem", itemDetails);
    alert("["+itemDetails.basic.title+"] successfully updated");
  },
  updateData: function(){
    var itemId = Session.get("itemId");
    var itemDetails = {
    userId:event.target.user_id.value,
    createdAt: event.target.created_at.value,
    addedBy:event.target.added_by.value,
    last_edit: Meteor.myFunctions.dateFormat(),
    editedBy:Meteor.user().profile.full_name,
    editorId:Meteor.user()._id,
    visible:"public",
	  basic:{
		  author:event.target.author.value,
		  title:event.target.title.value,
		  date:event.target.date.value,
		  period_style:event.target.period_style.value,
		  collection_owner:event.target.collection_owner.value,
		  museum_gallery:event.target.museum_gallery.value,
		  painting_technique:event.target.painting_technique.value,
		  stretcher:event.target.stretcher.value,
		  support:event.target.support.value,
		  priming:event.target.priming.value,
		  paint_layer:event.target.paint_layer.value,
		  varnish:event.target.varnish.value
	  },
	  data:{
      research:{
        research:event.target.data_research.value,
        researchId:event.target.data_research_id.value
      },
		  imgs:{
			  img_front:event.target.img_front.value,
			  img_front_id:event.target.img_front_id.value,
			  img_back:event.target.img_back.value,
			  img_back_id:event.target.img_back_id.value
		  }
	  }
    }
    Meteor.call("updateItem", itemId, itemDetails)
    alert("["+itemDetails.basic.title+"] successfully updated");
  },
  addUser: function(){
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("createUsers", userDetails);
  },
  editUser: function(){
    var userId = Session.get("userId");
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();
    var email = $('[name=email]').val();
    var full_name = $('[name=full_name]').val();
    var institution = $('[name=institution]').val();
    var telephone = $('[name=telephone]').val();

    var userDetails = {
      username:username,
      password: password,
      profile: {
        full_name: full_name,
        email: email,
        institution: institution,
        telephone: telephone,
        password:password // this is insecure, only admin should see this field
      }
    }
    Meteor.call("editUsers", userId, userDetails)
  }
}