document.getElementById('calculator').addEventListener('submit', function (event) {
    event.preventDefault();

    const edad = parseFloat(document.getElementById('edad').value);
    // Add other variables here
	const comorbilidades = parseFloat(document.getElementById('comorbilidades').value);
	
	const IRP_sintomas = parseFloat(document.getElementById('IRP_sintomas').value);
	
	const fr = parseFloat(document.getElementById('fr').value);
	
	const PAM = parseFloat(document.getElementById('PAM').value);
	
	const inl = parseFloat(document.getElementById('inl').value);
	
	const plaquetas = parseFloat(document.getElementById('plaquetas').value);

    const logit = -7.3188297586 + 0.0694244619 * edad + 0.5495910591 * comorbilidades + 0.6648100666 * IRP_sintomas +  0.1691836881 * fr + -0.0247966217 * PAM + 0.2582121863 * inl + -0.0001882435 * plaquetas; // Add other variables here

    const probability = 1 / (1 + Math.exp(-logit));

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The calculated probability is: ${probability.toFixed(4)}`;
    resultElement.classList.remove('hidden');
    resultElement.classList.add('visible');
});