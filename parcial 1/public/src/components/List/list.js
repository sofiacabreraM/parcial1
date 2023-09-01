class List extends HTMLElement {

    static get observedAttributes (){
        return["name", "species", "gender", "house" , "yearOfBirth"]
    }

    constructor (){
        super();
        this.attachShadow({mode: `open`});
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/List/list.css">
        <section>
        <h1>${this.name}</h1>
        <h2>${this.species}</h2>
        <h2>${this.gender}</h2>
        <h2>${this.house}</h2>
        <h3>${this.yearOfBirth}</h3>
        </section>
        `
    }
}

customElements.define(`list-element`, List)
export default List