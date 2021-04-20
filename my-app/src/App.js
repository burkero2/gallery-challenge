import css from './App.module.css';
import NavBarClass from './components/NavBarClass';
import NavBarFunc from './components/NavBarFunc';
// import NavBarClass from './components/NavBarClass';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarClass /> */}
      <NavBarFunc />
      <Sidebar />
    </div>
  );
}

export default App;
