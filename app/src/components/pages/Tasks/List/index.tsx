
import React from 'react'
import { Droppable } from "react-beautiful-dnd";
import { MdAddBox } from 'react-icons/md'
import { TaskList } from '../../../../models/taskList.model';

import { Card } from '../Card';
import { Container, Header } from './styles';

interface Props {
  listIndex: number;
  list: TaskList;
}

export const List: React.FC<Props> = ({ list, listIndex }) => {
  return (
    <Droppable key={listIndex} droppableId={`${listIndex}`}>
      {(provided, snapshot) => (
        <Container
          done={snapshot.isDraggingOver}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Header>
            <h2>{list.title}</h2>
            <MdAddBox />
          </Header>
          {list.tasks?.map((task, index) => {
            return (
              <Card
                key={`List-${listIndex}/Card-${task.id}`}
                index={index}
                task={task}
              />
            )
          })}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  )
}
