export function toggleSwitch() {
	const body = document.querySelector('body');
	const switchMode = document.querySelector('.switch input');

	switchMode.addEventListener('click', () => {
		body.classList.toggle('light-mode');
	});
}
