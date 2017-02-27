import Backbone from 'backbone';
import $ from 'jquery'
import {ListingsModel, ListingsCollection} from './_models.js'
import {HomepageView} from './_view-home.js'
import {SingleListingView} from './_view-single.js'
import {FormView} from './_view-form.js'

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    console.log('hello running')
    Backbone.history.start()
  },

  routes: {
    '' : 'showAllListings',
    'new' : 'showListingForm',
    'item/:id' : 'showSingleListing'
  },

    showAllListings: function(){
      let homepageCollectionInstance = new ListingsCollection()
      homepageCollectionInstance.fetch().then(function(){
        console.log(homepageCollectionInstance)
        let homepageViewInstance = new HomepageView()
        homepageViewInstance.render(homepageCollectionInstance.models)
      })
    },

    showListingForm: function(){
      let formViewInstance = new FormView()
      formViewInstance.render()
    },

    showSingleListing: function(itemId){
      let singleListingCollection = new ListingsCollection()
      singleListingCollection.fetch().then(function(){

         singleListingCollection.map(function(singleObj, i){
           if(singleObj.get('_id')== itemId){
             let singleListingViewInstance = new SingleListingView()
             singleListingViewInstance.render(singleObj)
           }
         })

      })
    }

})

let app = new AppRouter
