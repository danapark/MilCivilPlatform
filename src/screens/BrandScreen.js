import React from 'react';
import NavMenu from '../components/NavMenu';

const BrandScreen = () => {
  const categories = ["전체", "이사", "도배/장판", "인테리어", "청소", "에어컨설치", "빠른배송", "심부름", "기타"];

  return (
    <div className="pb-16">
      <NavMenu items={categories} activeItem="전체" onItemClick={() => { }} />

      <div className="p-4">
        <h2 className="font-bold mb-2">이벤트</h2>
        <div className="flex overflow-x-auto space-x-4">
          {["이사", "도배/장판", "인테리어", "청소"].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img src={`/api/placeholder/160/100?text=${item}`} alt={item} className="w-full h-24 object-cover rounded" />
              <p className="text-sm mt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold mb-2">전체</h2>
        <div className="space-y-4">
          {["프리미엄 에어컨 청소", "프리미엄 오토바이 학습", "프리미엄 소파 청소", "프리미엄 1톤 용달 서비스"].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={`/api/placeholder/80/80?text=Brand ${index + 1}`} alt={item} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item}</h3>
                <p className="text-sm text-gray-600">프리미엄 무료 컨설팅/견적</p>
                <p className="text-sm text-blue-600">{(index + 1) * 50000}원~</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandScreen;