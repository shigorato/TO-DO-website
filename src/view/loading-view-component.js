import { AbstractComponent } from "../framework/view/abstract-component.js";

function createNoTaskTemplate() {
    return (
        `<div class="loader">
  <span class="square"></span>
  <span class="square"></span>
  <span class="square"></span>
</div>
`
    )
}

export default class LoadingViewComponent extends AbstractComponent {
    get template() {
        return createNoTaskTemplate();
    }
}