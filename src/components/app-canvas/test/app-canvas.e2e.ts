import { newE2EPage } from '@stencil/core/testing';

describe('app-canvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-canvas></app-canvas>');

    const element = await page.find('app-canvas');
    expect(element).toHaveClass('hydrated');
  });
});
