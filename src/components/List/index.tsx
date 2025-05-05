import React, { ReactElement } from 'react';
import { ListItem } from '../ListItem';

type ListProps = {
    children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
};

export const List: React.FC<ListProps> = ({ children }) => {
    return <ul>{children}</ul>;
};
