const $button = document.getElementById('button');

function numberOneTriangle(number) {
    for (let i = 1; i <= number; i++) {
        let str = '';

        for (let j = 0; j < i; j++) {
            str += '*';
        }
        
        document.write(`<div>${str}</div>`);
    }
}

$button.addEventListener('click', () => {
    const $number = Number(document.getElementById('number').value);

    if(!Number.isInteger($number)) {
        document.write('Số bạn nhập không hợp lệ'); return;
    }

    numberOneTriangle($number);
})
