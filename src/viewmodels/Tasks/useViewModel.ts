import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

/*
* ViewModel
* StateとActionを管理する
* Viewからのアクションを受け取り、Stateを更新する責務
* (本来はドメインロジックはModelに持たせるべき)
*/

type Input = {
    task: string;
}

export const useViewModel = () => {
    // Stateの初期化
    const [tasks, setTasks] = useState<string[]>([]);
    const { register, handleSubmit } = useForm<Input>({
        defaultValues: {
            task: '',
        },
    });
    
    useEffect(() => {
        setTasks(['Task 1', 'Task 2', 'Task 3']);
    }, [setTasks]);

    const addTask = (task: string) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };
    const removeTask = (task: string) => {
        setTasks((prevTasks) => prevTasks.filter((t) => t !== task));
    };
    const onSubmit: SubmitHandler<Input> = (data: Input) => { 
        setTasks((prevTasks) => [...prevTasks, data.task]); 
    };

    return {
        tasks,
        addTask,
        register,
        onSubmit: handleSubmit(onSubmit),
        removeTask,
    };
};

