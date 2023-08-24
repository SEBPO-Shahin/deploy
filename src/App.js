
import './App.css';
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import CareerLayout from './layouts/CareerLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="career" element={<CareerLayout />}>
        <Route index element={<CareerLayout />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
   
  <RouterProvider router={router} />

  );
}

export default App;
