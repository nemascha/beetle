const checkbox = document.getElementById('box');
	const btn = document.getElementById('slider');
	btn.addEventListener('click', () => {
		checkbox.checked = !checkbox.checked;
		check(checkbox);
	})

function driveCar() {
	const carStyle = document.getElementsByClassName('car')[0].style;
	carStyle.left = carStyle.left == '10%' ? '50%' : '10%';	
}

function check(el) {
	const lightStyle = document.getElementsByClassName('headlight')[0].style;
	const bodyStyle = document.getElementsByClassName('main')[0].style;
	lightStyle.boxShadow = el.checked ? 'white 18px 0px 31px 7px' : 'none';
	bodyStyle.backgroundColor = el.checked ? '#203366' : 'lightsalmon';
}
