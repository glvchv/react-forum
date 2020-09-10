import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '.';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../error-message', () => 'ErrorMessage');

describe('Login-form component', () => {
    it('should render form', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <LoginForm />
            </BrowserRouter>
        );
        expect(tree).toMatchSnapshot();
    });
})