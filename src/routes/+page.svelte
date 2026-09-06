<script>
	import Publication from '$lib/Publication.svelte';
	import Talk from '$lib/Talk.svelte';
	import CollapsibleSection from '$lib/CollapsibleSection.svelte';
</script>

<div class="main_wrapper">
	<header></header>

	<h1>Wojciech Reise</h1>
	<a href="data/wReise_CV_2023_12.pdf" target="_blank"
		><img src="data/cv_icon2.png" alt="cv_icon" title="CvIcon" class="social_icon" /></a
	>
	<a href="https://github.com/wreise" target="_blank">
		<img src="data/github_icon.png" alt="github_icon" title="GitHubProfile" class="social_icon" />
	</a>
	<a href="data/ssh/dell_pub"
		><img src="data/key_icon2.png" alt="KeyIcon" class="social_icon" /></a
	>
	<div style="float : right">
		<figure>
			<img
				src="data/profile_picture.jpeg"
				alt="Photo"
				title="Wojciech Reise"
				class="profile_picture"
			/>
		</figure>
	</div>
	<p>
		I am a Tech Lead at <a href="https://www.akur8.com/">Akur8</a>. With my
		colleagues, we develop a software for Pricing actuaries. Most recently, I was an Lead and Engineering Manager working on Rate Repo,
		a US-centric product to build structured representations of complex rating plans.<br /><br />
		<br /><br />
		Before my career in software, I wrote a <a href="data/thesis/wReise_thesis_24_01_01.pdf">doctoral thesis</a>,
		under the supervision of
		<a href="https://geometrica.saclay.inria.fr/team/Fred.Chazal/" target="_blank">Frédéric Chazal</a
		>
		and
		<a href="http://bertrand.michel.perso.math.cnrs.fr/" target="_blank">Bertrand Michel</a>, at
		<a href="https://www.imo.universite-paris-saclay.fr/-Probabilites-et-Statistiques-" target="_blank"
			>Université Paris-Saclay</a
		>
		and
		<a href="https://team.inria.fr/datashape/" target="_blank">Inria (DataShape)</a>. Using
		topological techniques, I studied periodic functions with phase variation, a model motivated by
		a problem in vehicle navigation.
		<br /><br />
		I am not actively working in new academic research in parallel to my role Akur8, but I will be happy
		to discuss previous work and current research directions.
		<br /><br />
		<b>Mail:</b> reisewojciech [at] gmail [dot] com <br />
	</p>
	<section>
		<h1>Research</h1>
		I am interested in applications of persistent homology and geometric inference. I worked on using
		topological and geometric descriptors of magnetic data measured inside a moving vehicle to infer
		its velocity and heading.
		<section>
			<h1>Publications</h1>
			<ul>
				<Publication
					title="Topological signatures of periodic-like signals"
					authors="B. Michel and F. Chazal"
					journal="Bernoulli"
					journalUrl="https://doi.org/10.3150/24-BEJ1793"
					pdfUrl="data/bj/BEJ1793.pdf"
					arxivUrl="http://arxiv.org/abs/2306.13453"
				/>
				<Publication
					title="Topological phase estimation method for reparameterized periodic functions"
					authors="T. Bonis, F. Chazal and B. Michel"
					journal="Advances in Computational Mathematics"
					journalUrl="https://link.springer.com/article/10.1007/s10444-024-10157-0"
					pdfUrl="https://rdcu.be/dNarZ"
					arxivUrl="https://arxiv.org/abs/2205.14390"
					codeUrl="https://github.com/wreise/topological_phase_estimation"
				/>
				<Publication
					title="Giotto-tda: A Topological Data Analysis Toolkit for Machine Learning and Data Exploration"
					journal='NeurIPS 2020 workshop "Topological Data Analysis and beyond"'
					arxivUrl="https://arxiv.org/abs/2004.02551v2"
					codeUrl="https://github.com/giotto-ai/giotto-tda"
				/>
				<Publication
					title="Audio identification with topological fingerprints"
					authors="Ximena Fernández, Maria Dominguez, Heather A. Harrington and Mariano Beguerisse-Díaz"
					journal="SIAM Journal on Mathematics of Data Science"
					journalUrl="https://epubs.siam.org/doi/10.1137/23M1605090"
					arxivUrl="https://arxiv.org/abs/2309.03516"
					codeUrl="https://github.com/wreise/top_audio_id"
				/>
			</ul>
			Complete list on <a href="http://arxiv.org/a/reise_w_1">arxiv</a>.
		</section>

		<section>
			<h1>Talks</h1>
			<ul>
				<Talk
					title="PhD defense"
					date="December 2023"
					location="Orsay, France"
					description="Topological techniques for inference on periodic functions with phase variation"
					slidesUrl="data/slides/wReise_defense.pdf"
					abstract='A description of my work is available in the <a href="data/thesis/wReise_thesis_24_01_01.pdf">thesis</a>.'
				/>
				<Talk
					title="Séminaire de Mathématiques Appliquées"
					date="February 2023"
					location="Nantes, France"
					description="Functional summaries of reparametrized periodic functions"
					slidesUrl="data/slides/wReise_Nantes_23_short.pdf"
					abstract="A method for constructing signatures of random reparametrizations of periodic functions is presented. The proposed signatures are functions, which contain information about the height and order of local extrema of the observation. In contrast to other statistical methods for reparametrized curves, the observations can be of different lengths and the construction does not involve aligning them. The signature is shown to be stable with respect to changes in the distribution of reparametrizations and to enjoy standard CLT properties, including in the case of dependent observations. The positioning of a vehicle based on magnetic signals is the industrial application which motivated this work. Ongoing work with Frédéric Chazal and Bertrand Michel."
				/>
				<Talk
					title="Rencontres Mathématiques-Mécanique, Congres Francais de Mécanique"
					date="August 2022"
					location="Nantes, France."
					description="Méthode topologique d’estimation de phase pour fonctions périodiques reparamétrisées"
					slidesUrl="data/slides/wReise_cfm22_v3_short.pdf"
					abstract="On considère un signal constitué de plusieurs périodes d’une fonction périodique dont on observe une reparamétrisation bruitée. Le problème d’estimation de phase consiste à retrouver cette reparamétrisation et, en particulier, le nombre de périodes observées. Des estimateurs existent quand la fonction périodique est simple ou connue. On se place dans le cas où la fonction reparamétrisée est inconnue et on s’intéresse ici à des estimateurs basés sur la quantification de la forme du signal. On propose un estimateur du nombre de périodes construit sur l’homologie persistante du signal qui synthétise la structure temporelle des extremas locaux de celui-ci. On en déduit un estimateur de la reparamétrisation. Ce travail est motivé par une application au positionement de véhicule, sur laquelle on évalue l’approche proposée."
				/>
				<Talk
					title="The 2nd Young Topologist Seminar in AI and biological sciences"
					date="July 2022"
					location="Beijing Institute of Mathematical Sciences and Applications, China"
					description="A tutorial on persistent homology with GUDHI and giotto-tda"
					abstract="Persistent homology, a tool from Topological Data Analysis, has witnessed an increasing number of applications. Numerous implementations of complex constructions, reduction algorithms and vectorization methods for persistent homology are now widely available, making topological descriptors accessible and computable in different contexts. In the first part of the talk, we will study a topological inference example, highlighting the features and flexibility of Gudhi: a library with efficient and flexible algorithms to construct simplicial complexes and compute geometric approximations of shapes. In the second part of the talk, we will focus on a time-series classification example, where we will illustrate the functionalities of giotto-tda: a Python library that integrates high-performance C++ implementations with machine learning via a scikit-learn–compatible API."
				/>
				<Talk
					title="Journées de Statistique de la Société Francaise de statistique 2022"
					date="June 2022"
					location="Lyon"
					description="Topological period counting method for reparametrized functions"
					slidesUrl="data/slides/wReise_jds_5.pdf"
					abstract="We consider a signal composed of several periods of a function. We observe its reparametrisation corrupted by noise and we are interested in recovering the number of observed periods. It is a version of the phase estimation problem, often stated for functions which are simple or known. Interested in the case when the underlying function is unknown, we concentrate on estimators which quantify the shape of the function. We study the persistent homology of the signal, which synthesizes the evolution of its sublevel sets and we introduce estimators of the number of observed periods. Those estimators do not assume prior knowledge of the reparametrized function and can be used on a class of generic signals."
				/>
				<Talk
					title="DataShape Seminar"
					date="May 2022"
					location="Porquerolles"
					description="Stability of topological signatures of reparametrized periodic functions"
				/>
				<Talk
					title="Vulgarization seminar for PhD students, LMO"
					date="November 2021"
					location="Orsay"
					description="Signal processing and topological data analysis for vehicle position estimation"
					abstract="Les systèmes de positionnement fusionnant GPS et capteurs inertiels ne donnent pas toujours une estimation fiable de la position d'un véhicule. Ceci nous pousse à construire d'autres estimateurs, à partir des mesures de quantités indépendantes, particulièrement du champ magnétique. Après avoir motivé le problème d'estimation de phase et fréquence avec le modèle du champ magnétique, je revisiterai des outils du traitement de signal: la transformée de Fourier discrète locale et la méthode des zéros-crossings. Ces deux méthodes présentent des limitations que je tente de lever dans le cadre ma thèse. Basée sur des notions de l'analyse topologique des données, une alternative que je propose permet d'améliorer la qualité de l'estimation à basse vitesse."
				/>
				<Talk
					title=" Geometry and Topology meet Data Analysis and Machine Learning 2021"
					date="July 2021"
					location="Online"
					description="Odometry with persistent homology"
					abstract="Instantaneous frequency or phase estimation is important to recover information contained in a signal, for example, encoded through frequency modulation. In that particular case, the modulated wave is sinusoidal with a simple structure. Standard methods like counting the number of zero-crossings or the Hilbert transform estimate these quantities correctly. In other problems though, the form of the modulated wave may not be controlled or known and the classical methods can be obscured by additional frequencies contained in it. We propose a method that generalizes period counting to a wider collection of signals. Using the sub-level set homology of one-dimensional signals, we characterize its periodic structure topologically and use it to segment the signal, providing a phase estimate akin to zero-crossings. Our method depends on a scale parameter which we also show how to choose."
				/>
				<Talk
					title="POSTECH MINDS workshop on TDA & ML, POSTECH"
					date="July 2021"
					location="Online"
					description="Tutorial on giotto-tda (jointly with Umberto Lupo)"
					abstract='giotto-tda is a Python library that integrates high-performance topological data analysis with machine learning via a scikit-learn–compatible API and state-of-the-art C++ implementations. Its large selection of preprocessing techniques, of persistent homology algorithms, and of featurization methods for persistence diagrams, allows for the flexible creation and tuning of end-to-end topological machine learning pipelines for various types of data (e.g. point clouds, graphs, images, and time series). The Mapper algorithm is implemented in giotto-tda as a scikit-learn pipeline with a parallelized clustering step. Furthermore, an interactive plotting API allows one to tune Mapper’s hyperparameters and observe how the resulting graph changes in real time. In <a href="https://github.com/ulupo/giotto-tda_demo/tree/bc9665a3eeba701d6f9282d81e44836edec53a80", style="color:black">this tutorial</a>, we will illustrate some of these functionalities by a) showing how to create pipelines for time series classification using the time-delay embedding technique, and b) showcasing the library’s generic and extensible Mapper implementation.'
				/>
				<Talk
					title="DataShape seminar, Inria"
					date="November 2020"
					location="Online"
					description="Towards Pattern Detection using Dynamic Time Warping"
					abstract="This talk will be centered around pattern detection and Dynamic Time Warping. Using the problem of velocity estimation from magnetic data in navigation systems, I will motivate the need for detecting repeated patterns in time series and the use of Dynamic Time Warping to that aim. I will recall the definition as the technique was originally introduced, and present a selection of more recent variants, including a differentiable version."
				/>
				<Talk
					title="Applied Topology Seminar, EPFL"
					date="December 2019"
					location="Lausanne"
					description="Audio identification using Persistent Homology"
					abstract="A fingerprint of an audio signal is a descriptive summary that encodes relevant information for a particular, signal-processing task. We focus on audio identification, which consists of detecting when pairs of tracks are similar, for example, one is a cover or an obfuscated version of the other. In this talk, I will review industry-standard approaches, introduce fingerprints based on persistent homology features of spectral representations of songs and propose an algorithm for audio identification. Finally, I will comment on the characteristics of the proposed fingerprints based on the performance of the identification algorithm on a set of obfuscated songs."
				/>
				<Talk
					title="Topological Data Analysis Meetup, Alan Turing Institute"
					date="April 2019"
					location="London"
					description="Audio identification using Persistent Homology"
				/>
			</ul>
		</section>
	</section>

	<CollapsibleSection title="Teaching">
		<ul>
			<li>
				<strong>Analyse II</strong> - Spring 2018, <a href="" target="_blank">EPFL</a><br />
				Taught by K.-D. Semmler, Principal assistant: Boris Bonev
			</li>
			<li>
				<strong>Mathématiques</strong> - Fall 2020, Fall 2021
				<a href="https://www.polytech.universite-paris-saclay.fr/" target="_blank"
					>Polytech Paris-Saclay</a
				><br />
				Taught by Maxime Février
			</li>
			<li>
				<strong>Mathématiques</strong> - Spring2023
				<a href="https://www.polytech.universite-paris-saclay.fr/" target="_blank"
					>Polytech Paris-Saclay</a
				><br />
				Taught by Arnaud Durand
			</li>
		</ul>
	</CollapsibleSection>

	<CollapsibleSection title="Seminars">
		During my PhD, I co-organized the <a href="https://team.inria.fr/datashape/seminars/"
			>DataShape seminar</a
		>
		and the
		<a href="https://master-statml.imo.universite-paris-saclay.fr/"
			>seminar for master students in Statistics and Machine Learning</a
		>
		at Université Paris-Saclay.
	</CollapsibleSection>

	<CollapsibleSection title="Miscellaneous">
		In my spare time, I <s>am</s> was a maintainer of
		<a href="https://github.com/giotto-ai/giotto-tda">giotto-tda</a>. I am a passionate Balboa
		dancer. I also enjoy being out in the mountains, in all seasons. <br /><br />
	</CollapsibleSection>
</div>
