import React, { ComponentPropsWithRef } from 'react';

type InputProps = ComponentPropsWithRef<'input'>;

export const Input: React.FC<InputProps> = ({ ...props }) => {
    return (
        <input
            {...props}
        />
    );
};
