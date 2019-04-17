import Filter from './Filter.js';
import ShoppingCart from './ShoppingCart.js';
import PhonesCatalog from './PhonesCatalog.js';


export default class PhonesPage {
    constructor(element) {
        this.element = element;

        this.render();

        this.initComponent(Filter);
        this.initComponent(ShoppingCart);
        this.initComponent(PhonesCatalog);
    }

    initComponent(Constructor) {
        new Constructor(this.element.querySelector(`[data-component="${Constructor.name}"]`));
    }

    render() {
        this.element.innerHTML = `
          <div class="row">

          <!--Sidebar-->
          <div class="col-md-2">
            <section>
              <div data-component="Filter"></div>
            </section>
    
            <section>
              <div data-component="ShoppingCart"></div>
            </section>
          </div>
    
          <!--Main content-->
          <div class="col-md-10">
            <div data-component="PhonesCatalog"></div>
          </div>
    </div>
    `;
    }
};