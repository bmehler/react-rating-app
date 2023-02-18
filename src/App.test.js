import { screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";
import App from './App';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test('renders root component', () => {

    act(() => {
        ReactDOM.createRoot(container).render(<App />)
    });

    const navigationHeader = screen.getByText(/Rating App/i);
    expect(navigationHeader).toBeInTheDocument();

    const linkText = screen.getByText(/Dashboard/i);
    expect(linkText).toBeInTheDocument();

    const header = screen.getByText(/Employee Rating/i);
    expect(header).toBeInTheDocument();

    const buttonNew = screen.getByRole('button', {
        name: /Create new/i
    });
    expect(buttonNew).toBeInTheDocument();

    const buttonGrid = screen.getByRole('button', {
        name: /Grid View/i
    });
    expect(buttonGrid).toBeInTheDocument();

    const buttonList = screen.getByRole('button', {
        name: /List View/i
    });
    expect(buttonList).toBeInTheDocument();
    //screen.debug();
});