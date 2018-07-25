/**
 * Created by morenyang on 2018/7/25.
 */
import decamelize from 'decamelize';

function convertToFilterStyle(filterParams = {}) {
  const legalKeys = [
    'brightness',
    'contrast',
    'grayscale',
    'hueRotate',
    'opacity',
    'saturate',
    'sepia',
    'invert',
  ];
  return Object.keys(filterParams)
    .filter(key => legalKeys.includes(key))
    .map(key => `${decamelize(key, '-')}(${filterParams[key]})`)
    .join(' ');
}

export default convertToFilterStyle;
