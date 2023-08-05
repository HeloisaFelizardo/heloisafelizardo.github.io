export async function fetchProfileData() {
	await fetch('https://raw.githubusercontent.com/HeloisaFelizardo/heloisafelizardo.github.io/main/data/profile.json')
		.then((response) => response.json())
		.then((data) => {
			contentHTML(data);
		});
}
