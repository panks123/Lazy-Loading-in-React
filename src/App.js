import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Loading from './components/Loading';

import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
// Note: Keep all other imports at the top of below dynamic imports otherwise errors will come

const Home = React.lazy(() => import('./components/Home'));
const Contact = React.lazy(() => import('./components/Contact'))
const About = React.lazy(() => import('./components/About'))
const Navbar = React.lazy(() => import('./components/Navbar'))


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <hr />
        <ErrorBoundary> {/* Wrapping everything inside a ErrorBoundary to avoid isuues due to promise resections in React.Lazy */}
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
            </Routes>
          </React.Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;

/* To view the lazy loading in this app go to network tab in Browser's dev tool and set network loading to 'slow 3G' */
