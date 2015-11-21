Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/location');

Router.route('/work');

Router.route('/contact');
