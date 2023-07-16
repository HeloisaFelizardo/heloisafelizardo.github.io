const text = document.querySelector('.header .title');

const textLoad = () => {
	setTimeout(() => {
		text.textContent = 'Developer';
	}, 0);
	setTimeout(() => {
		text.textContent = 'Freelancer';
	}, 4000);
	setTimeout(() => {
		text.textContent = 'Designer';
	}, 8000);
};

/* textLoad();
setInterval(textLoad, 1200); */
