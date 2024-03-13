import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormReleaseYear from './FormReleaseYear';

describe('Forms release year testing', () => {
  it('Should update value when writing on', async () => {
    const mockHandleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <FormReleaseYear label="write something" onChange={mockHandleChange} />,
    );
    const inputForms = getByPlaceholderText(/1999/i) as HTMLInputElement;
    fireEvent.change(inputForms, { target: { value: '2005' } });
    expect(mockHandleChange).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(mockHandleChange).toHaveBeenCalled();
    });
    fireEvent.change(inputForms, { target: { value: '' } });
    await waitFor(() => {
      expect(mockHandleChange).toHaveBeenCalled();
      expect(inputForms).toHaveAttribute('value', '');
    });
  });
  it('Should display error', async () => {
    const mockHandleChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <FormReleaseYear label="write something" onChange={mockHandleChange} />,
    );
    const inputForms = getByPlaceholderText(/1999/i) as HTMLInputElement;
    fireEvent.change(inputForms, { target: { value: 'error message' } });
    expect(mockHandleChange).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(getByText(/only/i)).toHaveTextContent('Only a number from 1952 to 2023');
    });
  });
});
