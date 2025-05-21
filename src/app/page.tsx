import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import LoginPage from './auth/login/page';
import ProductPage from './dashboard/dashboard/page';

export default function AppPage() {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}