import { Layout } from "./components/layout";
import { SideBar } from "./components/sidebar";

function App() {
  const repeat = [...Array(100).keys()];
  return (
    <Layout>
      <SideBar>
        {repeat.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </SideBar>
    </Layout>
  );
}

export default App;
