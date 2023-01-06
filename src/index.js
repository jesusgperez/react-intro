import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// function App(props){
//     return (
//         <h1>¡{props.saludo}, {props.nombre}!</h1>
//     )
// }

// function withSaludo(saludo) {
//     return function WrappedComponentWithSaludo(WrappedComponent) {
//         return function ComponenteDeVerdad(props){
//             return (
//                 <>
//                     <WrappedComponent {...props} saludo={saludo}/>
//                     <p>Estamos acompañando al WrappedComponent</p>
//                 </>
//             )
//         }
//     }
// }

// const AppWithSaludo = withSaludo('Buenaaas')(App)

// root.render(
//     <AppWithSaludo nombre='Jesús'/>
// );