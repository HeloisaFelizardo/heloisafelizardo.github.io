export function accordion() {
	const accordionTrigger = document.querySelectorAll('.accordion .trigger');

	accordionTrigger.forEach((trigger) => {
		trigger.addEventListener('click', (e) => {
			const accordion = trigger.parentElement;
			const content = accordion.querySelector('.content');
			const isOpen = accordion.classList.contains('open');

			// Remove a classe 'open' de todos os acordeões abertos
			document.querySelectorAll('.accordion.open').forEach((openAccordion) => {
				openAccordion.classList.remove('open');
				openAccordion.querySelector('.content').style.maxHeight = null;
			});

			if (!isOpen) {
				accordion.classList.add('open');
				accordion.classList.add('transition');
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		});
	});
}
