import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "./Providers/ThemeProvider";
import Layout from "./componens/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <Layout>
             <App/>
         </Layout>
      </ThemeProvider>
  </React.StrictMode>
);

