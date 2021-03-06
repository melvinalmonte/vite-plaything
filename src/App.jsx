import { Layout } from "./components/layout";
import { SideBar } from "./components/sidebar";
import { First, Fourth, Second, Third } from "./components/steps/Steps";
import { Wizard } from "./components/wizard";

function App() {
  return (
    <Layout>
      <SideBar>
        <Wizard>
          <First />
          <Second />
          <Third />
          <Fourth />
        </Wizard>
      </SideBar>
    </Layout>
  );
}

export default App;
