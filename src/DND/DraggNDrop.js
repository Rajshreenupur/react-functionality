import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';
import '../App.css'

// https://www.educative.io/answers/how-to-implement-drag-and-drop-functionality-in-react-application

// https://codesandbox.io/p/sandbox/taskify-7q25ie?file=%2Fsrc%2FComponents%2FInputField.tsx%3A17%2C22

const DraggNDrop = () => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [droppedItems, setDroppedItems] = useState([]);
  
    const handleDragStart = () => {
      setDraggedItem(null); // Reset the dragged item
    };
  
    const handleDrop = (item) => {
      setDroppedItems([...droppedItems, item]);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    return (
      <div>
        <h1>Drag and Drop</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h2>Draggable Items</h2>
            <DraggableItem item="Item 1" onDragStart={handleDragStart} />
            <DraggableItem item="Item 2" onDragStart={handleDragStart} />
            <DraggableItem item="Item 3" onDragStart={handleDragStart} />
            <DraggableItem item="Item 4" onDragStart={handleDragStart} />
            <DraggableItem item="Item 5" onDragStart={handleDragStart} />
            <DraggableItem item="Item 6" onDragStart={handleDragStart} />
            <DraggableItem item="Item 7" onDragStart={handleDragStart} />
            <DraggableItem item="Item 8" onDragStart={handleDragStart} />
            <DraggableItem item="Item 9" onDragStart={handleDragStart} />
            <DraggableItem item="Item 10" onDragStart={handleDragStart} />
          </div>
          <div style={{ flex: 1 }}>
            <h2>Droppable Area</h2>
            <DroppableArea onDrop={handleDrop} onDragOver={handleDragOver} />
            <ul>
              {droppedItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };  


export default DraggNDrop


