import React from 'react';
import renderer from 'react-test-renderer';
import ReplyTextArea from '.';

jest.mock('../error-message', () => 'ErrorMessage');

describe('Reply-textarea component', () => {
    it('should render component', () => {
        const tree = renderer.create(<ReplyTextArea handleReplyClick={() => {}}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});