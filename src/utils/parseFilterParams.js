const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isContactTyper = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactTyper(contactType)) return contactType;
};

export const parseIsFavourite = (isFavourite) => {
  if (typeof isFavourite === 'boolean') {
    return isFavourite;
  } else if (typeof isFavourite === 'string') {
    if (isFavourite.toLowerCase() === 'true') {
      return true;
    } else if (isFavourite.toLowerCase() === 'false') {
      return false;
    }
  }
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
