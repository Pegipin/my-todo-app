function component() {
    const element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello' + ' ' + 'webpack';

    return element;
}

document.body.appendChild(component());
