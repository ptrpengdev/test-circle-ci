import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const YourComponent = () => {
  const [tasks, setTasks] = useState([
    { id: 'task1', content: 'Task 1' },
    { id: 'task2', content: 'Task 2' },
    { id: 'task3', content: 'Task 3' },
  ]);

  const handleDragEnd = (result) => {
    // Handle drag and drop logic here
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  const handleContentChange = (e, taskId) => {
    // Update the content of the task when the content is edited
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, content: e.target.innerText } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => handleContentChange(e, task.id)}
                      dangerouslySetInnerHTML={{ __html: task.content }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default YourComponent;
