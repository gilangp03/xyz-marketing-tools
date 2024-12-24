import React from 'react';
import { RouteObject } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

// Mendefinisikan semua routes dalam bentuk array objek
export const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Dashboard),
  },
];
