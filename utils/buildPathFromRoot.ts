import path from 'path';

export default (...args: string[]): string => {
  if (args.length === 0) return '';
  return path.join(__dirname, '..', ...args);
}
