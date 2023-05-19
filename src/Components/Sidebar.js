import React from 'react';

function Sidebar() {
  const sidebarItems = ['Home', 'About', 'Contact'];

  return (
    <div className="sidebar">
      {sidebarItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default Sidebar;
