import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from './components/hello-world';
import Index from './components/labs';
import Tuiter from './components/tuiter';
import HomeScreen from './components/tuiter/HomeScreen';
import ExploreScreen from './components/tuiter/ExploreScreen';
import Profile from './components/tuiter/Profile';
import EditProfile from './components/tuiter/EditProfile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello"
                         exact={true}
                         element={<HelloWorld/>}/>
                  <Route path="/"
                         exact={true}
                         element={<Index/>}/>
                  <Route path="tuiter"
                         element={<Tuiter/>}>
                      <Route index
                             path="home"
                             element={<HomeScreen/>}/>
                      <Route path="explore"
                             element={<ExploreScreen/>}/>
                      <Route path="profile"
                             element={<Profile/>}/>
                      <Route path="editprofile"
                             element={<EditProfile/>}/>
                  </Route>

              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;

