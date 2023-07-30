function contentHTML(data) {
	const profilePhoto = data.photo;
	const job = data.job;
	const location = data.location;
	const hardSkills = data.skills.hardSkills;
	const softSkills = data.skills.softSkills;
	const education = data.education;

	const jobElement = document.querySelector('.job');
	jobElement.textContent = job;

	const locationElement = document.querySelector('.location');
	locationElement.textContent = location;

	const header = document.querySelector('.header');
	header.insertAdjacentHTML('afterbegin', `<img src="${profilePhoto}" alt="Foto de perfil" class="photo" />`);

	const hardSkillsList = document.querySelector('.tools ul');
	hardSkills.forEach((skill) => {
		hardSkillsList.insertAdjacentHTML('beforeend', `<li>${skill.name}</li>`);
	});

	const softSkillsList = document.querySelector('.personal ul');
	softSkills.forEach((skill) => {
		softSkillsList.insertAdjacentHTML('beforeend', `<li>${skill} </li>`);
	});

	const educationList = document.querySelector('#education');
	education.forEach((course) => {
		educationList.insertAdjacentHTML(
			'beforeend',
			`<li>
			<h3 class="title">${course.title}</h3>
			<span class="period">${course.period}</span>
			<h4 class="course">${course.course}</h4>
			<span class="institution">${course.institution}</span>
		</li>`,
		);
	});
}
