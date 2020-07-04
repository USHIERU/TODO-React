import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar';
import Card from './components/Card';
import Task from '../../models/Task';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function Home() {

  let [TODO, setTODO] = useState([]);
  let [InProccess, setInProccess] = useState([]);
  let [Finalized, setFinalized] = useState([]);

  useEffect(() => {
    setTODO([].concat([new Task('task', 'description')]));

    let modal = document.querySelectorAll(".modal");
    M.Modal.init(modal, {});
  }, []);

  function returnToTODO(id) {
    InProccess.forEach(t => {
      if (t.id === id)
        setTODO(TODO.concat(t));
    });

    setInProccess(InProccess.filter(i => i.id !== id));
  }

  function passToInProccess(id) {
    TODO.forEach(t => {
      if (t.id === id)
        setInProccess(InProccess.concat(t));
    });

    setTODO(TODO.filter(i => i.id !== id));
  }

  function returnToInProccess(id) {
    Finalized.forEach(t => {
      if (t.id === id)
        setInProccess(InProccess.concat(t));
    });

    setFinalized(Finalized.filter(i => i.id !== id));
  }

  function passToFinalized(id) {
    InProccess.forEach(t => {
      if (t.id === id)
        setFinalized(Finalized.concat(t));
    });

    setInProccess(InProccess.filter(i => i.id !== id));
  }

  function deleteTask(id) {
    setTODO(TODO.filter(i => i.id !== id));
  }

  function finalizeTask(id) {
    setFinalized(Finalized.filter(i => i.id !== id));
  }

  return <>
    <Navbar />

    <div className="container" style={{ marginTop: 1 + 'em' }}>
      <div className="row">

        <div className="col s4">
          <Card title={'TODO'} isMain={true} contentList={TODO} passTask={passToInProccess} returnTask={null} deleteTask={deleteTask} />
        </div>

        <div className="col s4">
          <Card title={'In Proccess'} contentList={InProccess} passTask={passToFinalized} returnTask={returnToTODO} deleteTask={deleteTask} />
        </div>

        <div className="col s4">
          <Card title={'Finalized'} contentList={Finalized} passTask={null} returnTask={returnToInProccess} deleteTask={finalizeTask} />
        </div>
      </div>
    </div>
  </>;
}
