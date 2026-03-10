import React, { createContext, useReducer, useContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

function authReducer(state, action) {
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
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (username, password) => {
    try {
      // Gọi đúng bảng 'users' và params từ db.json
      const res = await api.get('/users', {
        params: { username, password }
      });

      if (res.data.length === 1) {
        const user = res.data[0];
        dispatch({ type: 'LOGIN', payload: user });
        return { success: true };
      } else {
        return { success: false, message: 'Invalid username or password!' };
      }
    } catch (error) {
      return { success: false, message: 'Server connection error!' };
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);