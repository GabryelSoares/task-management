import { ChangeEvent, FC, useState } from 'react'
import { useAuth } from '../../../contexts/auth';
import { Task, TaskStatus } from '../../../models/task.model';
import { useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } from '../../../services/tasksApi';
import { Button } from '../../atoms/Button';
import { StyledContainer, StyledControls, StyledForm } from './styled';

interface Props {
  task?: Task;
  handleCloseModal: () => void;
}

export const TaskForm: FC<Props> = ({ task, handleCloseModal }) => {
  const { user } = useAuth();
  const [title, settitle] = useState(task?.title || '');
  const [status, setstatus] = useState<TaskStatus>(task?.status || 'todo');

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  const deleteHandler = async () => {
    if(task?.id) {
      const response = await deleteTask(task.id);
      console.log('deleteTask > response:: ', response);
      handleCloseModal();
    }
  }

  const submitHandler = async () => {
    console.log('updateTask > submitHandler > task:: ', task);
    if(task?.id) {
      const response = await updateTask({ id: task.id, title, status, user });
      console.log('updateTask > submitHandler > response:: ', response);
    } else {
      const response = await addTask({ title, status, user });
      console.log('addTask > submitHandler > response:: ', response);
    }
    handleCloseModal();
  }

  return (
    <StyledContainer>
      <StyledControls>
        <Button onClick={submitHandler}>Enviar</Button>
        {task?.id && <Button onClick={deleteHandler}>Excluir</Button>}
      </StyledControls>
      <StyledForm>
        <input
          type='text'
          name='title'
          placeholder="Título"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            settitle(event.target.value)
          }}
        />
        <select
          name='status'
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            if((e.currentTarget.value === 'doing') || (e.currentTarget.value === 'done') || (e.currentTarget.value === 'todo')) {
              setstatus(e.currentTarget.value)
            }
          }}
          placeholder='Status'
        >
          <option value="todo">Pendente</option>
          <option value="doing">Em andamento</option>
          <option value="done">Finalizada</option>
        </select>
      </StyledForm>
    </ StyledContainer>
  );

}
