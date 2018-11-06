import { harvardKey } from './apiKeys';
import { cleanData } from './helper';

export const fetchPaintings = async () => {
  const url = `https://api.harvardartmuseums.org/object?culture=37527795&classification=26&size=100&apikey=${harvardKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const cleanPaintings = await cleanData(data);
  return cleanPaintings;
};

export const fetchObjectById = id => {
  const url = `https://api.harvardartmuseums.org/object?relatedto=${id}&apikey=${harvardKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const cleanObject = await cleanData(data);
  return cleanObject;
}