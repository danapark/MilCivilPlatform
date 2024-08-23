import React from 'react';
import { Menu, Search, Home, Bell, User } from 'lucide-react';

const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
    <button className="flex flex-col items-center">
      <Menu className="w-6 h-6" />
      <span className="text-xs">전체 메뉴</span>
    </button>
    <button className="flex flex-col items-center">
      <Search className="w-6 h-6" />
      <span className="text-xs">검색</span>
    </button>
    <button className="flex flex-col items-center">
      <Home className="w-6 h-6" />
      <span className="text-xs">홈</span>
    </button>
    <button className="flex flex-col items-center">
      <Bell className="w-6 h-6" />
      <span className="text-xs">알림</span>
    </button>
    <button className="flex flex-col items-center">
      <User className="w-6 h-6" />
      <span className="text-xs">MY</span>
    </button>
  </footer>
);

export default Footer;