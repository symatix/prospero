// web ("/new") > local ("item/item-new")
Template.item_new.helpers({
  admin:function(){
    var userCurrent = Meteor.user().username;
    var userAdmin = Meteor.users.findOne({username:"admin"}).username;
    if (userCurrent == userAdmin){
      return true;
    } else {
      return false;
    }
  },
  data:function(){
    return Data.find();
  }
})
Template.item_details.helpers({
  admin:function(){
    var userCurrent = Meteor.user().username;
    var userAdmin = Meteor.users.findOne({username:"admin"}).username;
    if (userCurrent == userAdmin){
      return true;
    } else {
      return false;
    }
  }
})