import React from 'react'
import {AppContainer} from './styles'
import {Column} from './components/Column'
import {Card} from './components/Card'
import {AddNewItem} from './components/AddNewItem'

function App() {
  return (
    <AppContainer >
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript"></Card>
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={() => console.log("heyheyhey")}></AddNewItem>
    </AppContainer>
  );
}

export default App;
