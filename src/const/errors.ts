export const ErrorRoot = {
  // general
  ERROR_SERVER: 'errorServer',
};

const DictionaryTranslations = {
  [ErrorRoot.ERROR_SERVER]: ErrorRoot.ERROR_SERVER,
   'Internal server error': ErrorRoot.ERROR_SERVER
};

export const getValidationError = (code: keyof typeof ErrorRoot) =>
  DictionaryTranslations[code] ?? DictionaryTranslations['ERROR_SERVER'];
