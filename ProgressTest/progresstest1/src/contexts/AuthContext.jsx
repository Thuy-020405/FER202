import React, { createContext, useReducer, useContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

const initialState = { 
  user: JSON.parse(localStorage.getItem('user')) || null 
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': 
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case 'LOGOUT': 
      localStorage.removeItem('user');
      return { ...state, user: null };
    default: 
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function login(identifier, password) {
    try {
      const isEmail = identifier.includes('@');
      const params = isEmail ? { email: identifier, password } : { username: identifier, password };
      
      const res = await api.get('/accounts', { params });
      
      if (res.data.length === 1) {
        const account = res.data[0];
        S
        if (account.role !== 'admin') {
          return { ok: false, message: 'Access denied. Only admin users can login.' };
        }
        
        if (account.status === 'locked') {
          return { ok: false, message: 'Account is locked. Please contact admin.' };
        }

        dispatch({ type: 'LOGIN', payload: account });
        return { ok: true, account };
      }
      return { ok: false, message: 'Invalid username/email or password.' };
    } catch (error) {
      return { ok: false, message: 'Server error. Please try again later.' };
    }
  }

  function logout() { 
    dispatch({ type: 'LOGOUT' }); 
  }

  return (
    <AuthContext.Provider value={{ state, user: state.user, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() { 
  return useContext(AuthContext); 
}