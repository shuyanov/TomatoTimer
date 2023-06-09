import React from 'react';
import './App.css';

import { Layout } from './Component';
import { Header } from './Component/molecules/Header/Header';
import { Footer } from './Component/molecules/Footer/Footer';
import { TimerPage } from './Component/Organism/TimerPage/TimerPage';

function App() {
  return (
    <div className="app">
      <Layout.Header>
        <Header />
      </Layout.Header>

      <Layout.Body>
        <TimerPage />
      </Layout.Body>

      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </div>
  );
}

export default App;
