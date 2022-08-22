import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-canvas',
  styleUrl: 'app-canvas.css',
  shadow: true,
})
export class AppCanvas {
  @State() size: number = 0;
  // private xs: number[][] = [[1], [8], [9], [2, 1], [1, 2], [1, 2], [2, 1], [9], [8], [1]];
  // private ys: number[][] = [[2], [2, 2], [8], [3, 2, 3], [3, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
  @State() xs: number[][] = [[], [], [], [], [], [], [], [], [], []];
  @State() ys: number[][] = [[], [], [], [], [], [], [], [], [], []];

  componentWillRender() {
    // size correct validation
    // if (this.size !== this.xs.length || this.size !== this.ys.length) {
    //   console.error("Invalid size or x's or y's data length");
    //   return;
    // }
    console.log('Component will render correctly');
  }

  render() {
    return (
      <div class="main">
        {this.size > 0 ? (
          <div>
            <app-board size={this.size} xs={this.xs} ys={this.ys} />
            <div class="center">
              <app-input />
              <app-button stickied>Add</app-button>
              <app-button>Next row</app-button>
            </div>
          </div>
        ) : (
          <div>
            <h5>Size of the nonogram</h5>
            <h6>nonogram must be square!</h6>
            <app-input />
            <app-button
              stickied
              onClick={() => {
                console.log('elo');
              }}
            >
              Confirm
            </app-button>
          </div>
        )}
      </div>
    );
  }
}
