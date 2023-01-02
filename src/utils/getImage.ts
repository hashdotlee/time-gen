export function getImage(category: string, width?: number, height?: number) {
  return `https://api.lorem.space/image/${category}?w=${width || 150}&h=${height || 150
    }`;
}
