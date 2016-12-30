GalleryIndex = new EasySearch.Index({
  collection: Prospero,
  name:'mainGallery',
  fields: ["basic.author", "basic.title"],
  engine: new EasySearch.MongoDB({
    // user search - has to filter hidden items
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.visible = {$ne:"hidden"}
            //console.log(selector);
            return selector;
        },
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
            }
          } else if ('title_a' === sortBy) {
            return {
              "basic.title": 1
            }
          } else if ('title_z' === sortBy) {
            return {
              "basic.title": -1
            }
          } else if ('author_a' === sortBy) {
            return {
              "basic.author": 1
            }
          } else if ('author_z' === sortBy) {
            return {
              "basic.author": -1
            }
          }
        },
  }),
})
EditorIndex = new EasySearch.Index({
  collection: Prospero,
  name:'editorGallery',
  fields: ['basic.author', 'basic.title'],
  engine: new EasySearch.MongoDB({
        selector: function(searchObject, options, aggregation) {
            var selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            selector.visible = {$ne:"hidden"}
            selector.userId = options.search.userId
            //console.log(selector);
            return selector;
		},
        sort: function (searchObject, options) {
          const sortBy = options.search.props.sortBy

          // return a mongo sort specifier
          if ('last_edit' === sortBy) {
            return {
              "last_edit": -1,
            }
          } else if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
            }
          } else if ('title_a' === sortBy) {
            return {
              "basic.title": 1
            }
          } else if ('title_z' === sortBy) {
            return {
              "basic.title": -1
            }
          } else if ('author_a' === sortBy) {
            return {
              "basic.author": 1
            }
          } else if ('author_z' === sortBy) {
            return {
              "basic.author": -1
            }
          }
        },
  }),
})
AdminIndex = new EasySearch.Index({
  collection: Prospero,
  name:'adminGallery',
  fields: ['basic.author', 'basic.title', 'addedBy'],
  engine: new EasySearch.MongoDB({
    sort: function (searchObject, options) {
      const sortBy = options.search.props.sortBy

      // return a mongo sort specifier
          if ('addedBy' === sortBy) {
            return {
              "addedBy": 1,
            }
          } else if ('last_entry' === sortBy) {
            return {
              "createdAt": -1
            }
          } else if ('first_entry' === sortBy) {
            return {
              "createdAt": 1
            }
          } else if ('last_edit' === sortBy) {
            return {
              "last_edit": -1
            }
          } else if ('title_a' === sortBy) {
            return {
              "basic.title": 1
            }
          } else if ('title_z' === sortBy) {
            return {
              "basic.title": -1
            }
          } else if ('author_a' === sortBy) {
            return {
              "basic.author": 1
            }
          } else if ('author_z' === sortBy) {
            return {
              "basic.author": -1
            }
          }
    },
  }),
})
