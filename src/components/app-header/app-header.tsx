import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {
  render() {
    return (
      <div>
        <h1>Nonogram Solver</h1>
      </div>
    );
  }
}
