import * as React from 'react';

import NxWelcome from './nx-welcome';

import {Ui} from '@nx-repo/ui'

import { Link, Route, Routes } from 'react-router-dom';

import { loadRemoteModule } from '@nx/react/mf';

const Product = React.lazy(() => loadRemoteModule('product', './Module'));

const Checkout = React.lazy(() => loadRemoteModule('checkout', './Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>

        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Ui title='Home'/>} />

        <Route path="/product" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
