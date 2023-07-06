const accordionTrigger = document.querySelectorAll('.accordion .trigger');

accordionTrigger.forEach((trigger) => {
	trigger.addEventListener('click', (e) => {
		const accordion = trigger.parentElement;
		const isOpen = accordion.classList.contains('open');
		if (isOpen) {
			accordion.classList.remove('open');
		} else {
			accordion.classList.add('open');
			accordion.classList.add('transition'); // Adiciona a classe 'transition' ao abrir o accordion
		}
	});
});
