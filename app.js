console.log("Script loaded!");

window.onload = function() {
    console.log("Page loaded!");
    const content = document.getElementById('content');

    if (!content) {
        console.log("Couldn't find content div!");
        return;
    }

    const path = window.location.pathname.split('/'); // ['/', 'phonenumber', '416-123-1234']
    console.log("Path: ", path);

    if (path[1] !== 'phonenumber') {
        console.log("Not a phonenumber URL!");
        show404();
        return;
    }

    const phoneNumber = path[2];
    if (isTorontoNumber(phoneNumber)) {
        console.log("Is a Toronto number!");
        content.innerHTML = `
            <h1>Phone Number: ${phoneNumber}</h1>
            <p>This is a Toronto phone number.</p>
        `;
    } else {
        console.log("Not a Toronto number!");
        show404();
    }
};

function isTorontoNumber(number) {
    if (!number) return false;

    var areaCode = number.split('-')[0];
    console.log("Area code: ", areaCode);
    return areaCode === '416' || areaCode === '647' || areaCode === '437';
}

function show404() {
    console.log("Showing 404 page.");
    document.getElementById('content').innerHTML = '<h1>404 - Not Found</h1>';
}
