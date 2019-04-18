export default class Component {
    constructor(element, props = {}) {
        this.element = element;
        this.props = props;
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState,
        };

        this.render();
    }

    on(eventName, elementName, callback) {
        this.element.addEventListener(eventName, (event) => {
            const delegateTarget = event.target.closest(`[data-element="${elementName}"]`)

            if (!delegateTarget) {
                return;
            }

            event.delegateTarget = delegateTarget;
            callback(event);
        });
    }

    initComponent(Constructor, props = {}) {
        const componentName = Constructor.name;
        const element = this.element.querySelector(`[data-component="${Constructor.name}"]`);

        if (element) {
            new Constructor(element, props);
        }
    }

}