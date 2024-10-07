
import { act, renderHook } from '@testing-library/react';
import {useCounter} from './useCounter';

describe('useCounter', () => {
    test('renders the initial count', () => {
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    test('should accept and renders the initial count', () => {
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            },
        });
        expect(result.current.count).toBe(10);
    });
    
    test('should render the increment value', () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test('should render the decrement value', () => {
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    })
});

