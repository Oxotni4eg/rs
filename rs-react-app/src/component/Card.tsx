import React from 'react';

type SearchResult = {
  url: string;
  name: string;
  model: string;
};

const Card: React.FC<{ item: SearchResult }> = ({ item }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.model}</td>
    </tr>
  );
};

export default Card;
