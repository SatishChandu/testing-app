import {render, screen} from '@testing-library/react';
import { User } from './user';
// import { Handlers } from '../../mocks/handlers';

describe('User', () => {
    test('renders the text content', () => {
        render(<User />);
        const textEle = screen.getByRole("heading", {
            name: "Users",
        });
        expect(textEle).toBeInTheDocument();
    });

    test('renders a list of users', async () => {
        render(<User />);
        const users = await screen.findAllByRole("listitem");
        expect(users).toHaveLength(3);
    });


});