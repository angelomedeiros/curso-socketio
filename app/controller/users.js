module.exports = function (app) {
  var model = app.model.user;
  var service = require('../service/crud')(model);

  return {
    index: function (req, res) {
      service.list().then((result) => {
        console.log(result)
        return res.render( 'users/index' , { data: result.data } );
      })
    }
  }
}