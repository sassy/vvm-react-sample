import { List } from '.';
import { ListItem } from '../ListItem'; // ListItemをインポート

export default {
    title: 'List',
    component: List,
};

export const HelloListItem = () => (
    <List>
        <ListItem text="Item 1" />
        <ListItem text="Item 2" />
        <ListItem text="Item 3" />
    </List>
);