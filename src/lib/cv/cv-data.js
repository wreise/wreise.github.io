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

	education: [
		{
			title: 'PhD student, DataShape, Inria Saclay',
			date: { start: '09.2020', end: '12.2023' },
			description:
				'Topological descriptors of curves, with applications to vehicle positioning, under the supervision of Frédéric Chazal and Bertrand Michel.'
		},
		{
			title: 'Master in Computational Science and Engineering, EPF Lausanne',
			date: { start: '09.2017', end: '07.2019' },
			description: 'Master project in topological data analysis for audio fingerprinting.'
		},
		{
			title: 'BSc in Mathematics, EPF Lausanne',
			date: { start: '09.2014', end: '06.2017' },
			description:
				'Third year on exchange, at Ecole Normale Superieure, focus on algebra and topology.'
		}
	],

	// Experience is grouped by company; each group lists its roles, newest first.
	// A role needs a title and a start date; end, location, description and
	// achievements are optional (an open-ended role is rendered as "present").
	experience: [
		{
			organisation: 'Akur8',
			roles: [
				{
					title: 'Tech Lead',
					date: { start: '09.2026' },
					location: { city: 'Paris', country: 'FR' }
				},
				{
					title: 'Engineering Manager',
					date: { start: '02.2026', end: '08.2026' },
					location: { city: 'Paris', country: 'FR' }
				},
				{
					title: 'Senior Machine Learning Engineer',
					date: { start: '02.2025', end: '02.2026' },
					location: { city: 'Montréal', country: 'CA' }
				},
				{
					title: 'Machine Learning Engineer',
					date: { start: '11.2023', end: '02.2025' },
					location: { city: 'Paris', country: 'FR' }
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
						'Implementation of topological data analysis methods and showcasing their applications. Development of a no-code interface for classification model training.'
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
						'Design and implementation of an audio identification algorithm based on topological data analysis.'
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
						'Analysis of historical daily prices and volatilities, work on in-house server and trading infrastructure.'
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
						'Analysis of the quality (punctuality and capacity) of the services, forecasting the number of passengers.'
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
			title: 'Assistant, Polytech Paris-Saclay',
			date: { start: '09.2020', end: '06.2023' },
			description:
				'Exercise sessions for a course in analysis for first-, second-year students of an engineering school.'
		},
		{
			title: 'Assistant, EPFL',
			date: { start: '02.2018', end: '06.2018' },
			description: 'Analysis II for the course of K.-D. Semmler.'
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
