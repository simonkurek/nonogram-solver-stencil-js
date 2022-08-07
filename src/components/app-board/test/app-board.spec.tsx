import { newSpecPage } from '@stencil/core/testing';
import { AppBoard } from '../app-board';

describe('app-board', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppBoard],
      html: `<app-board></app-board>`,
    });
    expect(page.root).toEqualHtml(`
      <app-board>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-board>
    `);
  });
});
