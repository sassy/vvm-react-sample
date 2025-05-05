import { Button } from '.';

export default {
    title: 'Button',
    component: Button,
};

export const HelloButton = () => <Button label="Hello Button" onClick={() => alert('Hello Button clicked!')} />;