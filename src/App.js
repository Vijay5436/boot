import React from 'react';
import './App.css';
import { Button, DatePicker, version, Layout,Avatar ,Menu, TimePicker,Divider} from "antd";
import { UserOutlined,KeyOutlined } from '@ant-design/icons'
import "antd/dist/antd.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faLock,faLockOpen,faUser } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} color="brown" />

  
  return (
    <div className="App">
       <h2>Login to coffee World {element}</h2>
        <div id='contant'>
          <div id='user' className="input-group"> 
          <span className="input-group-addon"><FontAwesomeIcon icon={faUser} /></span>
          <input placeholder='user' ></input>
          </div>
          <div id='user' className="input-group"> 
          <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
          <input placeholder='password' ></input>
          </div>
          <Divider />
          <div class="bottom">
            <DatePicker />
            <Button type="primary" style={{ marginLeft: 8 }}>
              Enter
            </Button>
          </div>
          
          <TimePicker
            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
          /> <div className='clear'></div>
          <button  className="btn btn-success bottom">  hello click</button>
        </div>
  <FontAwesomeIcon style={{color:"red"}} icon={faLockOpen} />
    </div>
  );
}

export default App;
