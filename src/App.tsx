import React from 'react';
import  style from './App.module.css';
import {SettingCount} from "./components/SettingCount/SettingCount";
import {Counter} from "./components/Counter/Counter";

function App() {
  return (
      <div className={style.block}>
        <Counter />
        <SettingCount />
      </div>
  );
}
export default App;
