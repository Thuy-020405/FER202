import React, { useReducer, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const initialState = { isOn: true }; // Mặc định đèn bật (sáng)

function reducer(state, action) {
  switch (action.type) {
    case 'toggle': return { isOn: !state.isOn };
    case 'turnOn': return { isOn: true };
    case 'turnOff': return { isOn: false };
    default: return state;
  }
}

function LightSwitch() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme, toggleTheme } = useTheme();

  // Đồng bộ Theme với trạng thái Đèn (Nâng cao)
  useEffect(() => {
    if ((state.isOn && theme === 'dark') || (!state.isOn && theme === 'light')) {
      toggleTheme();
    }
  }, [state.isOn]);

  const containerStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? '#fff' : '#444',
    color: theme === 'light' ? '#000' : '#fff',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <h2>Công Tắc Đèn Hệ Thống</h2>
      <p style={{ fontSize: '20px' }}>
        Trạng thái: <strong>{state.isOn ? 'ĐANG SÁNG (Light)' : 'ĐANG TỐI (Dark)'}</strong>
      </p>
      
      <Button 
        variant={state.isOn ? "secondary" : "light"}
        onClick={() => dispatch({ type: 'toggle' })}
        className="me-2"
      >
        {state.isOn ? 'Tắt Đèn' : 'Bật Đèn'}
      </Button>
      
      <Button variant="success" className="me-2" onClick={() => dispatch({ type: 'turnOn' })}>Bật</Button>
      <Button variant="danger" onClick={() => dispatch({ type: 'turnOff' })}>Tắt</Button>
    </div>
  );
}

export default LightSwitch;