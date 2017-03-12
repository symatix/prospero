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
// clear all placeholders before input
//    $('form').submit(function() {
//            $(this).find('.individual-value').each(function() {
//                $(this).val('');
//            });
//    });
    $(':input').removeAttr('placeholder');
    var itemDetails = {
    type:document.getElementById("objectType").value,
    info:{
      userId:Meteor.user()._id,
      createdAt: Meteor.myFunctions.dateFormat(),
      addedBy:Meteor.user().profile.full_name,
      last_edit: Meteor.myFunctions.dateFormat(),
      editedBy:Meteor.user().profile.full_name,
      editorId:Meteor.user()._id,
      visible:"public",
    },
    data:{
      imgs:{
        front:document.getElementById("img_front").value,
        front_id:document.getElementById("img_front_id").value,
        back:document.getElementById("img_back").value,
        back_id:document.getElementById("img_back_id").value,
        side:document.getElementById("img_side").value,
        side_id:document.getElementById("img_side_id").value,
        signature:document.getElementById("img_signature").value,
        signature_id:document.getElementById("img_signature_id").value,
        original:{
          photoOne:document.getElementById("photoOne1").value,
          photoOne1_id:document.getElementById("photoOne1_id").value,
          photoTwo1:document.getElementById("photoTwo1").value,
          photoTwo1_id:document.getElementById("photoTwo1_id").value,
          photoThree1:document.getElementById("photoThree1").value,
          photoThree1_id:document.getElementById("photoThree1_id").value,
          photoFour1:document.getElementById("photoFour1").value,
          photoFour1_id:document.getElementById("photoFour1_id").value,
        },
        interventions:{
          photoOne2:document.getElementById("photoOne2").value,
          photoOne2_id:document.getElementById("photoOne2_id").value,
          photoTwo2:document.getElementById("photoTwo2").value,
          photoTwo2_id:document.getElementById("photoTwo2_id").value,
          photoThree2:document.getElementById("photoThree2").value,
          photoThree2_id:document.getElementById("photoThree2_id").value,
          photoFour2:document.getElementById("photoFour2").value,
          photoFour2_id:document.getElementById("photoFour2_id").value,
        },
        restoration:{
          photoOne3:document.getElementById("photoOne3").value,
          photoOne3_id:document.getElementById("photoOne3_id").value,
          photoTwo3:document.getElementById("photoTwo3").value,
          photoTwo3_id:document.getElementById("photoTwo3_id").value,
          photoThree3:document.getElementById("photoThree3").value,
          photoThree3_id:document.getElementById("photoThree3_id").value,
          photoFour3:document.getElementById("photoFour3").value,
          photoFour3_id:document.getElementById("photoFour3_id").value,
        },
      },
      original:{
        files:document.getElementById("files1").value,
        files_id:document.getElementById("files_id1").value,
      },
      interventions:{
        files:document.getElementById("files2").value,
        files_id:document.getElementById("files_id2").value,
      },
      restoration:{
        files:document.getElementById("files3").value,
        files_id:document.getElementById("files_id3").value,
      },
    },
	  basic:{
		  author:document.getElementById("author").value,
		  title:document.getElementById("title").value,
		  date:document.getElementById("date").value,
		  technique:document.getElementById("technique").value,
		  dimensions_noFrame:document.getElementById("dimensions_noFrame").value,
		  dimensions_frame:document.getElementById("dimensions_frame").value,
		  originalOwner:document.getElementById("originalOwner").value,
		  currentOwner:document.getElementById("currentOwner").value,
		  originalLocation:document.getElementById("originalLocation").value,
		  currentLocation:document.getElementById("currentLocation").value,
		  inventoryNumber:document.getElementById("inventoryNumber").value,
		  investigated:document.getElementById("methodsTechniques").value,
      notes:{
        history:document.getElementById("historyBasic").value,
        provenance:document.getElementById("provenanceBasic").value,
        comments:document.getElementById("commentsBasic").value
      },
	  },
    materials:{
      original:{
        primingGround:document.getElementById("primingGround1").value,
        pigmentsDyes:document.getElementById("pigmentsDyes1").value,
        bendingMedium:document.getElementById("bendingMedium1").value,
        additives:document.getElementById("additives1").value,
        layerVarnish:document.getElementById("layerVarnish1").value,
        underdrawingPentimento:document.getElementById("underdrawingPentimento1").value,
        leafs:document.getElementById("leafs1").value,
        leafsApplication:document.getElementById("leafsApplication1").value,
        periodStyle:document.getElementById("periodStyle1").value,
        stretcher:document.getElementById("stretcher1").value,
        supportStrainer:document.getElementById("supportStrainer1").value,
        support:document.getElementById("support1").value,
        thickness:document.getElementById("thickness1").value,
        piecesJoints:document.getElementById("piecesJoints1").value,
        texture:document.getElementById("texture1").value,
        color:document.getElementById("color1").value,
        manufacturer:document.getElementById("manufacturer1").value,
        wave:document.getElementById("wave1").value,
        constructionAids:document.getElementById("constructionAids1").value,
        decorativeApplications:document.getElementById("decorativeApplications1").value,
        potataGiornata:document.getElementById("potataGiornata1").value,
        relief:document.getElementById("relief1").value,
        samples:document.getElementById("samples1").value,
        plaster:{
          layers:document.getElementById("p_layers1").value,
          composition:document.getElementById("p_composition1").value,
          binderFiller:document.getElementById("p_binderFiller1").value,
        },
        density:{
          weft:document.getElementById("densityWeft1").value,
          warp:document.getElementById("densityWarp1").value,
        },
        thickness:{
          weft:document.getElementById("thicknessWeft1").value,
          warp:document.getElementById("thicknessWarp1").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle1").value,
          support:document.getElementById("df_support1").value,
          priming:document.getElementById("df_priming1").value,
          decorativeLayer:document.getElementById("df_decorativeLayer1").value,
        },
        notes:{
          sources:document.getElementById("sources1").value,
          comments:document.getElementById("comments1").value
        },
      },
      interventions:{
        primingGround:document.getElementById("primingGround2").value,
        pigmentsDyes:document.getElementById("pigmentsDyes2").value,
        bendingMedium:document.getElementById("bendingMedium2").value,
        additives:document.getElementById("additives2").value,
        layerVarnish:document.getElementById("layerVarnish2").value,
        leafs:document.getElementById("leafs2").value,
        leafsApplication:document.getElementById("leafsApplication2").value,
        periodStyle:document.getElementById("periodStyle2").value,
        interventions:document.getElementById("interventions2").value,
        piecesJoints:document.getElementById("piecesJoints2").value,
        texture:document.getElementById("texture2").value,
        color:document.getElementById("color2").value,
        manufacturer:document.getElementById("manufacturer2").value,
        wave:document.getElementById("wave2").value,
        constructionAids:document.getElementById("constructionAids2").value,
        decorativeApplications:document.getElementById("decorativeApplications2").value,
        potataGiornata:document.getElementById("potataGiornata2").value,
        relief:document.getElementById("relief2").value,
        samples:document.getElementById("samples2").value,
        plaster:{
          layers:document.getElementById("p_layers2").value,
          composition:document.getElementById("p_composition2").value,
          binderFiller:document.getElementById("p_binderFiller2").value,
        },
        density:{
          weft:document.getElementById("densityWeft2").value,
          warp:document.getElementById("densityWarp2").value,
        },
        thickness:{
          weft:document.getElementById("thicknessWeft2").value,
          warp:document.getElementById("thicknessWarp2").value,
        },
        decorativeFrame:{
          periodStyle:document.getElementById("df_periodStyle2").value,
          support:document.getElementById("df_support2").value,
          priming:document.getElementById("df_priming2").value,
          decorativeLayer:document.getElementById("df_decorativeLayer2").value,
          warnish:document.getElementById("df_warnish2").value,
        },
        notes:{
          sources:document.getElementById("sources2").value,
          comments:document.getElementById("comments2").value
        },
      },
      work:{
        executor:document.getElementById("executor").value,
        responsiblePerson:document.getElementById("responsiblePerson").value,
        investor:document.getElementById("investor").value,
        people:document.getElementById("people").value,
        chronologicalProcess:document.getElementById("chronologicalProcess").value,
        duration:document.getElementById("duration").value,
        notes:{
          comments:document.getElementById("comments3").value
        },
      },
    },
  }
  console.log(itemDetails);
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