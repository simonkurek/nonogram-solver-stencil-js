import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() stickied: boolean = false;
  @Prop() onClick: () => void;

  @Event({
    bubbles: true,
    composed: true,
  })
  buttonClickEvent: EventEmitter<boolean>;

  onButtonClick() {
    this.buttonClickEvent.emit(true);
  }

  render() {
    return (
      <button class={this.stickied ? 'stickied' : ''} onClick={this.onButtonClick.bind(this)}>
        <slot />
      </button>
    );
    // if (this.stickied) {
    //   return (
    //     <button class="stickied">
    //       <slot />
    //     </button>
    //   );
    // }
    // return (
    //   <button>
    //     <slot></slot>
    //   </button>
    // );
  }
}
