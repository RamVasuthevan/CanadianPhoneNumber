window.onload = function() {
    const content = document.getElementById('content');
    const path = window.location.pathname.split('/'); // ['/', 'phonenumber', '416-123-1234']

    if (path[1] !== 'phonenumber') {
        show404();
        return;
    }

    const phoneNumber = path[2];
    if (isTorontoNumber(phoneNumber)) {
        content.innerHTML = `
            <h1>Phone Number: ${phoneNumber}</h1>
            <p>This is a Toronto phone number.</p>
        `;
    } else {
        show404();
    }
};

function isTorontoNumber(number) {
    if (!number) return false;

    var areaCode = number.split('-')[0];
    return areaCode === '416' || areaCode === '647' || areaCode === '437';
}

function show404() {
    document.getElementById('content').innerHTML = '<h1>404 - Not Found</h1>';
}
