// Content of the CV. The components in this folder render whatever is here,
// so editing the CV means editing this file only.

export const cv = {
	name: 'Wojciech Reise',
	subtitle: 'PhD in Applied Mathematics · Paris, France',
	contact: [
		{ href: 'mailto:reisewojciech@gmail.com', label: '✉ reisewojciech@gmail.com' },
		{ href: 'https://wreise.github.io/', label: '🌐 wreise.github.io' }
	],

	education: [
		{
			title: 'PhD student, DataShape, Inria Saclay',
			date: '09.2020-12.2023',
			description:
				'Topological descriptors of curves, with applications to vehicle positioning, under the supervision of Frédéric Chazal and Bertrand Michel.'
		},
		{
			title: 'Master in Computational Science and Engineering, EPF Lausanne',
			date: '09.2017-07.2019',
			description: 'Master project in topological data analysis for audio fingerprinting.'
		},
		{
			title: 'BSc in Mathematics, EPF Lausanne',
			date: '09.2014-06.2017',
			description:
				'Third year on exchange, at Ecole Normale Superieure, focus on algebra and topology.'
		}
	],

	experience: [
		{
			title: 'Machine Learning Engineer, Akur8',
			date: '11.2023-'
		},
		{
			title: 'Research intern, L2F',
			date: '01.2020-07.2020',
			description:
				'Implementation of topological data analysis methods and showcasing their applications. Development of a no-code interface for classification model training.'
		},
		{
			title: 'Research intern, Spotify',
			date: '07.2019-09.2019',
			description:
				'Design and implementation of an audio identification algorithm based on topological data analysis.'
		},
		{
			title: 'Data analysis intern, Dominice & Co',
			date: '07.2018-12.2018',
			description:
				'Analysis of historical daily prices and volatilities, work on in-house server and trading infrastructure.'
		},
		{
			title: 'Treasurer, Club Montagne (EPFL)',
			date: '04.2018-03.2019',
			description: 'Accounting, budget planning of subsidized outings and courses.'
		},
		{
			title: 'Data analysis intern, Transport Lausannois',
			date: '07.2016-09.2016',
			description:
				'Analysis of the quality (punctuality and capacity) of the services, forecasting the number of passengers.'
		},
		{
			title: 'Member, ShARE Association (EPFL)',
			date: '09.2015-02.2018',
			description:
				'Consulting-like projects for the EPFL Technology Transfer Office. Manager of a project for the ThinkEE startup 10-12.2017.'
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
			date: '09.2020-06.2023',
			description:
				'Exercise sessions for a course in analysis for first-, second-year students of an engineering school.'
		},
		{
			title: 'Assistant, EPFL',
			date: '02.2018-06.2018',
			description: 'Analysis II for the course of K.-D. Semmler.'
		},
		{
			title: 'Private tutor, EliteIB',
			date: '09.2015-08.2016',
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
