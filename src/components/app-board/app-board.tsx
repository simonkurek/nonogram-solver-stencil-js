import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.css',
  shadow: true,
})
export class AppBoard {
  @Prop() size!: number;
  @Prop() xs!: number[][];
  @Prop() ys!: number[][];

  componentWillLoad() {
    console.log('componentWillLoad');
    console.log(this.size);
    console.log(this.xs);
    console.log(this.ys);
  }

  render() {
    return (
      <div>
        <table id="game">
          <tbody>
            <tr>
              <th></th>
              {this.xs.map(row => {
                return (
                  <th>
                    {row.map(x => {
                      return <p>{x}</p>;
                    })}
                  </th>
                );
              })}
            </tr>
            {this.ys.map(row => {
              return (
                <tr>
                  <th>{row.join(' ')}</th>
                  {Array(this.size)
                    .fill(0)
                    .map(_ => {
                      return <td class="none"></td>;
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
