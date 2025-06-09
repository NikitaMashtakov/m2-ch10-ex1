import { Header } from 'components/Header/Header';
import styles from './App.module.css';
import AllTodoPage from 'pages/AllTodosPage/AllTodosPage';
import { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <AllTodoPage />
      </div>
    );
  }
}

export default App;
