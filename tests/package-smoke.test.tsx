import { describe, expect, it } from 'vitest';
import confetti from 'canvas-confetti';
import { Camera } from 'lucide-react';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

describe('runtime package smoke tests', () => {
  it('exposes the canvas-confetti API', () => {
    expect(typeof confetti).toBe('function');
  });

  it('renders a lucide icon through React DOM', () => {
    const markup = renderToStaticMarkup(
      React.createElement(Camera, { 'aria-label': 'Camera' })
    );

    expect(markup).toContain('<svg');
    expect(markup).toContain('aria-label="Camera"');
  });
});
