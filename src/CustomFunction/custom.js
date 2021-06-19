module.exports = {
  getNumber: function (string) {
    if (typeof string === 'string') {
      return parseInt(string.split('').filter((el) => el !== ',').join(''));
    }
  }
  
}