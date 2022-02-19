document.getElementById('btn-calc').addEventListener('click', (e) => {
	e.preventDefault();
	const handleLen = parseFloat(document.querySelector('#handleLen').value) || 0;
	const bladeLen = parseFloat(document.querySelector('#bladeLen').value) || 0;
	const batMass = parseFloat(document.querySelector('#batMass').value) || 0;
	const balPoint = parseFloat(document.querySelector('#balPoint').value) || 0;
	const res = document.getElementById('res');

	// 1
	const bladeMass =
		(batMass * handleLen - 2 * batMass * balPoint) / (-handleLen - bladeLen);
	// 2
	const handleMass = batMass - bladeMass;
	// 3
	let finalCalculation =
		(handleMass * handleLen ** 2) / 3 +
		((bladeMass * bladeLen ** 2) / 12 +
			bladeMass * (handleLen + bladeLen / 2) ** 2);

	let result = finalCalculation.toFixed(3);

	res.innerHTML = `The MOI =
		${result} Kg-m2`;
});

// 	res.innerHTML = `The MOI is:
// 		${
// 			(handleMass * handleLen ** 2) / 3 +
// 			((bladeMass * bladeLen ** 2) / 12 +
// 				bladeMass * (handleLen + bladeLen / 2) ** 2)
// 		} Kg-m2`;
// });

// Here is a set of inputs and result

// Handle length 0.3m

// Blade length 0.56m

// Bat mass 1.3kg

// Balance point 0.5m

// MOI (result) 0.390966667 Kg-m2
