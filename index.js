class Formatter {
  static capitalize(str) {
    // str.charAt(0).toUpperCase()
    // return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
    
  }
  static titleize(str) {
    let stayLowercase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    str = str.split(' ');
    return str.map(idx => {
      if (str[0] === idx) {
        return idx.charAt(0).toUpperCase() + idx.slice(1); 
      }

      else if (stayLowercase.includes(idx)) {
        return idx;
      }
      else {
        return idx.charAt(0).toUpperCase() + idx.slice(1); 
      }
    }).join(" "); 
  }
}