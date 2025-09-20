import { useI18n } from "vue-i18n";

export function useGlobals() {
  const { locale } = useI18n(); // Vue i18n

  function getInteredYearsNnObject(object, years) {
    return Object.fromEntries(
      Object.entries(object || {})
        .map(([y, v]) => [parseInt(y), v])
        .filter(([y]) => years.includes(y))
    )
  }

  const aggregatedData = (data) => {
    const totals = {};
    data?.forEach(item => {
      for (const key in item) {
        if (key === 'soato') continue;
        if (!totals[key]) {
          totals[key] = 0;
        }
        if (typeof Number(item[key]) == 'number') {
          totals[key] += Number(item[key]);
        }
      }
    });

    return totals;
  };

  return {
    t,
    fullpath,
    aggregatedData,
    breakAfterNWords,
    getInteredYearsNnObject,
  };
}
