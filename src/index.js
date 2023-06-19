import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/input.css';
import './styles/index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.Fragment>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
	</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
