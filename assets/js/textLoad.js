/* const text = document.querySelector('.header .title span');
const words = ['Heloisa Felizardo!', 'Web Developer.', 'Freelancer.', 'Designer.'];
let index = 0;

// Função principal para carregar e apagar o texto
const textLoad = () => {
	const word = words[index]; // Obtém a palavra atual do array 'words'
	let currentText = ''; // Texto atual exibido no título
	let i = 0; // Índice para percorrer os caracteres da palavra

	// Timer para adicionar um caractere por vez
	const timer = setInterval(() => {
		currentText += word[i]; // Adiciona o próximo caractere à palavra atual
		text.textContent = currentText; // Atualiza o texto exibido no título
		i++; // Incrementa o índice para o próximo caractere

		// Verifica se todos os caracteres foram exibidos
		if (i === word.length) {
			clearInterval(timer); // Limpa o timer

			// Inicia o processo de apagar o texto após um pequeno intervalo
			setTimeout(() => {
				eraseText();
			}, 1000);
		}
	}, 100);

	// Função para apagar o texto
	const eraseText = () => {
		// Timer para remover um caractere por vez
		const eraseTimer = setInterval(() => {
			currentText = currentText.slice(0, -1); // Remove o último caractere do texto atual
			text.textContent = currentText; // Atualiza o texto exibido no título

			// Verifica se todo o texto foi removido
			if (currentText === '') {
				clearInterval(eraseTimer); // Limpa o timer

				index = (index + 1) % words.length; // Atualiza o índice para a próxima palavra
				// Chama a função textLoad novamente após um pequeno intervalo
				setTimeout(() => {
					textLoad();
				}, 1000);
			}
		}, 100);
	};
};

textLoad(); // Inicia o carregamento do texto no título
 */
const text = document.querySelector('.header .title span');
const words = ['Heloisa Felizardo!', 'Web Developer.', 'Freelancer.', 'Designer.', 'Heloisa Felizardo!'];
let index = 0;
let isFirstTime = true;

// Função principal para carregar e apagar o texto
const textLoad = () => {
	const word = words[index]; // Obtém a palavra atual do array 'words'
	let currentText = ''; // Texto atual exibido no título
	let i = 0; // Índice para percorrer os caracteres da palavra

	// Timer para adicionar um caractere por vez
	const timer = setInterval(() => {
		currentText += word[i]; // Adiciona o próximo caractere à palavra atual
		text.textContent = currentText; // Atualiza o texto exibido no título
		i++; // Incrementa o índice para o próximo caractere

		// Verifica se todos os caracteres foram exibidos
		if (i === word.length) {
			clearInterval(timer); // Limpa o timer

			// Verifica se é a primeira vez passando por todas as palavras
			if (isFirstTime && index === words.length - 1) {
				isFirstTime = false;
				return; // Para a animação
			}

			// Inicia o processo de apagar o texto após um pequeno intervalo
			setTimeout(() => {
				eraseText();
			}, 1000);
		}
	}, 100);

	// Função para apagar o texto
	const eraseText = () => {
		// Timer para remover um caractere por vez
		const eraseTimer = setInterval(() => {
			currentText = currentText.slice(0, -1); // Remove o último caractere do texto atual
			text.textContent = currentText; // Atualiza o texto exibido no título

			// Verifica se todo o texto foi removido
			if (currentText === '') {
				clearInterval(eraseTimer); // Limpa o timer

				index = (index + 1) % words.length; // Atualiza o índice para a próxima palavra
				// Chama a função textLoad novamente após um pequeno intervalo
				setTimeout(() => {
					textLoad();
				}, 1000);
			}
		}, 100);
	};
};

textLoad(); // Inicia o carregamento do texto no título
