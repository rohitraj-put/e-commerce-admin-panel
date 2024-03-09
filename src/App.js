import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sign from './layout/Sign';
import Active from './AdminPannel/Active';
import View from './AdminPannel/View';
import Update from './AdminPannel/Update';
import Suspend from './AdminPannel/Suspend';
import Edit from './AdminPannel/Edit';
import DelteItem from './AdminPannel/DelteItem';
import CardView from './AdminPannel/CardView';
import InsertData from './AdminPannel/InsertData';
import PageNotFound from './layout/PageNotFound';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign' element={<Sign />}>
          <Route path='active' element={<Active />} />
          <Route path='insert' element={<InsertData />} />
          <Route path='view' element={<View />} />
          <Route path='view/:id' element={<CardView />} />
          <Route path='update' element={<Update />} />
          <Route path='update/:id' element={<Edit />} />
          <Route path='suspend' element={<Suspend />} />
          <Route path='suspend/:id' element={<DelteItem />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
