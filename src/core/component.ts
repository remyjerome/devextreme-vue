import Vue from "vue";
import Component from "vue-class-component";

@Component({
  template: "<div/>"
})
export default class DxComponent extends Vue {
    protected _instance: any;

    public mounted(): void {
        // replace $attrs with $props
        this._instance = this._createWidget(this.$el, this.$attrs);
    }

    protected _createWidget(element: HTMLElement, props: Record<string, any>): any {
        return null;
    }
}