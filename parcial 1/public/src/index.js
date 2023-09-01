import * as components from "./components/export.js"
import { data } from "./data.js";
class AppContainer extends HTMLElement {


    constructor (){
        super();
        this.attachShadow({mode: `open`});
    }

    connectedCallback(){
        this.render()
    }


    render(){
        

        data.forEach((user)=>{

            this.shadowRoot.innerHTML += `
            
           
            <list-element name="${user.name}" 
            species ="${user.species}"
            gender ="${user.gender}" 
            house="${user.house}"
            yearOfBirth="${user.yearOfBirth}"
            ></list-element>
            
          <button-element message="nombre del personaje "></button-element>

            `
        })

    }
}

customElements.define(`app-container`, AppContainer)
export default List