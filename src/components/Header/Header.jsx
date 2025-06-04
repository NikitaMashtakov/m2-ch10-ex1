import { Component } from 'react';
import styles from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <div className="m-auto mb-[10px]">
        <h1 className="text-center delay-100 sm:text-2xl">Деловое приложение</h1>
      </div>
    );
  }
}
