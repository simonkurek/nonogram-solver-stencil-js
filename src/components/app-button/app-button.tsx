import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {
  @Prop() stickied: boolean = false;

  onClick = () => {
    console.log('onClick');
  };

  render() {
    return (
      <button class={this.stickied ? 'stickied' : ''} onClick={this.onClick}>
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
