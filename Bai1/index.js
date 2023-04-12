const $caculation = document.getElementById('caculation-btn');
const $sum = document.getElementById('sum');

function isSNT(number) {
    if (number < 2) return false;

    for (let i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }

    return true;
}

$caculation.addEventListener('click', () => {
    const $number1 = Number(document.getElementById('number1').value);
    const $number2 = Number(document.getElementById('number2').value);

    if (!Number.isInteger($number1) || !Number.isInteger($number2)) {
        $sum.innerHTML = 'Số bạn nhập không hợp lệ!!'; return;
    }

    if ($number1 > $number2) {
        $sum.innerHTML = 'Số b phải lớn hơn số a'; return;
    }

    let sum=0;
    for (let i = $number1; i <= $number2; i++)
        if(isSNT(i)) sum+= i;

    $sum.innerHTML = `Tổng các số nguyên tố trong khoảng ${$number1} và ${$number2} là: ${sum}`;
})

console.log($number)