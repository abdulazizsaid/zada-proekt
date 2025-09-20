import { useI18n } from "vue-i18n";

export function useGlobals() {
  const { locale } = useI18n();

  const fullpath = (path) => {
    return process.env.VUE_APP_API_BASE_URL + '/' + path;
  }

  function t(object, column_param) {
    if (object && typeof object == 'object') {
      if (!column_param) column_param = 'name';
      var column = `${column_param}_${locale.value}`
      if (object[column]) {
        return object[column]
      }

      if (locale.value == 'oz') {
        column = `${column_param}_uz`;
        return object[column] ? object[column] : ''
      }
    }
    if (typeof object == 'string') {
      return object;
    }
    return '';
  }

  function breakAfterNWords(text, n = 5) {
    if (!text) return "";

    const words = text.split(" ");
    return words
      .map((word, index) => ((index + 1) % n === 0 ? word + "<br>" : word))
      .join(" ");
  }

  return {
    t,
    fullpath,
    aggregatedData,
    breakAfterNWords,
    getInteredYearsNnObject,
  };
}
