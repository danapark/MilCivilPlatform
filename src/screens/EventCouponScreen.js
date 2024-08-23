import React from 'react';
import NavMenu from '../components/NavMenu';

const EventCouponScreen = () => {
  return (
    <div className="pb-16">
      <NavMenu
        items={["전체", "디지털기기", "생활가전", "가구/인테리어", "여행", "건강/미용", "식품", "패션/의류", "자동차용품", "기타"]}
        activeItem="전체"
        onItemClick={() => { }}
      />

      <div className="p-4">
        <h2 className="font-bold mb-2">이벤트</h2>
        <div className="flex overflow-x-auto space-x-4">
          {["에버랜드 군인/공무원35%할인", "VIPS할인35%", "이사 20%할인", "스포츠용품 15%할인"].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-40">
              <img src={`/api/placeholder/160/100?text=${item}`} alt={item} className="w-full h-24 object-cover rounded" />
              <p className="text-sm mt-1">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold mb-2">할인쿠폰</h2>
        <div className="grid grid-cols-2 gap-4">
          {["ANNIVERSARY VIP 쿠폰", "여름 이벤트 15% 할인", "GRAND OPEN 20%", "SUMMER EVENT 50%"].map((coupon, index) => (
            <div key={index} className="border rounded-lg p-2">
              <img src={`/api/placeholder/160/100?text=${coupon}`} alt={coupon} className="w-full h-24 object-cover rounded mb-2" />
              <p className="text-sm font-semibold">{coupon}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold mb-2">신제품</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "SSG 상품권 3만원권", price: 29400, discount: 2 },
            { name: "이마트 상품권 3만원권", price: 27000, discount: 10 },
            { name: "SSG 상품권 5만원권", price: 49000, discount: 2 },
            { name: "SSG 상품권 4만원권", price: 39200, discount: 2 }
          ].map((product, index) => (
            <div key={index} className="border rounded-lg p-2">
              <div className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full w-fit mb-2">
                {product.discount}%
              </div>
              <img src={`/api/placeholder/160/100?text=${product.name}`} alt={product.name} className="w-full h-24 object-cover rounded mb-2" />
              <p className="text-sm font-semibold">{product.name}</p>
              <p className="text-sm text-blue-600">{product.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCouponScreen;