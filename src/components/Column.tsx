import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { useAppState } from '../context/AppStateContext';

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

export const Column = ({
  text,
  index,
  id
}: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={text =>
          dispatch({ type: 'ADD_TASK', payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
