import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import LinkRect from './components/LinkReact';
import Name from './components/Name';
import Button from './components/Button/Button';
import Person from './components/Person/Person';
import People from './components/People/People';
import NoHacer from './components/No_hacer';

function App() {
  const text = "Buenos días. React!!!";
  const name1 = 'Gabi';
  const name3 = 'Lolo';
  return (
    <div className='App'>
      <Navbar text='Navbar Pepe React!'/>
      <header className='App-header'>

        <NoHacer text='propsClass'/>
        <Button text={"Button React"} />
        <Button text={"Button React"} color='black' />
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LinkRect href='https://www.google.es' text={text} />
      </header>
      <main>
        <Name name={name1}/>
        <Name name='Pepe'/>
        <Name name={name3}/>
      </main>
      <People>
        <div>
          <Person num={12} user={{ name: 'Lolo', surname: 'lilo', age: 42}} />
        </div>
        <div>
          <Person num={43} user={{ name: 'Pepe', surname: 'mimo', age: 12}} />
        </div>
      </People>
    </div>
  );
}

export default App;
