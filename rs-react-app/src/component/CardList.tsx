import React from 'react';
import Card from './Card';

type SearchResult = {
  url: string;
  name: string;
  model: string;
};

type CardListProps = {
  results: SearchResult[];
};

const CardList: React.FC<CardListProps> = ({ results }) => {
  return (
    <table>
      <tbody>
        {results.length ? (
          <tr>
            <th>Name</th>
            <th>Model</th>
          </tr>
        ) : (
          ''
        )}
        {results.map((item) => (
          <Card key={item.url} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default CardList;
