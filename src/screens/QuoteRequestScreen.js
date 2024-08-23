import React from 'react';

const QuoteRequestScreen = () => {
  return (
    <div className="pb-16">
      <h2 className="font-bold p-4">인기 서비스</h2>
      <div className="grid grid-cols-3 gap-4 p-4">
        {["에어컨 설치 및 수리", "이사/입주 청소", "도배 시공", "도우미", "이사", "기타"].map((service, index) => (
          <div key={index} className="text-center">
            <img src={`/api/placeholder/100/100?text=${service}`} alt={service} className="w-full h-24 object-cover rounded mb-2" />
            <p className="text-sm">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteRequestScreen;