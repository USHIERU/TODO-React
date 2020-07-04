import React, { useState, useEffect } from "react";
import Task from "../../../models/Task";

const Card = ({ title, isMain, contentList, passTask, returnTask, deleteTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState([]);

    useEffect(() => {
        setTask(contentList);

    }, [contentList]);

    function mOnSubmit(event) {
        event.preventDefault();

        setTask([...task, new Task(name.value, description.value)]);

        setName({ value: "" });
        setDescription({ value: "" });
    }

    function handleChangeDescription(event) {
        setDescription({ value: event.target.value });
    }

    function handleChangeName(event) {
        setName({ value: event.target.value });
    }

    return <>
        <div className="card blue-grey darken-4">
            <div className="card-content white-text">
                <div className="row valign-wrapper">
                    <div className="col s6">
                        <span className="card-title">{title}</span>
                    </div>
                    <div className="col s6">
                        {isMainF(isMain)}
                    </div>
                </div>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Options</th>
                        </tr>
                    </thead>

                    <tbody>
                        {task.map(element => {
                            return <>
                                <tr>
                                    <td style={{ textDecoration: title === 'Finalized' ? 'line-through' : '' }}> {element.name} </td>
                                    <td style={{ textDecoration: title === 'Finalized' ? 'line-through' : '' }}> {element.description} </td>
                                    <td>
                                        {getItems(title, element.id, passTask, returnTask, deleteTask)}
                                    </td>
                                </tr>
                            </>;
                        })}
                    </tbody>
                </table>
            </div>
        </div>

        <div id="modal1" className="modal blue-grey darken-4">
            <div className="modal-content white-text">
                <h4>Modal Header</h4>
                <form onSubmit={mOnSubmit}>
                    <label>
                        Name:
                        <input type="text" className="white-text" value={name.value} onChange={handleChangeName} />
                    </label>
                    <label>
                        Description:
                        <input type="text" className="white-text" value={description.value} onChange={handleChangeDescription} />
                    </label>
                    <div className="right-align">
                        <button type="submit" className="modal-close waves-effect waves-green btn cyan darken-4">Agree</button>
                    </div>
                </form>
            </div>
        </div>
    </>;
}

function getItems(title, id, passTask, returnTask, deleteTask) {
    switch (title) {
        case 'In Proccess':
            return <>
                <span onClick={() => returnTask(id)} className="new badge waves-effect btn deep-orange darken-4" data-badge-caption=""><i className="material-icons">keyboard_arrow_left</i></span>
                <span>  </span>
                <span onClick={() => passTask(id)} className="new badge waves-effect btn green darken-4" data-badge-caption=""><i className="material-icons">check</i></span>
            </>;

        case 'Finalized':
            return <>
                <span onClick={() => returnTask(id)} className="new badge waves-effect btn deep-orange darken-4" data-badge-caption=""><i className="material-icons">keyboard_arrow_left</i></span>
                <span>  </span>
                <span onClick={() => deleteTask(id)} className="new badge waves-effect btn red darken-4" data-badge-caption=""><i className="material-icons">delete</i></span>
            </>;

        default:
            return <>
                <span onClick={() => passTask(id)} className="new badge waves-effect btn teal darken-4" data-badge-caption=""><i className="material-icons">keyboard_arrow_right</i></span>
                <span>  </span>
                <span onClick={() => deleteTask(id)} className="new badge waves-effect btn red darken-4" data-badge-caption=""><i className="material-icons">delete</i></span>
            </>;
    }
}

function isMainF(val) {
    if (val)
        return <span className="new badge btn waves-effect cyan darken-4 modal-trigger" data-badge-caption="Add Task" data-target="modal1"><i className="material-icons left">add</i></span>;

    return <div></div>;
}

export default Card;