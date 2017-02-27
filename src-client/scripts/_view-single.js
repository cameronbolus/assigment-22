export const SingleListingView = Backbone.View.extend({
  el: '.api-input',

    _singleProductTemplate: function(model){
      console.log(model)

        return `
            <div class="pic-and-desc-container">
              <div class="main-item-pic">
                <img src="${model.get('imgLink')}">
              </div>
              <div class="description">
                <div><h3>${model.get('item')}</h3></div>
                <br>
                <br>
                <div class="price-askquestions">
                  <div><h4>$${model.get('price')}</h4></div>
                  <div class="question-button">Ask a question</div>
                </div>
                <br>
                <br>
                <br>
                <br>
                <div class="add-button">Add to cart</div>
                <br>
                <div class="buy-button">Buy it now</div>
              </div>
            </div>
            <div class="product-description">
              <p>$${model.get('description')}</p>
            </div>
        `
    },
  render: function(model){
    this.el.innerHTML = this._singleProductTemplate(model)
  }
})
