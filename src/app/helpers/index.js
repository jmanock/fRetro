var ng = require('@angular/core');

module.exports = ng.Component({
  selector: 'fountain-helpers',
  template: require('./form.html'),
  inputs: ['tech']
})
.Class({
  constructor: function () {}
});
