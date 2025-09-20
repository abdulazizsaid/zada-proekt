export function orderBy(data, field, type = 'asc', byLength = false) {
  if (data && data.length) {
    data.sort((a, b) => {
      if (!byLength) {
        if (a[field] > b[field]) {
          if (type == 'asc') {
            return 1;
          }
          if (type == 'desc') {
            return -1;
          }
        }
        if (a[field] < b[field]) {
          if (type == 'asc') {
            return -1;
          }
          if (type == 'desc') {
            return 1;
          }
        }
      } else {
        if (a[field].length > b[field].length) {
          if (type == 'asc') {
            return 1;
          }
          if (type == 'desc') {
            return -1;
          }
        }
        if (a[field].length < b[field].length) {
          if (type == 'asc') {
            return -1;
          }
          if (type == 'desc') {
            return 1;
          }
        }
      }
      return 0;
    });
  }
  return data;
}

export function getSalayByCoefficientAndRate(coefficient, rate) {
  if (coefficient && rate) {
    rate = Number(rate);
    coefficient = Number(coefficient);
    let salary = coefficient * process.env.VUE_APP_MROT;
    salary = salary * rate;
    return Math.round(salary * 100) / 100;
  }
  return '';
}

export function clearEmptyParams(object) {
  Object.keys(object).forEach(key => {
    if (object[key] === undefined || object[key] === null || object[key] === '') {
      delete object[key];
    }
  });
  return object;
}

export function generatePagination(currentPage, totalPages) {
  if (totalPages > 1) {
    let offset = 4;
    let from = currentPage - offset;
    if (from < 1) {
      from = 2;
    }
    let to = from + offset * 2;
    if (to >= totalPages) {
      let diff = to - totalPages;
      to = totalPages;
      from = from - diff;
      if (from < 1) {
        from = 2;
      }
    }
    let pagesArray = [1];
    for (let page = from; page < to; page++) {
      pagesArray.push(page);
    }
    pagesArray.push(totalPages);
    return pagesArray;
  }
  return [];
}

export function getTotal(data, field) {
  let total = 0;
  if (data && data.length && isset(data[0][field])) {
    data.forEach(item => {
      total += Number(item[field]);
    });
  }
  return total;
}

export function firstCharUppercase(string) {
  if (typeof string == 'string' && string.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

export function cloneObject(object) {
  let jsonStr = JSON.stringify(object);
  return JSON.parse(jsonStr);
}

export function getPercentage(totalCount, count){
  if (isNaN(totalCount) || isNaN(count) || !count || !totalCount) {
    return 0
  }
  let result = ((count / totalCount) * 100)
  return Math.round(result * 100) / 100
}

export function isset(variable) {
  return typeof (variable) != "undefined" && variable !== null;
}

export function getNumber(string) {
  return String(string).replace(/[^0-9]/g, '');
}

export function monthToYears(monthCount){
  if(monthCount){
    let years = monthCount/12;
    if(!Number.isInteger(years)){
      years = Math.floor(years);
      return {
        year: years,
        month: monthCount - (years*12),
      }
    }else{
      return {
        year: years,
        month: 0,
      }
    }
  }
  return null;
}