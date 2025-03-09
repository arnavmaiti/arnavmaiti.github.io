export enum Categories {
  BLOG = 'blog',
  GALLERY = 'gallery',
  MISC = 'misc'
}
export type Contents = {
  id: string,
  title: string,
  category: Categories,
  date: string,
  content: string,
  thumbSrc: string,
  imageSrcs: string[],
}