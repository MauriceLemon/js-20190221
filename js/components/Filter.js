import Component from '../Component.js';

export default class Filter extends Component {
  constructor(element, props) {
    super(element, props);

    this.render();

    this.on('input', 'Search', (event) => {
      const inputValue = event.delegateTarget.value;
      this.props.onSearch(inputValue);
    });

    this.on('change', 'Order', (event) => {
      const { value } = event.delegateTarget;
      this.props.onSelect(value);
    });
  }

  render() {
    this.element.innerHTML = `
          <div class="Filter">
              <p>
                Search:
                <input data-element="Search" value="${this.props.query}">
              </p>
                
              <p>
                Sort by:
                <select data-element="Order">
                  <option value="name">Alphabetical</option>
                  <option value="age">Newest</option>
                </select>
              </p>
          </div>
        `;
  }
}
