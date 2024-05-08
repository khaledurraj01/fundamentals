customElements.define('cust-tag', 
    class extends HTMLElement {
        connectedcallback(){
            const temp = this.attachShadow({mode: 'open'});
            temp.innerHTML = `<p>
            hello user</p>`;
        }
    }
)