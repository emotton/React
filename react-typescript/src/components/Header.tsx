import React from 'react';

interface HeaderProps {
    title: string;
    subtitle?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return <div>
        <header>{props.title}</header>
        <h2>{props.subtitle}</h2>
        <div>{props.children}</div>
      </div>;
}

export default Header;