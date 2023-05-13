import React, { useState } from 'react';

export const TaskList = () => {
  const [task, setTask] = useState({ tnumber: "", name: ""});
  const todolList = [
    { tnumber: "1", name: "Cook lunch"},
    { tnumber: "2", name: "Do home work" },
    { tnumber: "3", name: "Sleep"}
  ];
  const doneList=[{ tnumber: "4", name: "Take cooking class"}];
  const [tasklist, setTaskList] = useState(todolList);
  const todoDone = (key) => {
    const tepm= todolList.find(task=>task.tnumber==key);
    doneList.push(tepm);
    todolList.remove(task=>task.tnumber==key);

  }
  const doneTodo = (key) => {
    const tepm= doneList.find(task=>task.tnumber==key);
    todolList.push(tepm);
    doneList.remove(task=>task.tnumber==key);
  }

  return (
    <div>
      <h1>Todo</h1>
      <table>
        <thead>
          <tr><th>tnumber</th><th>Name</th><th>Action</th></tr>
        </thead>
        <tbody>
          {todolList.map(task => (
            <tr key={task.tnumber}>
              <td>{task.tnumber}</td>
              <td>{task.name}</td>
              <td><button onClick={todoDone(key)}>Done</button></td>
            </tr>
          ))}
        </tbody>
      </table>


<div> -----------------------------------------------------    </div>

      <h1>Done</h1>
      <table>
        <thead>
          <tr><th>tnumber</th><th>Name</th><th>Action</th></tr>
        </thead>
        <tbody>
          {doneList.map(task => (
            <tr key={task.tnumber}>
              <td>{task.tnumber}</td>
              <td>{task.name}</td>
              <td><button onClick={doneTodo(key)}>Todo</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
