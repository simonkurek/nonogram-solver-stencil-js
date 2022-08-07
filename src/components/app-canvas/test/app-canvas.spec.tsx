import { newSpecPage } from '@stencil/core/testing';
import { AppCanvas } from '../app-canvas';

describe('app-canvas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppCanvas],
      html: `<app-canvas></app-canvas>`,
    });
    expect(page.root).toEqualHtml(`
      <app-canvas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-canvas>
    `);
  });
});
