import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Koala from '../assets/koala'
import CustomHead from '../components/CustomHead';
import ContextProvider from '../components/ContextProvider';
import ListItems from '../components/ListItems';

export default function App() {
  return (
    <ContextProvider>
      <CustomHead />
      <div className="App">
        <header className="App-header">
          <Koala />
          <h1>Naked Koala</h1>
          <h3>Oils</h3>
          <ListItems/>
        </header>
      </div>
    </ContextProvider>
  );
}