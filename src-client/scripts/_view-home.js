import Backbone from 'backbone'
import {ListingsModel, ListingsCollection} from './_models.js'

export const HomepageView = Backbone.View.extend({
  el: '.api-input',

  events: {
    "click .thumbnail" : "handleThumbnailClick",
  },

  handleThumbnailClick: function(evt){
    console.log('click')
    let clickedProduct = evt.currentTarget
    window.location.hash = `item/${clickedProduct.dataset.pid}`
  },

  _homepageTemplate: function(megsModel){
    console.log(megsModel)
    let newStrng = megsModel.map(function(model){
      if(typeof model.get('item') === 'undefined'){
        return ''
      }
      let titleDisplay = model.get('item').slice(0,50)

      if(titleDisplay.length >= 40){
        titleDisplay += '...'
      }

      if( typeof model.get('imgLink') === 'undefined'){
        return `https://s-media-cache-ak0.pinimg.com/736x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975.jpg`
      }

      return `
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail" data-pid="${model.get('_id')}">
              <div class="thumbnail-image"><img src="${model.get('imgLink')}"></div>
              <div class="caption">
                <h5>${titleDisplay}</h5>
                <div>
                  <div><h5>${model.get('category')}</h5></div>
                  <div>$${model.get('price')}</div>
                </div>
              </div>
            </div>
          </div>
      `
    }).join('')

    return newStrng


  },

  render: function(megsModel){
    this.el.innerHTML = this._homepageTemplate(megsModel)
  }
})
