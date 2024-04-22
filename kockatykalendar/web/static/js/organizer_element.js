
class Organizer extends HTMLElement {
    static observedAttributes = ["color", "link", "icon", "name"];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
<style>
    article {
        border: 1px solid var(--color, #000);
        border-radius: 0.5rem;
        padding: 2rem;
        text-align: center;
        height: 100%;
        box-sizing: border-box;
    }
    img {
        height: 6rem;
        margin: 0 auto 1rem;
    }
    h2 {
        margin-bottom: 0.5rem;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
    }
</style>
<article>
	<a href="" target="_blank" rel="noreferrer">
		<img src="" alt="">
	</a>
	<h2 class="mb-2 font-bold text-2xl"></h2>
	<slot name="info"></slot>
</article>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "color") {
            this.shadowRoot.querySelector("article").style.setProperty("--color", newValue);
        } else if (name === "link") {
            this.shadowRoot.querySelector("a").href = newValue;
        } else if (name === "icon") {
            this.shadowRoot.querySelector("img").src = newValue;
        } else if (name === "name") {
            this.shadowRoot.querySelector("img").alt = newValue;
            this.shadowRoot.querySelector("h2").textContent = newValue;
        }
    }
}

customElements.define("organizer-element", Organizer);
