import css from './App.module.css';
import Content from './components/Content';
import Footer from './components/Footer';
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
      <Content />
      <Footer />
    </div>
  );
}

export default App;
