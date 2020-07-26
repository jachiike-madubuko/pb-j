import React from 'react';

import styled from 'styled-components';

import Textfield from '@atlaskit/textfield';
import { fontSize, gridSize } from '@atlaskit/theme/constants';

import InlineEdit, { InlineEditProps } from '@atlaskit/inline-edit';

const ReadViewContainer = styled.div`
  display: flex;
  font-size: ${fontSize()}px;
  line-height: ${( gridSize() * 1.5 ) / fontSize()};
  max-width: 100%;
  min-height: ${( gridSize() * 1.5 ) / fontSize()}em;
  padding: ${gridSize()}px ${gridSize() - 2}px;
  word-break: break-word;
`;

interface State {
    editValue: string;
}

interface InputProps extends Partial<InlineEditProps<string>> {
    update: any
    value: string
    editFirst?: boolean

}
const Input: React.FC<InputProps> = props => {

    const { update, editFirst, value} = props




        return (
            <div
                style={{
                    padding: `${gridSize()}px ${gridSize()}px ${gridSize() * 2}px`,
                }}
            >
                <InlineEdit
                    defaultValue={value}
                    startWithEditViewOpen={editFirst}
                    label="Inline edit"
                    editView={fieldProps => <Textfield {...fieldProps} autoFocus  />}
                    readView={() => (
                        <ReadViewContainer>
                            {value || 'Click to enter value'}
                        </ReadViewContainer>
                    )}
                    onConfirm={val => update( val )}
                />
            </div>
        );
}


export default Input