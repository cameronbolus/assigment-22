import Backbone from 'backbone'
import {ListingsModel, ListingsCollection} from './_models.js'

export const FormView = Backbone.View.extend({
  el: '.api-input',

  events : {
    'submit .new-post-form' : 'handleFormSubmit'
  },

  handleFormSubmit: function(evt){
    evt.preventDefault();
     console.log('form submitted')

     let formElement = evt.target

     let dataToBeSaved = {
       item: formElement.item.value,
       price: parseInt(formElement.price.value),
       forSale: formElement.sale.checked,
       description: formElement.description.value,
       imgLink: formElement.imageLink.value,
       category: formElement.category.value
     }

     let newPostModel = new ListingsModel()
     newPostModel.set(dataToBeSaved)
     let viewInstance = this
     newPostModel.save().then(function(){
       viewInstance.el.innerHTML = `<div class="submission">Thank you for submitting!</div>`
     })
  },

    _formProductTemplate: function(model){
      console.log(model)

        return `
            <form class="new-post-form">

              <div class="field-item">
                <label>Item</label>
                <input type="text" name="item" />
              </div>

              <div class="field-item price">
                <label>Price</label>
                <input type="text" name="price" />
              </div>

              <div class="field-item forsale">
                <label>For Sale?</label>
                <input type="checkbox" name="sale" />
              </div>

              <div class="field-item description">
                <label>Description</label>
                <input type="text" name="description" />
              </div>

              <div class="field-item image">
                <label>Image</label>
                <input type="text" name="imageLink" />
              </div>

              <div class="field-item category">
                <label>Category</label>
                <input type="text" name="category" />
              </div>

              <button class="search-button" type="submit" name="button">Submit</button>
            </form>
        `
    },
  render: function(model){
    this.el.innerHTML = this._formProductTemplate(model)
  }
})
