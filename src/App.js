import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Modal from './components/Modal'
import RegisterForm from './components/RegisterForm'

function App() {
  const [isModalVisibel, setIsModalVisible] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setIsModalVisible(true)}>Open</button>
      {isModalVisibel ? <Modal children={<RegisterForm/>} onClose={() => setIsModalVisible(false)}/> : null}
    </div>
  );
}

export default App;
