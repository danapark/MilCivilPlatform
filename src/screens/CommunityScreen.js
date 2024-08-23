import React, { useState } from 'react';
import NavMenu from '../components/NavMenu';

const CommunityScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const categories = ["전체", "관사정보", "학교/유치원/어린이집", "학원/과외", "맛집", "동네소식", "생활정보", "취미생활", "기타"];
  const regions = ["전체", "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];

  const posts = [
    { id: 1, title: "관사 생활 팁", category: "관사정보", region: "서울", content: "관사 생활에 도움되는 팁을 공유합니다..." },
    { id: 2, title: "추천 학원", category: "학원/과외", region: "경기", content: "우리 동네 추천 학원 정보입니다..." },
    { id: 3, title: "주말 나들이 장소", category: "동네소식", region: "부산", content: "이번 주말 가족과 함께 갈만한 장소를 소개합니다..." },
    // 더 많은 게시글...
  ];

  const filteredPosts = selectedRegion === '전체' ? posts : posts.filter(post => post.region === selectedRegion);

  return (
    <div className="pb-16">
      <NavMenu items={categories} activeItem="전체" onItemClick={() => {}} />
      
      <div className="mt-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">게시글</h2>
        <select 
          value={selectedRegion} 
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 space-y-4">
        {filteredPosts.map(post => (
          <div key={post.id} className="border rounded-lg p-3">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{post.content}</p>
            <div className="text-xs text-gray-500 mt-2 flex justify-between">
              <span>{post.category}</span>
              <span>{post.region}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityScreen;