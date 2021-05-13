import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import RenderLists from "./components/1_RenderLists";
import Content from "./components/3_Content";
import ComponentLifecycle from "./components/2_ComponentLifecycle";
import ContentHooks from "./components/4_ContentHooks";
import ContentAPI from "./components/5_ContentAPI";
import ContentAPIHooks from "./components/6_ContentAPIHooks";
import ContentAPIHooksCopy from "./components/6_ContentAPIHooksCopy";

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      {/* <NavBarSimple /> */}
      <Sidebar />
      {/* <RenderLists /> */}
      {/* <ComponentLifecycle /> */}
      <Content />
      {/* <ContentHooks /> */}
      {/* <ContentAPI /> */}
      {/* <ContentAPIHooks /> */}
      {/* <ContentAPIHooksCopy /> */}
      

    </div>
  );
}

export default App;
