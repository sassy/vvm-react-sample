import React from 'react';
import { List } from '../../components/List';
import { ListItem } from '../../components/ListItem';
import { useViewModel } from './hooks/useViewModel';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export const TaskPage: React.FC = () => {
    const { tasks, register, onSubmit } = useViewModel();

    return (
        <div>
            <h1>Tasks</h1>
            <Input {...register('task')} type="text" />
            <Button label="追加" onClick={onSubmit} />
            <List>
                {tasks.map((task, index) => (
                    <ListItem key={index} text={task} />
                ))}
            </List>
        </div>
    );
};
