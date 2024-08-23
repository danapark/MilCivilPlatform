import React from 'react';
import NavMenu from '../components/NavMenu';

const RealEstateScreen = () => {
  const categories = ["부동산 뉴스", "매물 정보", "시세 정보", "청약 정보", "부동산 상담"];

  return (
    <div className="pb-16">
      <NavMenu items={categories} activeItem="부동산 뉴스" onItemClick={() => {}} />
      
      <div className="mt-4">
        <h2 className="font-bold text-lg mb-2">최신 부동산 뉴스</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-3">
              <h3 className="font-semibold mb-1">부동산 시장 동향 {item}</h3>
              <p className="text-sm text-gray-600">최근 부동산 시장의 변화와 향후 전망에 대한 분석...</p>
              <p className="text-xs text-gray-500 mt-1">2023년 8월 {item}일</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="font-bold text-lg mb-2">추천 매물</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg overflow-hidden">
              <img src={`/api/placeholder/160/100?text=Property ${item}`} alt={`Property ${item}`} className="w-full h-32 object-cover" />
              <div className="p-2">
                <h3 className="font-semibold text-sm">아파트 {item}</h3>
                <p className="text-xs text-gray-600">서울시 강남구</p>
                <p className="text-sm font-bold mt-1">3억 5,000만원</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateScreen;