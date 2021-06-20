module.exports = {
  getNumber: function (string) {
    if (typeof string === 'string') {
      return parseFloat(string.split('').filter((el) => el !== ',').join(''));
    }
  }
}