var KallyRazor  = require('kally-razor');
var path        = require('path');

module.exports = function (config) {
    var razor = new KallyRazor({
        root: path.normalize(path.join(__dirname, '..', 'views')),
        layout: path.join('shared', '_layout.html')
    });

    return {
        index: function (req, res) {
            res.send(razor.render(path.join('home', 'index.html'), { activeTab: 'home' }));
        },

        about: function (req, res) {
            res.send(razor.render(path.join('home', 'about.html'), { activeTab: 'about' }));
        }
    };
};
