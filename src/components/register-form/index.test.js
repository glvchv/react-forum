import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RegisterForm from '.';

jest.mock('../error-message', () => 'ErrorMessage');

describe('Register-form component', () => {
    it('should render component', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <RegisterForm />
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})