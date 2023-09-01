class Button extends HTMLElement {

    static get observedAttributes (){
        return["message"]
    }

    constructor (){
        super();
        this.attachShadow({mode: `open`});
        this.onButtonClicked = this.onButtonClicked.bite(this)
    }

    connectedCallback(){
        this.mount()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName] = newValue;
        this.mount();
    }

    mount(){
        this.render()
        this.addListeners()

    }


    addListeners(){
  this.shadowRoot.querySelector("button").addEventListener(`click`, this.onButtonClicked)
    }

    onButtonClicked(){
    const currentValue = this.getAttribute ("message")
    this.setAttribute ("message" , "cambiaste el nombre del personaje")
    }



    render(){
        this.shadowRoot.innerHTML = `
        
        <section>
        <h1>${this.message}</h1>
        <button>Cambiar el nombre</button>
        </section>
        `
    }
}

customElements.define(`button-element`, Button)
export default Button