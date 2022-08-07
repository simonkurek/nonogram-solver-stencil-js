import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.css',
  shadow: true,
})
export class AppBoard {
  @Prop() size: number;
  @Prop() xs: number[][];
  @Prop() ys: number[][];

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
            {this.ys.map((row, y) => {
              return (
                <tr>
                  <th>{row.join(' ')}</th>
                  <td data-x="0" data-y="0" class="none"></td>
                  <td data-x="1" data-y="0" class="none"></td>
                  <td data-x="2" data-y="0" class="none"></td>
                  <td data-x="3" data-y="0" class="none"></td>
                  <td data-x="4" data-y="0" class="none"></td>
                  <td data-x="5" data-y="0" class="none"></td>
                  <td data-x="6" data-y="0" class="none"></td>
                  <td data-x="7" data-y="0" class="none"></td>
                  <td data-x="8" data-y="0" class="none"></td>
                  <td data-x="9" data-y="0" class="none"></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
