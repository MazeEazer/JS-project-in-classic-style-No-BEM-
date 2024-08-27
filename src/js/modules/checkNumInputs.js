const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	numInputs.forEach(item => {
		item.addEventListener('input', (e) => {
			item.value = item.value.replace(/\D/,'');

	})
});

};
export default checkNumInputs;