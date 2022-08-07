import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-canvas',
  styleUrl: 'app-canvas.css',
  shadow: true,
})
export class AppCanvas {
  private size: number = 10;
  private xs: number[][] = [[1], [8], [9], [2, 1], [1, 2], [1, 2], [2, 1], [9], [8], [1]];
  private ys: number[][] = [[2], [2, 2], [8], [3, 2, 3], [3, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];

  componentWillRender() {
    // size correct validation
    if (this.size !== this.xs.length || this.size !== this.ys.length) {
      console.error("Invalid size or x's or y's data length");
      return;
    }
    console.log('Component will render correctly');
  }

  render() {
    return (
      <div>
        <app-board size={this.size} xs={this.xs} ys={this.ys}></app-board>
      </div>
    );
  }
}
