import Header from "./component/Header";
import Layout from "./component/Layout";
import AboutUs from "./component/AboutUs";
import Dashboard from "./component/Dashboard";
import Info from "./component/Info";
import Faq from "./component/Faq";


import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    < >
      <Header />
      <Layout />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />

        {/* nested routing */}
        <Route path='/about' element={<AboutUs />}>
          <Route path='info' element={<Info />} />
          <Route path='faq' element={<Faq/>} />
        </Route>
      </Routes>


    </>
  );
}

export default App;
