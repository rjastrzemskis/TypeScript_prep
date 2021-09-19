/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    const obj = Object.create(null);
    str
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .forEach(function(i) {
        obj[i] = obj[i] ? ++obj[i] : 1;
      });
    return obj;
  }
}

export { Words };
