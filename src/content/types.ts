export enum Categories {
  BLOG = 'blog',
  GALLERY = 'gallery',
  MISC = 'misc'
}

export type ImageType = {
  img: string,
  title: string,
  rows?: number,
  cols?: number,
}

export type Contents = {
  id: string,
  title: string,
  category: Categories,
  date: string,
  place: string,
  content: string,
  thumbSrc: string,
  images?: ImageType[],
}