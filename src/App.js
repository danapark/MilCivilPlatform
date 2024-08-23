import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CommunityScreen from './screens/CommunityScreen';
import UsedItemsScreen from './screens/UsedItemsScreen';
import BrandScreen from './screens/BrandScreen';
import QuoteRequestScreen from './screens/QuoteRequestScreen';
import EventCouponScreen from './screens/EventCouponScreen';
import RealEstateScreen from './screens/RealEstateScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('community');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'community':
        return <CommunityScreen />;
      case 'usedItems':
        return <UsedItemsScreen />;
      case 'brand':
        return <BrandScreen />;
      case 'quoteRequest':
        return <QuoteRequestScreen />;
      case 'eventCoupon':
        return <EventCouponScreen />;
      case 'realEstate':
        return <RealEstateScreen />;
      default:
        return <CommunityScreen />;
    }
  };

  const getTitle = () => {
    switch (currentScreen) {
      case 'community':
        return '커뮤니티';
      case 'usedItems':
        return '중고거래/나눔';
      case 'brand':
        return '브랜드';
      case 'quoteRequest':
        return '견적신청';
      case 'eventCoupon':
        return '신상품/이벤트';
      case 'realEstate':
        return '부동산 정보';
      default:
        return '군인/공무원 가족';
    }
  };

  return (
    <div className="max-w-2xl mx-auto font-sans text-gray-800">
      <Header title={getTitle()} />
      <nav className="flex justify-between p-2 bg-gray-100 overflow-x-auto text-sm">
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('community')}>커뮤니티</button>
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('usedItems')}>중고거래/나눔</button>
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('brand')}>브랜드</button>
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('quoteRequest')}>견적신청</button>
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('eventCoupon')}>신상품/이벤트</button>
        <button className="px-2 py-1 whitespace-nowrap hover:text-blue-600" onClick={() => setCurrentScreen('realEstate')}>부동산 정보</button>
      </nav>
      <div className="bg-blue-100 p-4 mt-2">
        <h2 className="font-bold text-sm">프리미엄</h2>
        <p className="text-xs mt-1">평범 높은 고수들의 특별 혜택 전</p>
      </div>
      <main className="p-4">
        {renderScreen()}
      </main>
      <Footer />
    </div>
  );
}