import {fireEvent, render, screen} from '@testing-library/react';
import { expect, test } from 'vitest';
import Upload from '../components/Upload';

test('renders h2 headline', () => {
  render(<Upload />);
  const header = screen.getByRole('heading', {
      level: 2,
    })
  expect(header).toBeDefined();
});

test('displays uploading notification after button is clicked', () => {
  render(<Upload />);
  // simulates clicking the button
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Uploading...')).toBeDefined();
});
