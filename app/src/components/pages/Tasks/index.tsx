import { Children, FC, useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import { Task, TaskStatus } from '../../../models/task.model';

import { useAuth } from '../../../contexts/auth';
import { useGetTasksQuery, useUpdateTaskMutation } from '../../../services/tasksApi'
import { Loading } from '../../molecules/Loading';
import { List } from './List';
import { Container, StyledHeader } from './styled';
import { MyModal } from '../../atoms/Modal';
import { TaskForm } from '../../forms/Tasks';
import { Button } from '../../atoms/Button';

interface Props {

}

export const Tasks: FC<Props> = () => {
  const [open, setopen] = useState(false)
  const { user } = useAuth();
  const { currentData, data, error, isLoading, isFetching, isSuccess, } = useGetTasksQuery(user);
  const [updateTask] = useUpdateTaskMutation();
  const doneTasks: Task[] = [];
  const doingTasks: Task[] = [];
  const todoTasks: Task[] = [];
  let lists: { title: string; tasks: Task[] }[] = [];

  if(isSuccess) {
    currentData?.forEach((task) => {
      switch(task.status) {
        case 'todo':
          todoTasks.push(task)
          break;
        case 'doing':
          doingTasks.push(task)
          break;
        case 'done':
          doneTasks.push(task)
          break;

        default:
          break;
      }
    });
    lists.push({ title: 'Pendente', tasks: todoTasks });
    lists.push({ title: 'Em andamento', tasks: doingTasks });
    lists.push({ title: 'Finalizada', tasks: doneTasks });
  }


  return (
    <>
      <StyledHeader>
        <h1>Tarefas</h1>
        <MyModal
          icon={<Button>Adicionar</Button>}
          title="Task form"
          open={open}
          onClickOpen={() => { setopen(true) }}
          onClickClose={() => { setopen(false) }}
        >
          <TaskForm handleCloseModal={() => {
            setopen(false)
          }} />
        </MyModal>
      </StyledHeader>
      {error && <h2>Something went wrong</h2>}
      {(data !== currentData) && <Loading text="Buscando..." />}
      {(isFetching) && <Loading text="Buscando..." />}
      {isLoading && <Loading text="Carregando..." />}
      {isSuccess && (
        <>
          <DragDropContext onDragEnd={
            ({ destination, source }) => {
              // dropped outside the list
              if(!destination) {
                console.log('@Board - [Error]Dropped outside the list!')
                return;
              }
              const sInd = +source.droppableId;
              const dInd = +destination.droppableId;
              if(sInd === dInd) {
                const result = [...lists[sInd].tasks];
                const [removed] = result.splice(source.index, 1);
                result.splice(destination.index, 0, removed);
                lists[sInd].tasks = result;
              } else {
                const sourceList = lists[sInd];
                const [removed] = sourceList.tasks.splice(source.index, 1);
                let newStatus: TaskStatus = dInd === 0 ? 'todo' : (dInd === 1 ? 'doing' : 'done');
                let updatedTask = { ...removed, status: newStatus };
                updateTask(updatedTask)
              }
            }
          }>
            <Container>
              {Children.toArray(
                lists?.map((list, index) => {
                  return (
                    <List
                      list={list}
                      listIndex={index}
                    />
                  )
                })
              )}
            </Container>
          </DragDropContext>
        </>
      )}
    </ >
  );

}
