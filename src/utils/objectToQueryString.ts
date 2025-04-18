const objectToQueryString = (obj: Record<string, any> = {}): string => {
  const queryParams: string[] = [];

  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (value !== null && value !== undefined) {
      let encodeValue: string;
      if (Array.isArray(value) && value.length > 0) {
        encodeValue = `${encodeURIComponent(key)}=${encodeURIComponent(value.join('|'))}`;
      } else {
        encodeValue = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }

      queryParams.push(encodeValue);
    }
  });

  return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
};

export default objectToQueryString;
