import { newE2EPage } from '@stencil/core/testing';

describe('app-board', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-board></app-board>');

    const element = await page.find('app-board');
    expect(element).toHaveClass('hydrated');
  });
});
