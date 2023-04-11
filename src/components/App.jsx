import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import './App.css';

import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';
import { RestrictedRoute } from './Utils/RestrictedRoute';
import { PrivateRoute } from './Utils/PrivateRoute';

import Layout from './Layout/Layout';
import NoRoot from '../pages/NoRoot/NoRoot';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={Login} redirectTo="/contacts" />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute component={Register} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route path="*" element={<NoRoot />} />
      </Routes>

      {/* <Container> */}
      {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}

      {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is content</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, aliquid? Sapiente nisi minima ab. Unde consequatur
              quia id nihil distinctio.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}
      {/* 
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter />
        <ContactList />
      </Container> */}
    </>
  );
};

// function App() {
//   const [count, setCount] = useState(0);

//   function reverseWords(str) {
//     return str.split('').reverse().join('').split(' ').reverse().join(' ');
//   }

//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="./vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount(count => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }

// export default App;
