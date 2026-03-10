import React from 'react';

const TotalExpenseCard = ({ expenses }) => {
  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div className="mt-1">
      <h4 className="fw-bold mb-0">
        {total.toLocaleString()} đ
      </h4>
    </div>
  );
};

export default TotalExpenseCard;