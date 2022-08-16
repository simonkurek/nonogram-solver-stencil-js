import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.css',
  shadow: true,
})
export class AppInput {
  @State() value: number = 10;

  handleChange(e) {
    console.log(`handleChange: ${e.target.value}`);
    this.value = Number(e.target.value);
  }

  render() {
    return <input type="number" value={this.value} onChange={this.handleChange} onKeyUp={this.handleChange} autofocus />;
  }
}
