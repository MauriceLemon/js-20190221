export default class ShoppingCart {
    constructor(element) {
        this.element = element;

        this.render();
    }

    render() {
        this.element.innerHTML = `
        <div>
          <h4>Shopping Cart</h4>
          <ul>
            <li>Phone 1</li>
            <li>Phone 2</li>
            <li>Phone 3</li>
          </ul>
        </div>
    `;
    }
}