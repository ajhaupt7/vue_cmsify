module.exports = {
  content: {
    permalink: ':slug',
    page: '/_post',
    isPost: false,
    generate: [
      'get',
      'getAll'
    ]
  }
}
