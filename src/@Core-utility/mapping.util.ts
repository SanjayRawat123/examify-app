// mapping.util.ts
// mapping.util.ts
export function mapDataToObject<T extends object>(data: any, target: T): T {
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        key in target
      ) {
        mapDataToObject(data[key], (target as any)[key]);
      } else if (key in target) {
        (target as any)[key] = data[key];
      }
    }
  }
  return target;
}
