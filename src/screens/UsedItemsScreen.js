import React from 'react';
import NavMenu from '../components/NavMenu';

const UsedItemsScreen = () => {
  const categories = [
    "전체", "디지털기기", "생활가전", "가구/인테리어", "유아동", "생활/가공식품",
    "유아도서", "스포츠/레저", "여성잡화", "여성의류", "남성패션/잡화", "게임/취미",
    "뷰티/미용", "반려동물용품", "도서/티켓/음반", "식물", "기타 중고물품", "삽니다"
  ];

  return (
    <div className="pb-16">
      <NavMenu items={categories} activeItem="전체" onItemClick={() => { }} />

      <div className="p-4">
        <h2 className="font-bold mb-2">인기글</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg p-2">
              <img src={`/api/placeholder/150/150?text=Item ${item}`} alt={`Item ${item}`} className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="font-semibold">아이폰 14 프로</h3>
              <p className="text-sm text-gray-600">850,000원</p>
              <p className="text-xs text-gray-500">서울 용산구 한남동</p>
              <div className="text-xs text-gray-500 mt-1">
                <span>관심 17</span> • <span>채팅 23</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsedItemsScreen;