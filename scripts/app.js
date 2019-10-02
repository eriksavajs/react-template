'use strict';

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {

    visibility = !visibility;
    render();
};

var visibility = false;

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { name: 'boton', onClick: toggleVisibility },
            visibility ? 'Hide details' : 'Show message'
        ),
        React.createElement(
            'p',
            null,
            visibility && React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'This is the message'
                )
            )
        )
    );

    // eslint-disable-next-line no-undef
    ReactDOM.render(template, appRoot);
};

render();
