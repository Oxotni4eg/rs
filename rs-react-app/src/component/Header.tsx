import React from 'react';

type HeaderProps = {
  searchTerm: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onInputChange,
  onSearch,
}) => {
  return (
    <div className="header">
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        placeholder="Search"
        className="header-input"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default Header;
