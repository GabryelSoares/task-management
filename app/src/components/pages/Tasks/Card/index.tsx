
import React, { useState } from 'react'
import { Draggable } from "react-beautiful-dnd";
import { MdEdit } from 'react-icons/md';
import { Task } from '../../../../models/task.model';
import { MyModal } from '../../../atoms/Modal';
import { TaskForm } from '../../../forms/Tasks';
import { Container, Styledheader } from './styled';

interface Props {
  index: number;
  task: Task;
}

export const Card: React.FC<Props> = ({ index, task }) => {

  const [open, setopen] = useState(false)

  return (
    <Draggable
      key={task.id}
      draggableId={`${task.id}`}
      index={index}
    >
      {(provided, snapshot) => (
        <Container
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        // style={getItemStyle(
        //   snapshot.isDragging,
        //   provided.draggableProps.style
        // )}
        >
          <Styledheader>
            {task.title}
          </Styledheader>
          <p>{task.status}</p>
          <MyModal
            icon={<MdEdit size={16} />}
            title="Task form"
            open={open}
            onClickOpen={() => { setopen(true) }}
            onClickClose={() => { setopen(false) }}
          >
            <TaskForm task={task} handleCloseModal={() => {
              setopen(false)
            }} />
          </MyModal>
        </Container>
      )}
    </Draggable>
  )
}
