// web ("/") / local ("index/index")
Template.mainGallery.helpers({
  galleryIndex: () => GalleryIndex,
  gallery:function(){
    return Prospero.find({"visible":"public"}, {sort:Session.get("sortIndex"), limit:Session.get("siteLimit")});
  },
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
  noDataTechnique:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.painting_technique == ""){
      return true;
    }
  },
  noDataDate:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.date == ""){
      return true;
    }
  },
  noDataPaint:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.paint_layer== ""){
      return true;
    }
  },
  noDataAuthor:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.author == ""){
      return true;
    }
  },
  noDataTitle:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.title == ""){
      return true;
    }
  },
  noDataOwner:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.collection_owner == ""){
      return true;
    }
  },
  noDataPeriod:function(){
    if(Prospero.findOne({_id:this.__originalId}).basic.period_style == ""){
      return true;
    }
  },
  noImg:function(){
    if(Prospero.findOne({_id:this.__originalId}).data.imgs.img_front == ""){
      return true;
    }
  }
})
