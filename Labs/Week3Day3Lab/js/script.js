//Data Holder
const dataHolder = {
	skills: ['hello'],
};
// main nodes
const $nodes = {
	$appBox: $('.appBox'),
	$form: $('form'),
	$text: $("input[type='text']"),
	$skillsBox: $('#skillsContainer'),
};

//render skills
function renderSkills() {
	//empty first
	$nodes.$skillsBox.empty();

	//render each skill
	for (let skill of dataHolder.skills) {
		//assign jquery for items of skill
		const $skillBox = $('<div>').addClass('skillBox');
		const $removeButton = $('<button>').addClass('clearButton').text('X');
		const $skillText = $('<h2>').addClass('skillText');

		//create the skill text and combine the items
		$skillText.text(skill);
		$skillBox.append($removeButton);
		$skillBox.append($skillText);

		//append the combine item to the list
		if ($skillText.text()) {
			$nodes.$skillsBox.append($skillBox);
		}

		//add Remove button event
		$removeButton.on('click', function (e) {
			const text = $(e.target).text();
			const index = dataHolder.skills.indexOf(text);
			dataHolder.skills.splice(index, 1);
			renderSkills();
		});
	}
}

//adding skills
function addSkills(newSkill) {
	dataHolder.skills.push(newSkill);
	renderSkills();
}

$nodes.$form.on('submit', function (event) {
	event.preventDefault();
	addSkills($nodes.$text.val());
	$nodes.$text.val('');
});

renderSkills();
