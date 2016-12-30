// web ("") / local ("index/navbar")
Template.navbar.events({
  "click .logout":function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go("/login");
  },
  'change .sorting-gallery': (e) => {
    GalleryIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-admin': (e) => {
    AdminIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-editor': (e) => {
    EditorIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  }
})