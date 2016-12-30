// web ("") / local ("index/navbar")
Template.navbar.helpers({
  admin:function(){
    var username = Meteor.user().profile.full_name;
    var admin = "admin";
    if (username == admin){
      return true;
    }
  },
  adminIndex: () => AdminIndex,
  editorIndex: () => EditorIndex,
  galleryIndex: () => GalleryIndex, // used for search
  searchAttributes:function(){
    return {placeholder: ' Search by author or title',
            id:'input-basic-search'}
  },
  searchInput:function(){
    var routeName = Router.current().route.path();
    var index = "/";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  galleryInput:function(){
    var routeName = Router.current().route.path();
    var index = "/";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  editorInput:function(){
    var routeName = Router.current().route.path();
    var index = "/database/myitems";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  adminInput:function(){
    var routeName = Router.current().route.path();
    var index = "/admin/prosperoDB";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  }
})