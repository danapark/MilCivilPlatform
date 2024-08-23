import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header = ({ title }) => (
  <header className="flex justify-between items-center p-4 border-b">
    <h1 className="text-xl font-bold">{title}</h1>
    <div className="flex items-center">
      <Search className="w-5 h-5 mr-2" />
      <Bell className="w-5 h-5 mr-2" />
      <span className="text-sm text-blue-600">가족가입</span>
    </div>
  </header>
);

export default Header;