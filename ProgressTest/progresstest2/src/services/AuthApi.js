import api from './api';

const AuthApi = {
  // Lấy danh sách chi tiêu theo UserId
  getExpenses: async (userId) => {
    const res = await api.get(`/expenses?userId=${userId}`);
    return res.data;
  },

  // Thêm mới chi tiêu
  addExpense: async (expenseData) => {
    const res = await api.post('/expenses', expenseData);
    return res.data;
  },

  // Cập nhật chi tiêu
  updateExpense: async (id, expenseData) => {
    const res = await api.put(`/expenses/${id}`, expenseData);
    return res.data;
  },

  // Xóa chi tiêu
  deleteExpense: async (id) => {
    await api.delete(`/expenses/${id}`);
    return true;
  }
};

export default AuthApi;