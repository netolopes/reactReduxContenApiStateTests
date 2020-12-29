import React, { createContext, useContext, useState } from 'react';

// CONTEXT
const AuthContext = createContext({});

// PROVIDER
const AuthProvider = ({ children }) => {
  // passar user
  const user = {
    name:"neto lopes",
    color: "red"
  };

  // passar estado de cliente
  const [cliente, setCliente] = useState({
    name:'maria',
    idade:22
  })

   // passar estado de cliente
   const [login, setLogin] = useState({
    name:''
  })
  // injeta no provider para ficar acessivel globalmente
  return (
    <AuthContext.Provider value={{ user, cliente,setCliente ,login, setLogin}} >
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider };