export default class PhonesCatalog {
    constructor(element, props) {
        this.element = element;
        this.props = props;

        this.render();

        this.element.addEventListener('click', (event) => {
            const link = event.target.closest('[data-element="PhoneLink"]')

            if (!link) {
                return;
            }

            const phoneId = link.dataset.phoneId;
            this.props.onPhoneSelected(phoneId);
        });
    }

    render() {
        this.element.innerHTML = `
        <div>
            <ul class="phones">
              ${ this.props.phones.map(phone => `
              <li class="thumbnail">
                <a 
                  data-element="PhoneLink"
                  data-phone-id="${phone.id}" 
                  href="#!/phones/${phone.id}" 
                  class="thumb"
                >
                  <img alt="${phone.name}" src="${phone.imageUrl}">
                </a>
    
                <div class="phones__btn-buy-wrapper">
                  <a class="btn btn-success">
                    Add
                  </a>
                </div>
    
                <a 
                  data-element="PhoneLink"
                  data-phone-id="${phone.id}" 
                  href="#!/phones/${phone.id}"
                >
                  ${phone.name}
                </a>
                
                <p>${phone.snippet}</p>
              </li>
              `).join('')}
            </ul>
        </div>
    `;
    }
}