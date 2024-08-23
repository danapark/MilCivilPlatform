import React from 'react';

const MovingQuoteScreen = () => {
  return (
    <div className="pb-16 p-4">
      <h2 className="font-bold mb-4">이사 견적신청</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">지역선택</h3>
          <div className="flex space-x-2">
            <button className="border rounded px-4 py-2 bg-blue-500 text-white">출발지</button>
            <button className="border rounded px-4 py-2">도착지</button>
            <button className="border rounded px-4 py-2">거리계산</button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">이사 용량</h3>
          <div className="grid grid-cols-3 gap-2">
            {["1톤트럭이하", "5톤트럭이하", "6톤트럭", "7톤트럭", "7톤트럭이상", "해당없음"].map((option, index) => (
              <button key={index} className="border rounded px-4 py-2">{option}</button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">보관기간</h3>
          <div className="flex space-x-2">
            <button className="border rounded px-4 py-2">기간선택</button>
            <button className="border rounded px-4 py-2">기간 스팟</button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">출발지 사다리차/엘리베이터</h3>
          <div className="flex space-x-2">
            <button className="border rounded px-4 py-2">사다리차</button>
            <button className="border rounded px-4 py-2">엘리베이터</button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">도착지 사다리차/엘리베이터</h3>
          <div className="flex space-x-2">
            <button className="border rounded px-4 py-2">사다리차</button>
            <button className="border rounded px-4 py-2">엘리베이터</button>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4">
          무료 견적신청
        </button>
      </div>
    </div>
  );
};

export default MovingQuoteScreen;