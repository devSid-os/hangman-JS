const keys = [
    ['A','B','C','D','E','F','G','H'],
    ['I','J','K','L','M','N','O','P'],
    ['Q','R','S','T','Y','X','Z'],
]

keys.map((row, index) => {
    const KEYS_DIV = document.querySelector(`#keys-div-${index + 1}`);
    row.map(key => {
        const KEY_BTN = document.createElement("button");
        KEY_BTN.textContent = key;
        KEYS_DIV.appendChild(KEY_BTN);
    })
})

