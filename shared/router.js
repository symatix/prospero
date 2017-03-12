Router.configure({
  layoutTemplate:'ProsperoLayout'
});

Router.route("/", function(){
  this.render('navbar', {to:"header"});
  this.render('mainGallery', {to:"main"});
});

Router.route("/login", function(){
  this.render('navbar', {to:"header"});
  this.render('login', {to:"main"});
})

Router.route("/search", function(){
  this.render('navbar', {to:"header"});
  this.render('advanced_search', {to:"main"});
});

Router.route("/up", function(){
  this.render('navbar', {to:"header"});
  this.render('upload_form', {to:"main"});
});

Router.route("/database/myitems", function(){
  Session.set("sortList", {author: 1});
  this.render('navbar', {to:"header"});
  this.render('editorItems', {to:"main"}); // change to limited session - 20 display
});

Router.route("/new", function(){
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main"});
});

Router.route("/gallery/details/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_details', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/gallery/edit/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/admin/details/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_details', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/admin/edit/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/admin/users", function(){
  this.render('navbar', {to:"header"});
  this.render('users', {to:"main"});
});
Router.route("/admin/users/edit/:_id", function(){
  Session.set("userId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('edit_user', {to:"main",
    data: function(){
      return Meteor.users.findOne({_id:this.params._id});
}});
});


Router.route("/admin/prosperoDB/", function(){
  Session.set("sortList", {author: 1})
  this.render('navbar', {to:"header"});
  this.render('adm_prospero_db', {to:"main"});
});

Router.route("/admin/users/add", function(){
  this.render('navbar', {to:"header"});
  this.render('new_user', {to:"main"});
});
