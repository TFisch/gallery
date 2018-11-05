import { harvardKey } from './apiKeys';

export const fetchPaintings = async () => {
  const url = `https://api.harvardartmuseums.org/object?culture=37527795&classification=26&size=100&apikey=${harvardKey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
