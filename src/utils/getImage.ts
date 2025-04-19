const getImage = (url: string) => {
  return `${process.env.NEXT_PUBLIC_FILE_URL}${url}`;
};

export default getImage;
