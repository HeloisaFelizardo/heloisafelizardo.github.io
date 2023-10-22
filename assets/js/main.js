function contentHTML(data) {
	const profilePhoto = data.photo;
	const job = data.job;
	const location = data.location;
	const hardSkills = data.skills.hardSkills;
	const softSkills = data.skills.softSkills;
	const education = data.education;
	const languages = data.languages;
	const projects = data.projects;

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

	const languagesList = document.querySelector('.languages');
	languages.forEach((language) => {
		languagesList.insertAdjacentHTML(
			'beforeend',
			`<li>${language}</li>			
			`,
		);
	});

	const projectsList = document.querySelector('.projects');
	projects.forEach((project) => {
		const technologiesList = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
		projectsList.insertAdjacentHTML(
			'beforeend',
			`<li>
				<h3 class="title">${project.name}</h3>
				<p>${project.description}</p>
				<p>Acesse o projeto:</p>
				<div class="projects-icons">
					<div class="project-link">
						<a href="${project.url}"
							title="${project.title}"><img
								src="${project.iconGithub}" alt="${project.title}" /></a>
					</div>
					<div class="project-link">
						<a href="${project.url}"
							title="${project.alt}" target="_blank"><img
								src="${project.iconProject}" class="marvel"
								alt="${project.alt}" /></a>
					</div>
				</div>
				<h4 class="tools">Tecnologias</h4>
				<ul>
					 ${technologiesList}
				</ul>
			</li>`,
		);
	});
}
