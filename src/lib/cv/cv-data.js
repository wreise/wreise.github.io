// Content of the CV. The components in this folder render whatever is here,
// so editing the CV means editing this file only.

export const cv = {
	name: 'Wojciech Reise',
	subtitle: 'PhD in Applied Mathematics',
	photo: '/data/wReise_profile_picture_small.jpg',
	contact: [
		{ label: '34 Rue Servan, 75011 Paris, France' },
		{ href: 'tel:+33745081631', label: '+33 7 45 08 16 31' },
		{ href: 'mailto:reisewojciech@gmail.com', label: 'reisewojciech@gmail.com' },
		{ href: 'https://wreise.github.io/', label: 'wreise.github.io' }
	],

	profile:
		"Product engineer with a PhD in maths. I am passionate about discovering good solutions to complex problems. " +
		"Be it how to solve a user problem, how to build a reliable system or improve workings of a team. " +
		"Currently, I am learning how to scale my contribution to the Product.",

	education: [
		{
			title: 'PhD student, DataShape, Inria Saclay',
			date: { start: '09.2020', end: '12.2023' },
			description:
				"Topological descriptors of curves, with applications to vehicle positioning, under the supervision of Frédéric Chazal and Bertrand Michel."
		},
		{
			title: 'Master in Computational Science and Engineering, EPF Lausanne',
			date: { start: '09.2017', end: '07.2019' },
			description: "Master project in topological data analysis for audio fingerprinting."
		},
		{
			title: 'BSc in Mathematics, EPF Lausanne',
			date: { start: '09.2014', end: '06.2017' },
			description:
				"Third year on exchange, at Ecole Normale Superieure, focus on algebra and topology."
		}
	],

	// Experience is grouped by company; each group lists its roles, newest first.
	// A role needs a title and a start date; end, location, description and
	// achievements are optional (an open-ended role is rendered as "present").
	experience: [
		{
			organisation: 'Akur8',
			description: "We build a SaaS end-to-end platform for actuaries: from market intellingence, through modelling to deployment.",
			roles: [
				{
					title: 'Technical Lead',
					date: { start: '09.2026' },
					location: { city: 'Paris', country: 'FR' },
					description: "I am working with Product & Design to solve the problem of storing and serving rating structures defined in our software across its different parts."
				},
				{
					title: 'Engineering Manager',
					date: { start: '02.2026', end: '08.2026' },
					location: { city: 'Paris', country: 'FR' },
					description: "I led the squad owning the product we developed in CA",
					achievements: [
						"provided technical leadership for the integration with other parts of the software",
						// Rate - compute, analysis, scenarios
						// Deploy - export of rating structures - versioning of the schema
						// Discover - pull market-intelligence as "first-rate" objects in the Product
						"organized the work of the squad and mentored new joiners",
						//
						"along with Product, prioritised the development according to commercial needs",
						//
					]
				},
				{
					title: 'Senior Machine Learning Engineer',
					date: { start: '02.2025', end: '02.2026' },
					location: { city: 'Montréal', country: 'CA' },
					description:
						"I was part of a small team tasked with developing a new product for the US market",
					achievements: [
						"delivered a complex project on time, with solid engineering foundations",
						"learned and adopted world-class practices for product agile teams (ubiquitous language, short time-to-merge, TDD, mutation coverage)",
					]
				},
				{
					title: 'Machine Learning Engineer',
					date: { start: '11.2023', end: '02.2025' },
					location: { city: 'Paris', country: 'FR' },
					description: "I worked on mathematical problems related to an individual optimization product",
					achievements: [
						"improved the robustness and accuracy of the optimization algorithm",
						// Reducing the number of degrees of freedom in the langrangian
						// Supporting discontinuous functions
						"designed an approach to replace a piecewise-constant univariate effect by a continuous one",
						// Same  monotonicity pattern. Keep segmentation performance on a bunch of benchmarks
					]
				}
			]
		},
		{
			organisation: 'L2F',
			roles: [
				{
					title: 'Research intern',
					date: { start: '01.2020', end: '07.2020' },
					location: { city: 'Lausanne', country: 'CH' },
					description:
						"I joined L2F to work on giotto-tda, an open-source library for topological data analysis",
					achievements: [
						"implemented methods from the literature",
						// heat-kernel signature ?
						"constructed a versioned documentation page",
						// "retro-compatibility" - the page should host all documentation, including the newer ones.
						"co-developed a no-code product for training image-classification models"
					]
				}
			]
		},
		{
			organisation: 'Spotify',
			roles: [
				{
					title: 'Research intern',
					date: { start: '07.2019', end: '09.2019' },
					location: { city: 'London', country: 'UK' },
					description:
						"I worked on an audio identification problem, application from my masters thesis",
					achievements: [
						"Scored the algorithm on an internal database",
						"Worked on an implementation towards more operational use"
					]
				}
			]
		},
		{
			organisation: 'Dominicé & Co',
			roles: [
				{
					title: 'Data analysis intern',
					date: { start: '07.2018', end: '12.2018' },
					location: { city: 'Geneva', country: 'CH' },
					description:
						"I worked as support within the trading division",
					achievements: [
						"performed analyses of historical daily prices and volatilities",
						"supported research and monitoring by improving apis",
						"produced a quantitative analysis showcasing the performance of a fund"
					]
				}
			]
		},
		{
			organisation: 'Transports Lausannois',
			roles: [
				{
					title: 'Data analysis intern',
					date: { start: '07.2016', end: '09.2016' },
					location: { city: 'Lausanne', country: 'CH' },
					description:
						"I worked with an analyst of operations data",
					achievements: [
						"analyzed how road-works and deviations impact the punctuality - regularity of the service, and the number of impacted customers",
						"improved the accuracy of forecasting the annual number of passengers."
					]
				}
			]
		}
	],

	// Volunteer and association roles, same shape as `experience`.
	leadership: [
		{
			organisation: 'Couleur Swing',
			roles: [
				{
					title: 'Dance Teacher',
					date: { start: '09.2026' },
					location: { city: 'Paris', country: 'FR' },
					description: 'Teaching weekly Balboa classes, 3 different levels'
				}
			]
		},
		{
			organisation: 'Grimpo 6',
			roles: [
				{
					title: 'Climbing Gear Manager',
					date: { start: '09.2023' },
					location: { city: 'Paris', country: 'FR' },
					description: 'In charge of making the gear available, handling budget and purchases. Accountable for verifications of its state'
				}
			]
		},
		{
			organisation: 'Club Montagne (EPFL)',
			roles: [
				{
					title: 'Treasurer',
					date: { start: '04.2018', end: '03.2019' },
					location: { city: 'Lausanne', country: 'CH' },
					description: 'Accounting, budget planning of subsidized outings and courses.'
				}
			]
		},
		{
			organisation: 'ShARE Association (EPFL)',
			roles: [
				{
					title: 'Member',
					date: { start: '09.2015', end: '02.2018' },
					location: { city: 'Lausanne', country: 'CH' },
					description:
						'Consulting-like projects for the EPFL Technology Transfer Office. Manager of a project for the ThinkEE startup 10-12.2017.'
				}
			]
		}
	],

	publications: [
		{
			title: 'Topological signatures of periodic-like signals',
			date: '2025',
			authors: 'B. Michel and F. Chazal',
			venue: 'Bernoulli',
			url: 'https://doi.org/10.3150/24-BEJ1793'
		},
		{
			title: 'Audio identification with topological fingerprints',
			date: '2024',
			authors: 'X. Fernández, M. Dominguez, H.A. Harrington and M. Beguerisse-Díaz',
			venue: 'SIAM Journal on Mathematics of Data Science',
			url: 'https://epubs.siam.org/doi/10.1137/23M1605090'
		},
		{
			title: 'Topological phase estimation method for reparameterized periodic functions',
			date: '2024',
			authors: 'T. Bonis, F. Chazal and B. Michel',
			venue: 'Advances in Computational Mathematics',
			url: 'https://link.springer.com/article/10.1007/s10444-024-10157-0'
		},
		{
			title:
				'Giotto-tda: A Topological Data Analysis Toolkit for Machine Learning and Data Exploration',
			date: '2020',
			authors:
				'G. Tauzin, U. Lupo, L. Tunstall, J.B. Pérez, M. Caorsi, A. Medina-Mardones, A. Dassati, K. Hess',
			venue: 'NeurIPS 2020 workshop "Topological Data Analysis and beyond"',
			url: 'https://arxiv.org/abs/2004.02551v2'
		}
	],

	teaching: [
		{
			title: 'Teaching Assistant, Polytech Paris-Saclay',
			date: { start: '09.2020', end: '06.2023' },
			description:
				'Led exercise sessions for groups of ~25 students a course in analysis for first-, second-year students of an engineering school.'
		},
		{
			title: 'Teaching Assistant, EPFL',
			date: { start: '02.2018', end: '06.2018' },
			description: 'Tutored during exercise sessions, for the courses of K.-D. Semmler & .'
		},
		{
			title: 'Private tutor, EliteIB',
			date: { start: '09.2015', end: '08.2016' },
			description: 'Regular tuition, exam preparation, organising revision courses.'
		}
	],

	languages: [
		{ label: 'Polish', value: 'Native' },
		{ label: 'French', value: 'C2 (DALF)' },
		{ label: 'English', value: 'C2 (CAE grade A)' },
		{ label: 'Italian', value: 'A2' }
	]
};
