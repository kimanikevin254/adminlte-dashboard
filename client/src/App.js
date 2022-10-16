import Header from './components/Header';
import SideBar from './components/Sidebar';
import Content from './components/Content';

import { useEffect, useState } from 'react';

function App() {
  let [salesData, setSales] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(data => setSales(data))
  }, [])

  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content salesData={salesData} />
    </div>
  );
}

export default App;

