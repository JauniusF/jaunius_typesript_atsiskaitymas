"use strict";
    var inputField = document.querySelector('#input');
    var result = document.querySelector('#result');
    if (inputField === null)
        throw new Error('Neteisingas įvesties lauko selektorius');
    if (result === null)
        throw new Error('Neteisingas rezultatų konteinerio selektorius');
    var handleFieldChange = function (event) {
        var element = event.target;
        result.innerHTML = element.value;
    };
    inputField.addEventListener('keyup', handleFieldChange);


