import Allrouts from "./routs/Allrouts";

function App({ toggleTheme, mode }) {
  return (
    <>
      <div style={{ width:"100%" }}>
        <Allrouts toggleTheme={toggleTheme} mode={mode} />
      </div>
    </>
  );
}

export default App;
