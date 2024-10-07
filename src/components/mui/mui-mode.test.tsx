import {render, screen} from '../../test-utils';
import { MuiMode } from "./mui-mode"

describe('Mui', () => {
    test('renders text correctly', () => {
        render(<MuiMode />);
        const typoEle = screen.getByRole("heading");
        expect(typoEle).toHaveTextContent("dark mode");
    })
})