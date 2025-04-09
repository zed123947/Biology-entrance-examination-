// open modal on button click
var modal_open_btn = document.getElementById('myBtn');

var modal_div = document.getElementById('myModal');

var modal_close_btn = document.getElementsByClassName('close')[0];

// when click on open button, open the modal
modal_open_btn.onclick = function() {
	modal_div.style.display = 'block';
}

// when click on close button, close the modal
modal_close_btn.onclick = function() {
	modal_div.style.display = 'none';
}

// when click outside the modal area, close the modal
window.onclick = function(event) {
	if(event.target == modal_div) {
		modal_div.style.display = 'none';
	}
}

// update age slider value
var slider = document.getElementById('age');
var output = document.getElementById('ageRange');
output.innerHTML = slider.value; // display the initial value

// change to current value
slider.oninput = function() {
	output.innerHTML = this.value;
}


// this function receives student information
function sendStudentInfo(e) {
	e.preventDefault();
	
	// receive input
	var name, gender, age, nationality, subject, stream, 
	reigon, bookletcode, regno, Schoolname, Schoolcode;

	name = document.getElementById('name').value;
	gender = document.getElementById('gender').value;
	age = document.getElementById('age').value;
	nationality = document.getElementById('nationality').value;
	subject = document.getElementById('subject').value;
	stream = document.getElementById('stream').value;
	reigon = document.getElementById('reigon').value;
	bookletcode = document.getElementById('bookletcode').value;
	regno = document.getElementById('regno').value;
	Schoolname = document.getElementById('Schoolname').value;
	Schoolcode = document.getElementById('Schoolcode').value;




	// generate question
	var questions;

	questions = '<h1>BIOLOGY ENTRANCE EXAMINATION PAGE PAPER GOOD LUCK!!!</h1>';
	questions += '<pre id="student_info">STUDENT NAME: <strong>' + name + '</strong>';
	questions += ' <br> GENDER: <strong>' + gender + '</strong>   ';
	questions += ' <br> AGE: <strong>' + age + '</strong>   ';
	questions += ' <br> NATIONALITY: <strong>' + nationality + '</strong>'; 
	questions += ' <br> SUBJECT: <strong>' + subject + '</strong>';
	questions += ' <br> STREAM: <strong>' + stream + '</strong>';
	questions += ' <br> REIGON: <strong>' + reigon + '</strong>';
	questions += '  BOOKLET CODE: <strong>' + bookletcode + '</strong>';
	questions += '  REG.NO: <strong>' + regno + '</strong>';
	questions += '  SCHOOL NAME: <strong>' + Schoolname + '</strong>';
	questions += '  SCHOOL CODE: <strong>' + Schoolcode + '</strong> </pre>';
	

	questions += generateDate(); // get current date
	questions += generateQuestion(); // get questions

	// submit answer button
	questions += '<button class="btn" onclick="submitAnswer(event)">Submit answers</button>';
	questions += '';




	document.getElementById('question_header').innerHTML = questions;





	// close modal
	modal_div.style.display = 'none';

	// hide original button
	modal_open_btn.style.display = 'none';
}

// this function generates current date
function generateDate(){
	var thisDate = ''; // Wednesday July 21, 2021
	var today = new Date();
	var date = today.getDate(); // 1 ... 31 (31 days of month)
	var day = today.getDay(); // 0 .. 6 (7 days of week)
	var month = today.getMonth(); // 0 ... 11 (12 months of year)
	var year = today.getFullYear(); // 2021

	// get week day by name, 0 .. 6
	switch(day) {
		case 0:
			thisDate += 'Sunday';
			break;
		case 1:
			thisDate += 'Monday';
			break;
		case 2:
			thisDate += 'Tuesday';
			break;
		case 3:
			thisDate += 'Wednesday';
			break;
		case 4:
			thisDate += 'Thursday';
			break;
		case 5:
			thisDate += 'Friday';
			break;
		case 6:
			thisDate += 'Saturday';
			break;
	}

	var monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var thisMonth = monthsArr[month]; // 6

	// Wednesday July 21, 2021
	thisDate += ' ' + thisMonth + ' ' + date + ', ' + year;

	return thisDate;
}

// this function outputs questions related to traffic rules
function generateQuestion() {
	var trafficQuestion = '', str;

	var questionsArray = ['Which Ethiopian biologist was instrumental in negotiating policies to safeguard biodiversity and community rights to genetic resources?',
                          'Dr Aklilu Lemma s discovery primarily aimed at controlling which disease?',
                          'Which Ethiopian research institute is renowned for its work on infectious diseases vectors and human parasitic diseases?',
                          'What is the purpose of using immersion oil with the 100x objective lens on a microscope?',
                          'What is the main function of the stains used in microscopy?',
                          'What type of sample preparation is needed for electron microscopy?',
                          'What is a major disadvantage of using electron microscopes?',
						  'Which organelles are stained by haematoxylin? ',
                          'In which part of the cell does most of the chemical reactions needed for life take place?',
						  'Which of the following best describes the selectively permeable nature of the cell membrane?',
                          'The permanent vacuole in plant cells is important for',
                          'Which of the following is not one of the seven life processes common to most living organisms?',
                          'Which of the following accurately reflects the cell theory proposed by Matthias Schleiden and Theodore Schwann in 1839?',
                          'What does cell specialization entail in multicellular organisms?',
                          'Why do muscle cells contain many mitochondria?',
						  'What is the primary function of ciliated epithelial cells in the respiratory system?',
                          'What characteristic allows epithelial cells to perform diffusion effectively?',
						  'What is the primary function of ciliated epithelial cells in the respiratory system?',
                          'What is a key feature of sperm cells?',
                          'How do embryonic cells become specialized?',
                          'What are embryonic stem cells?',
                          'How do organelles contribute to cell function?',
                          'What is the role of enzymes in cellular processes?',
						  'Why do cells have organelles?',
                          'Why does diffusion occur?',
						  'What adaptation increases the rate of diffusion in cells?',
                          'Which term describes the difference in concentration between two areas?',
                          'Diffusion is considered a passive process because it',
                          'How do living organisms benefit from diffusion?',
                          'What happens to a cell placed in an isotonic solution? ',
                          'What cellular structure is primarily responsible for regulating the movement of substances into and out of the cell?',
						  'What is the key difference between diffusion and osmosis? ',
                          'In an experiment, a plant cell is placed in a solution where the concentration of water outside the cell is higher than inside the cell. What will happen to the cell? ',
						  'Which term describes a solution that has a higher concentration of solute compared to another solution?',
                          'What happens when a cell is placed in a hypertonic solution? ',
                          'How do plant cells maintain rigidity due to osmosis?',
                          'Which of the following best explains why osmosis is crucial for living organisms? ',
                          'What happens to a red blood cell placed in a hypertonic solution?',
                          'In which type of solution will there be no net movement of water across a cell membrane?',
						  'What is turgor pressure in plant cells primarily caused by? ',
                          'Which of the following best describes the role of active transport in cells?',
						  'In which situation is active transport crucial for cellular function?',
                          'What is the primary function of carbohydrates in the human body?',
						  'Which of the following is a storage form of carbohydrate in animals?',
                          'Which carbohydrate cannot be digested by humans due to its structural composition?',
                          'What is the chemical test used to detect the presence of starch?',
                          'Which chemical reaction type occurs when two simple sugars join to form a double sugar like sucrose? ',
                          'Which of the following conditions is associated with severe protein-energy malnutrition? ',
                          'What is a key characteristic of lipids?',
						  'Which statement about saturated fatty acids is correct?',
                          'What is the main role of fats and oils in the body?',
						  'Which type of fatty acid contains two or more double bonds in its hydrocarbon chain? ',
                          'Which vitamin is necessary for the formation of light-sensitive chemicals in the retina? ',
						  'Which mineral is involved in the improper formation of teeth and bones if deficient?',
                          'Which vitamin is necessary for the absorption of calcium and phosphorus by bones?',
                          'What is the primary role of sodium in the body?',
                          'Fibre or roughage in the diet primarily helps in',
                          'How does the structure of a tooth relate to its function in digestion?',
                          'Which protease enzyme is responsible for breaking down proteins in too low pH medium?',
						  'Why is the small intestine lined with villi and microvilli?',
                          'What happens to undigested food material as it moves through the large intestine?',
						  'What happens to the ribcage and diaphragm during exhalation?',
                          'Which of the following is not a characteristic of alveoli that facilitates efficient gas exchange?',
						  'What is the function of the epiglottis during swallowing?',
                          'What effect does high altitude have on breathing rate?',
                          'What do we call the maximum amount of air you can take into or breathe out of your lungs?',
                          'What happens to the breathing rate of fit individuals compared to unfit individuals during exercise?',
                          'Which term refers to the amount of air taken in and out during normal breathing at rest?',
                          'What happens during anaerobic respiration in muscle cells when oxygen is insufficient?',
						  'In what way is fermentation in yeast cells similar to anaerobic respiration in muscle cells?',
                          'Which chamber of the heart receives deoxygenated blood from the body?',
						  'What type of blood vessel has walls that are one cell thick to allow for the exchange of substances?',
                          'Which of the following best describes the role of valves in veins?',
						  'What is the primary function of the left ventricle?',
                          'What causes the heart sounds that can be heard through a stethoscope?',
                          'What term describes the pressure in the arteries when the heart beats or contracts?',
                          'Which structure in the heart prevents the backflow of blood into the right atrium?',
                          'Which of the following is the correct path of blood flow after a drug is injected into the left arm?',
                          'What happens when blood from incompatible blood groups is mixed?',
						  'Which blood cells are involved in the immune response?',
                          'Which of the following statements is true based on Pasteur s experiments?',
						  'Why is it important to sterilize inoculating loops before using them?',
                          'What triggers the immune response in your body when a pathogen enters?',
						  'How does the immune system remember a pathogen it has encountered before?',
                          'Which method of controlling micro-organisms involves heating to 171 °C for one our?',
                          'What does Ultra High Temperature (UHT) treatment involve?',
                          'What is the importance of the immune response triggered by vaccines?',
                          'What type of immunity is given when a mother breastfeeds her baby?',
                          'Which vitamin deficiency can be caused by a large tapeworm infection?',
                          'Drug-resistant tuberculosis occurs when',
						  'What characteristic makes mosquitoes efficient vectors for diseases like malaria?',
                          'What is the best strategy to prevent diarrheal diseases like cholera and typhoid in communities? ',
						  'What complication can occur if a pregnant woman with untreated gonorrhea passes the infection to her baby?',
                          'Why are STIs often difficult to detect in their early stages of infections?',
                          'Why do biologists classify living things?',
                          'What is the significance of DNA, RNA, and proteins in modern taxonomy?',
                          'What is a dichotomous key primarily used in biology?',
                          'How do organisms in the kingdom Protista differ from those in the kingdom Monera?',
						  'Which is a common feature among all organisms classified in the kingdom Fungi?',
                          'Which phylum is characterized by having a complete digestive system but lacks a circulatory system?'
                        ];

	var choicesArray = ['A. Dr. Tewolde Berhan Gebre Egziabher, B. Professor Tilahun Yilma, C. Dr. Melaku Worede, D. Professor Yalemtsehay Mekonnen ',
                        'A. Malaria, B. Schistosomiasis, C. Tuberculosis, D. Rinderpest',
                        'A. Institute of Biodiversity Conservation (IBC), B. Aklilu Lemma Institute of Pathobiology (ALIPB), C. Ethiopian Health and Nutrition Research Institute (EHNRI), D. Ethiopian Institute of Agricultural Research (EIAR)',
                        'A. To increase the contrast of the image, B. To magnify the image, C. To prevent air bubbles, D. To improve resolution by reducing light refraction',
                        'A. To magnify the specimen, B. To make the cells easier to see, C. To preserve the specimen, D. To increase the resolving power of the microscope',
                        'A. Fixation with colored dyes, B. Use of lead and uranium stains, C. No preparation required, D. Mounting living cells directly on slides',
                        'A. Limited magnification, B. Can only observe living cells, C. Specimens must be observed in a vacuum, D. Inexpensive and widely available',
                        'A. Mitochondria, B. Chloroplasts, C. Nuclei, D. Chromosomes',
                        'A. Nucleus, B. Cytoplasm, C. Ribosome, D. Endoplasmic reticulum',
						'A. It allows all substances to pass through., B. It allows only water to pass through., C. It allows some substances to pass through but not others., D. It does not allow any substances to pass through.',
                        'A. Protein synthesis., B. Cellular respiration., C. Keeping the cells rigid to support the plant., D. Controlling the passage of substances in and out of the cell.',
                        'A. Nutrition, B. Respiration, C. Digestion, D. Growth',
                        'A. Cells are the fundamental structural and functional units of all living organisms., B. All cells originate from pre-existing cells., C. Cells are made up of three main components the cell membrane cytoplasm and nucleus., D. Cells exist only as single-celled organisms.',
                        'A. It involves cells adapting to perform specific functions based on their location in the embryo and genetic instructions., B. It refers to cells that have the potential to differentiate into any type of cell in the body., C. It describes cells that are specialized to exist only as single-celled organisms., D. It pertains to cells that remain undifferentiated throughout their lifespan.',
                        'A. To produce enzymes for digestion., B. To store genetic material., C. To provide energy for muscle contraction., D. To help with cell division.',
                        'A. To transport oxygen to the bloodstream., B. To protect underlying tissues from damage., C. To move mucus and microbes away from the lungs., D. To store genetic information.',
                        'A. Their large number of mitochondria., B. Their flattened shape or presence of microvilli., C. Their ability to contract and relax., D. Their role in carrying oxygen.',
						'A. To transport oxygen to the bloodstream., B. To protect underlying tissues from damage., C. To move mucus and microbes away from the lungs., D. To store genetic information.',
                        'A. They contain a large food store., B. They have a long tail for propulsion., C. They have multiple nuclei., D. They do not contain mitochondria.',
                        'A. By dividing into more embryonic stem cells., B. By switching on and off certain genes in the nucleus., C. By merging with other specialized cells., D. By changing their location in the body.',
                        'A. Cells that form the lining of the lungs., B. Cells that have not yet assumed their final functional characteristics., C. Cells that are specialized to carry out specific functions., D. Cells that only exist in adult organisms.',
                        'A. By storing water and maintaining cell turgor pressure., B. By facilitating cell division and replication., C. By compartmentalizing different cellular activities., D. By synthesizing ATP molecules for energy production.',
                        'A. Enzymes help in transporting nutrients across the cell membrane., B. Enzymes store genetic information in the nucleus., C. Enzymes regulate the rate of specific chemical reactions., D. Enzymes facilitate cell communication through signaling pathways.',
                        'A. To create a controlled environment for chemical reactions to prevent chaos., B. To store excess nutrients and energy for future use., C. To maintain structural integrity and shape of the cell., D. To regulate cell division and growth processes.',
                        'A. Due to the force applied by external sources, B. Because particles gain energy to move to a higher concentration, C. Because of the random movement of particles, D. Because particles attract each other to form clusters',
					    'A. Decreasing the surface area of the cell membrane, B. Reducing the number of particles in the surrounding area, C. Increasing the thickness of the cell membrane, D. Increasing the surface area of the cell membrane',
                        'A. Gradient, B. Equilibrium, C. Osmosis, D. Plasmolysis',
                        'A. Requires energy input, B. Moves particles against their concentration gradient, C. Involves movement from high to low concentration, D. Requires specialized transport proteins',
                        'A. It speeds up the movement of particles from low to high concentration, B. It allows rapid movement of substances without a concentration gradient, C. It facilitates the movement of essential substances like oxygen and glucose, D. It prevents the movement of waste substances into cells',
                        'A. Water moves out of the cell., B. Water moves into the cell., C. There is no net movement of water., D. The cell bursts.',
                        'A. Cell wall, B. Nucleus, C. Plasma membrane, D. Chloroplast',
                        'A. Diffusion involves movement of water molecules osmosis involves movement of solute molecules., B. Diffusion occurs across a semi-permeable membrane osmosis occurs across a permeable membrane., C. Diffusion moves particles from low to high concentration osmosis moves water from high to low concentration., D. Diffusion is the movement of particles from high to low concentration osmosis is the movement of water from low to high concentration.',
                        'A. It will shrink., B. It will swell., C. It will burst., D. There will be no change.',
						'A. Isotonic, B. Hypotonic, C. Hypertonic, D. Saturated',
                        'A. Water moves into the cell., B. Water moves out of the cell., C. There is no net movement of water., D. Solute moves into the cell.',
                        'A. By losing water and becoming flaccid., B. By gaining water and becoming turgid., C. By maintaining equal water concentration inside and outside the cell., D. By actively pumping solutes out of the cell.',
                        'A. It helps in active transport of molecules., B. It maintains constant internal conditions., C. It allows movement of solutes across the membrane., D. It prevents movement of water across the membrane.',
                        'A. It shrinks., B. It swells., C. It maintains its shape., D. It bursts.',
                        'A. Hypotonic, B. Hypertonic, C. Isotonic, D. Saturated',
                        'A. Movement of solutes into the vacuole, B. Movement of water out of the cell, C. Movement of water into the cell, D. Active transport of ions across the membrane',
                        'A. Moving water across a membrane, B. Moving substances from low to high concentration, C. Allowing only water movement, D. Releasing energy from respiration',
						'A. Movement of water molecules, B. Transport of substances along the concentration gradient, C. Absorption of ions from dilute solutions, D. Facilitation of osmosis in animal cells',
                        'A. To provide structural support, B. To store genetic information, C. To provide energy, D. To regulate body temperature',
                        'A. Starch, B. Cellulose, C. Glycogen, D. Sucrose',
                        'A. Glucose, B. Starch, C. Cellulose, D. Sucrose',
                        'A. Benedicts test, B. Iodine test, C. Biuret test, D. Grease spot test',
                        'A. Condensation, B. Oxidation, C. Hydrolysis, D. Reduction',
                        'A.Marasmus, B.Rickets, C.Anemia, D.Scurvy',
                        'A.They are primarily used for quick energy release., B.They are soluble in water., C.They contain a high proportion of oxygen., D.They dissolve in organic solvents but not in water.',
						'A.They have double bonds between carbon atoms., B.They are commonly found in plant lipids., C.They are liquid at room temperature., D.They have single covalent bonds between carbon atoms.',
                        'A.Structural support for bones, B.Primary source of vitamins, C.Essential for blood clotting, D.Energy storage and insulation',
                        'A. Saturated fatty acid, B. Monounsaturated fatty acid, C. Polyunsaturated fatty acid, D. Trans fatty acid',
                        'A.Vitamin A, B.Vitamin B1, C.Vitamin C, D.Vitamin D',
                        'A. Sodium, B. Magnesium, C. Phosphorus, D. Chlorine',
                        'A. Vitamin A, B. Vitamin C, C. Vitamin D, D. Vitamin B1',
                        'A. Making bones and teeth, B. Carrying oxygen in red blood cells, C. Maintaining body fluid levels, D. Sticking cells together',
                        'A. Energy production, B. Muscle growth, C. Peristalsis and preventing constipation, D. Maintaining fluid balance',
						'A.Teeth store saliva to aid in chemical digestion., B.The shape of teeth helps in breaking down food mechanically., C.Teeth produce enzymes that begin the breakdown of proteins., D.Teeth neutralize stomach acid before it enters the mouth.',
                        'A. Erepsin, B. Trypsin, C. Rennin, D. Pepsin',
                        'A. To increase the acidity for better enzyme function., B. To provide a larger surface area for nutrient absorption., C. To secrete digestive enzymes directly into the intestine., D. To protect against bacterial infections.',
                        'A. It is absorbed into the bloodstream., B. It is broken down by enzymes into simple sugars., C. It is stored temporarily in the appendix., D. Water is absorbed from it to form solid feces.',
                        'A. Ribcage expands diaphragm contracts, B. Ribcage contracts diaphragm relaxes, C. Ribcage contracts diaphragm contracts, D. Ribcage expands diaphragm relaxes',
                        'A. Large surface area, B. Thick mucus layer, C. Short diffusion distance, D. Moist surfaces',
                        'A. It opens the trachea wider to allow more air into the lungs., B. It produces mucus to moisten the air passing through., C. It closes off the trachea to prevent food from entering the lungs., D. It helps in the exchange of gases in the alveoli.',
                        'A. Decreases breathing rate due to higher oxygen levels, B. Increases breathing rate due to lower oxygen levels, C. No effect on breathing rate, D. Decreases breathing rate due to lower atmospheric pressure',
						'A. Tidal volume, B. Vital capacity, C. Residual volume, D. Inspiratory reserve volume',
                        'A. Increases more rapidly and takes longer to return to normal, B. Decreases significantly and stays low, C. Remains the same as at rest, D. Increases less rapidly and returns to normal faster',
                        'A. Vital capacity, B. Residual volume, C. Tidal volume, D. Total lung capacity',
                        'A. Glucose is fully broken down into carbon dioxide and water., B. Glucose is partially broken down into lactic acid and energy., C. Glucose is converted into ethanol and carbon dioxide., D. Glucose is stored as glycogen.',
                        'A. Both produce ethanol as a waste product., B. Both occur in the presence of oxygen., C. Both produce ATP without using oxygen., D. Both processes occur in the mitochondria.',
                        'A. Left atrium, B. Left ventricle, C. Right atrium, D. Right ventricle',
                        'A. Arteries, B. Veins, C. Capillariesc, D. Arterioles',
                        'A. To increase blood pressure, B. To prevent the backflow of blood, C. To store blood, D. To filter blood',
						'A. To pump blood to the lungs, B. To receive oxygenated blood from the lungs, C. To pump oxygenated blood to the body, D. To receive deoxygenated blood from the body',
                        'A. The contraction of the heart muscles, B. The opening and closing of the heart valves, C. The flow of blood through the coronary arteries, D. The movement of blood in the veins',
                        'A. Diastolic pressure, B. Systolic pressure, C. Venous pressure, D. Capillary pressure',
                        'A. Bicuspid valve, B. Tricuspid valve, C. Semilunar valve, D. Mitral valve',
                        'A. Left arm → Veins → Vena cava → Right atrium → Right ventricle → Pulmonary artery → Lungs → Left atrium → Left ventricle → Aorta → Arteries → Body, B. Left arm →Arteries → Aorta → Left atrium → Left ventricle → Pulmonary vein → Lungs → Right atrium → Right ventricle → Veins → vena cava → Body, C. Left arm →Veins → Vena cava → Left ventricle → Right atrium → Pulmonary artery → Lungs → Left atrium → Right ventricle → Aorta → Arteries → Body, D. Left arm → Arteries → Aorta → Right ventricle → Right atrium → Pulmonary vein → Lungs → Left atrium → Left ventricle → Vena cava → Veins → Body',
                        'A. Agglutination, B. Hemolysis, C. Thrombosis, D. Compatibility',
                        'A. Thrombocytes, B. Leucocytes, C. Erythrocytes, D. Plasma cells',
                        'A. Micro-organisms can arise from non-living things., B. Boiled broth will turn cloudy without exposure to air., C. Infectious diseases are caused by micro-organisms., D. Micro-organisms are not present in the air',
						'A. To prevent contamination of cultures, B. To enhance bacterial growth, C. To provide nutrients to bacteria, D. To cool the bacteria',
						'A. Antibodies, B. Antigens, C. Phagocytes, D. Hemoglobin',
                        'A. By storing the pathogen s DNA, B. By keeping a record of the pathogen s shape, C. By producing memory cells, D. By changing the bodys genetic code',
                        'A. Boiling, B. Autoclaving, C. Pasteurization, D. Dry heat',
                        'A. Heating food to 100 °C for 10 minutes, B. Heating food to 71.6 °C for 15 seconds, C. Heating food to 135-150 °C for 2-6 seconds, D. Heating food to 160 °C for 2 hours',
                        'A. It causes the disease in a mild form, B. It provides immediate immunity, C. It prevents future infections by the same pathogen, D. It eliminates the need for further medical treatment',
                        'A. Artificial active immunity, B. Artificial passive immunity, C. Natural active immunity, D. Natural passive immunity',
                        'A. Vitamin C, B. Vitamin D, C. Vitamin B12, D. Vitamin A',
                        'A. Mycobacterium tuberculosis mutates into a virus, B. Treatment with antibiotics is not completed as prescribed, C. BCG vaccine fails to protect against tuberculosis, D. Tuberculosis is transmitted through contaminated food',
						'A. Their capacity for long-distance flight, B. Their preference for human blood meals, C. Their adaptability to various environments, D. Their feeding activity during nighttime',
                        'A. Building more hospitals, B. Improving sanitation and access to clean water, C. Implementing mandatory vaccination programs, D. Encouraging travel restrictions',
                        'A. Blindness in the child, B. Deafness in the child, C. Developmental delay, D. Respiratory failure',
                        'A. They mimic common cold symptoms, B. They are asymptomatic, C. They are caused by different pathogens, D. They are only found in rural areas',
                        'A. To complicate their study., B. To create chaos and confusion., C. To simplify their study., D. To reduce biodiversity',
                        'A. They are used to confuse scientists., B. They are broadly similar across all species., C. They have no role in classification., D. They are used to determine relationships between species.',
                        'A. To make classification confusing., B. To make decisions about species classification., C. To simplify the identification of unknown organisms., D. To create chaos in biological studies.',
                        'A. Protista are multicellular while Monera are single-celled., B. Protista have eukaryotic cells while Monera have prokaryotic cells., C. Protista are photosynthetic while Monera are heterotrophic., D. Protista are found in terrestrial environments while Monera are aquatic.',
						'A. They produce their own food through photosynthesis., B. They are multicellular., C. They have eukaryotic cells., D. They are all decomposers',
                        'A. Nematoda, B. Arthropoda, C. Echinodermata, D. Platyhelminthes'
	                   ];


					   var imagesArray = [
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png',
						'paper_bg.png'
					];


	for(var i = 0; i < questionsArray.length; i++){
		trafficQuestion += '<hr> <p>' + (i + 1) + '. ' + questionsArray[i] + '</p>';
		// add the image
		trafficQuestion += '<div class="question_left">';
		trafficQuestion += '<img src="' + imagesArray[i] + '" class="traffic_img">';
		trafficQuestion += '</div>';

		// split choices string to choices array
		str = choicesArray[i].split(', ');

		// add the choice
		trafficQuestion += '<div class="question_right">';
		trafficQuestion += '<form>';

		// give different ID to each choice; 
		// id = choice0_0, choice0_1, choice0_2, choice0_3 .... first question
		// id = choice1_0, choice1_1, choice1_2, choice1_3 .... second question
		// id = choice2_0, choice2_1, choice2_2, choice2_3 .... third question

		// loop through choices
		for(var j = 0; j < str.length; j++){

			trafficQuestion += '<label class="choices">';
			trafficQuestion += str[j];
			trafficQuestion += '<input id="choice' + i + '_' + j + '" type="radio" name="radio" value="' + str[j] + '">';
			trafficQuestion += '<span class="checkmark"></span>';
			trafficQuestion += '</label>';
			
		}
		trafficQuestion += '</form>';
		trafficQuestion += '</div>';


	}


	return trafficQuestion;
}

// this function submits answers on button click
function submitAnswer(event){
	event.preventDefault();

	// capture student answers
	// only 10 answers submitted!!
	var question_0_answer, question_1_answer, question_2_answer, question_3_answer,
	question_4_answer, question_5_answer, question_6_answer, question_7_answer,
	question_8_answer, question_9_answer, question_10_answer, question_11_answer, question_12_answer, question_13_answer,
	question_14_answer, question_15_answer, question_16_answer, question_17_answer,
	question_18_answer, question_19_answer, question_20_answer, question_21_answer, question_22_answer, question_23_answer,
	question_24_answer, question_25_answer, question_26_answer, question_27_answer,
	question_28_answer, question_29_answer, question_30_answer, question_31_answer, question_32_answer, question_33_answer,
	question_34_answer, question_35_answer, question_36_answer, question_37_answer,
	question_38_answer, question_39_answer, question_40_answer, question_41_answer, question_42_answer, question_43_answer,
	question_44_answer, question_45_answer, question_46_answer, question_47_answer,
	question_48_answer, question_49_answer, question_50_answer, question_51_answer, question_52_answer, question_53_answer,
	question_54_answer, question_55_answer, question_56_answer, question_57_answer,
	question_58_answer, question_59_answer, question_60_answer, question_61_answer, question_62_answer, question_63_answer,
	question_64_answer, question_65_answer, question_66_answer, question_67_answer,
	question_68_answer, question_69_answer, question_70_answer, question_71_answer, question_72_answer, question_73_answer,
	question_74_answer, question_75_answer, question_76_answer, question_77_answer,
	question_78_answer, question_79_answer, question_80_answer, question_81_answer, question_82_answer, question_83_answer,
	question_84_answer, question_85_answer, question_86_answer, question_87_answer,
	question_88_answer, question_89_answer, question_90_answer, question_91_answer, question_92_answer, question_93_answer,
	question_94_answer, question_95_answer, question_96_answer, question_97_answer,
	question_98_answer, question_99_answer;

	var studentAnswersArr, correctAnswersArr;

	// collect choices first, 40 choices for 10 questions
	var question_0_choices_array = [], question_1_choices_array = [], question_2_choices_array = [],
		question_3_choices_array = [], question_4_choices_array = [], question_5_choices_array = [],
		question_6_choices_array = [], question_7_choices_array = [], question_8_choices_array = [],
		question_9_choices_array = [], question_10_choices_array = [], question_11_choices_array = [], question_12_choices_array = [],
		question_13_choices_array = [], question_14_choices_array = [], question_15_choices_array = [],
		question_16_choices_array = [], question_17_choices_array = [], question_18_choices_array = [],
		question_19_choices_array = [], question_20_choices_array = [], question_21_choices_array = [], question_22_choices_array = [],
		question_23_choices_array = [], question_24_choices_array = [], question_25_choices_array = [],
		question_26_choices_array = [], question_27_choices_array = [], question_28_choices_array = [],
		question_29_choices_array = [], question_30_choices_array = [], question_31_choices_array = [], question_32_choices_array = [],
		question_33_choices_array = [], question_34_choices_array = [], question_35_choices_array = [],
		question_36_choices_array = [], question_37_choices_array = [], question_38_choices_array = [],
		question_39_choices_array = [], question_40_choices_array = [], question_41_choices_array = [], question_42_choices_array = [],
		question_43_choices_array = [], question_44_choices_array = [], question_45_choices_array = [],
		question_46_choices_array = [], question_47_choices_array = [], question_48_choices_array = [],
		question_49_choices_array = [], question_50_choices_array = [], question_51_choices_array = [], question_52_choices_array = [],
		question_53_choices_array = [], question_54_choices_array = [], question_55_choices_array = [],
		question_56_choices_array = [], question_57_choices_array = [], question_58_choices_array = [],
		question_59_choices_array = [], question_60_choices_array = [], question_61_choices_array = [], question_62_choices_array = [],
		question_63_choices_array = [], question_64_choices_array = [], question_65_choices_array = [],
		question_66_choices_array = [], question_67_choices_array = [], question_68_choices_array = [],
		question_69_choices_array = [], question_70_choices_array = [], question_71_choices_array = [], question_72_choices_array = [],
		question_73_choices_array = [], question_74_choices_array = [], question_75_choices_array = [],
		question_76_choices_array = [], question_77_choices_array = [], question_78_choices_array = [],
		question_79_choices_array = [], question_80_choices_array = [], question_81_choices_array = [], question_82_choices_array = [],
		question_83_choices_array = [], question_84_choices_array = [], question_85_choices_array = [],
		question_86_choices_array = [], question_87_choices_array = [], question_88_choices_array = [],
		question_89_choices_array = [], question_90_choices_array = [], question_91_choices_array = [], question_92_choices_array = [],
		question_93_choices_array = [], question_94_choices_array = [], question_95_choices_array = [],
		question_96_choices_array = [], question_97_choices_array = [], question_98_choices_array = [],
		question_99_choices_array = [];
		
		
		// 4 choices

	for(var i = 0; i < 4; i++){
		question_0_choices_array[i] = document.getElementById('choice0_' + i); // 0_0, 0_1, 0_2, 0_3
		question_1_choices_array[i] = document.getElementById('choice1_' + i); // 1_0, 1_1, 1_2, 1_3
		question_2_choices_array[i] = document.getElementById('choice2_' + i);
		question_3_choices_array[i] = document.getElementById('choice3_' + i);
		question_4_choices_array[i] = document.getElementById('choice4_' + i);
		question_5_choices_array[i] = document.getElementById('choice5_' + i);
		question_6_choices_array[i] = document.getElementById('choice6_' + i);
		question_7_choices_array[i] = document.getElementById('choice7_' + i);
		question_8_choices_array[i] = document.getElementById('choice8_' + i);
		question_9_choices_array[i] = document.getElementById('choice9_' + i);

		question_10_choices_array[i] = document.getElementById('choice10_' + i); // 0_0, 0_1, 0_2, 0_3
		question_11_choices_array[i] = document.getElementById('choice11_' + i); // 1_0, 1_1, 1_2, 1_3
		question_12_choices_array[i] = document.getElementById('choice12_' + i);
		question_13_choices_array[i] = document.getElementById('choice13_' + i);
		question_14_choices_array[i] = document.getElementById('choice14_' + i);
		question_15_choices_array[i] = document.getElementById('choice15_' + i);
		question_16_choices_array[i] = document.getElementById('choice16_' + i);
		question_17_choices_array[i] = document.getElementById('choice17_' + i);
		question_18_choices_array[i] = document.getElementById('choice18_' + i);
		question_19_choices_array[i] = document.getElementById('choice19_' + i);

		question_20_choices_array[i] = document.getElementById('choice20_' + i); // 0_0, 0_1, 0_2, 0_3
		question_21_choices_array[i] = document.getElementById('choice21_' + i); // 1_0, 1_1, 1_2, 1_3
		question_22_choices_array[i] = document.getElementById('choice22_' + i);
		question_23_choices_array[i] = document.getElementById('choice23_' + i);
		question_24_choices_array[i] = document.getElementById('choice24_' + i);
		question_25_choices_array[i] = document.getElementById('choice25_' + i);
		question_26_choices_array[i] = document.getElementById('choice26_' + i);
		question_27_choices_array[i] = document.getElementById('choice27_' + i);
		question_28_choices_array[i] = document.getElementById('choice28_' + i);
		question_29_choices_array[i] = document.getElementById('choice29_' + i);

		question_30_choices_array[i] = document.getElementById('choice30_' + i); // 0_0, 0_1, 0_2, 0_3
		question_31_choices_array[i] = document.getElementById('choice31_' + i); // 1_0, 1_1, 1_2, 1_3
		question_32_choices_array[i] = document.getElementById('choice32_' + i);
		question_33_choices_array[i] = document.getElementById('choice33_' + i);
		question_34_choices_array[i] = document.getElementById('choice34_' + i);
		question_35_choices_array[i] = document.getElementById('choice35_' + i);
		question_36_choices_array[i] = document.getElementById('choice36_' + i);
		question_37_choices_array[i] = document.getElementById('choice37_' + i);
		question_38_choices_array[i] = document.getElementById('choice38_' + i);
		question_39_choices_array[i] = document.getElementById('choice39_' + i);

		question_40_choices_array[i] = document.getElementById('choice40_' + i); // 0_0, 0_1, 0_2, 0_3
		question_41_choices_array[i] = document.getElementById('choice41_' + i); // 1_0, 1_1, 1_2, 1_3
		question_42_choices_array[i] = document.getElementById('choice42_' + i);
		question_43_choices_array[i] = document.getElementById('choice43_' + i);
		question_44_choices_array[i] = document.getElementById('choice44_' + i);
		question_45_choices_array[i] = document.getElementById('choice45_' + i);
		question_46_choices_array[i] = document.getElementById('choice46_' + i);
		question_47_choices_array[i] = document.getElementById('choice47_' + i);
		question_48_choices_array[i] = document.getElementById('choice48_' + i);
		question_49_choices_array[i] = document.getElementById('choice49_' + i);

		question_50_choices_array[i] = document.getElementById('choice50_' + i); // 0_0, 0_1, 0_2, 0_3
		question_51_choices_array[i] = document.getElementById('choice51_' + i); // 1_0, 1_1, 1_2, 1_3
		question_52_choices_array[i] = document.getElementById('choice52_' + i);
		question_53_choices_array[i] = document.getElementById('choice53_' + i);
		question_54_choices_array[i] = document.getElementById('choice54_' + i);
		question_55_choices_array[i] = document.getElementById('choice55_' + i);
		question_56_choices_array[i] = document.getElementById('choice56_' + i);
		question_57_choices_array[i] = document.getElementById('choice57_' + i);
		question_58_choices_array[i] = document.getElementById('choice58_' + i);
		question_59_choices_array[i] = document.getElementById('choice59_' + i);

		question_60_choices_array[i] = document.getElementById('choice60_' + i); // 0_0, 0_1, 0_2, 0_3
		question_61_choices_array[i] = document.getElementById('choice61_' + i); // 1_0, 1_1, 1_2, 1_3
		question_62_choices_array[i] = document.getElementById('choice62_' + i);
		question_63_choices_array[i] = document.getElementById('choice63_' + i);
		question_64_choices_array[i] = document.getElementById('choice64_' + i);
		question_65_choices_array[i] = document.getElementById('choice65_' + i);
		question_66_choices_array[i] = document.getElementById('choice66_' + i);
		question_67_choices_array[i] = document.getElementById('choice67_' + i);
		question_68_choices_array[i] = document.getElementById('choice68_' + i);
		question_69_choices_array[i] = document.getElementById('choice69_' + i);

		question_70_choices_array[i] = document.getElementById('choice70_' + i); // 0_0, 0_1, 0_2, 0_3
		question_71_choices_array[i] = document.getElementById('choice71_' + i); // 1_0, 1_1, 1_2, 1_3
		question_72_choices_array[i] = document.getElementById('choice72_' + i);
		question_73_choices_array[i] = document.getElementById('choice73_' + i);
		question_74_choices_array[i] = document.getElementById('choice74_' + i);
		question_75_choices_array[i] = document.getElementById('choice75_' + i);
		question_76_choices_array[i] = document.getElementById('choice76_' + i);
		question_77_choices_array[i] = document.getElementById('choice77_' + i);
		question_78_choices_array[i] = document.getElementById('choice78_' + i);
		question_79_choices_array[i] = document.getElementById('choice79_' + i);

		question_80_choices_array[i] = document.getElementById('choice80_' + i); // 0_0, 0_1, 0_2, 0_3
		question_81_choices_array[i] = document.getElementById('choice81_' + i); // 1_0, 1_1, 1_2, 1_3
		question_82_choices_array[i] = document.getElementById('choice82_' + i);
		question_83_choices_array[i] = document.getElementById('choice83_' + i);
		question_84_choices_array[i] = document.getElementById('choice84_' + i);
		question_85_choices_array[i] = document.getElementById('choice85_' + i);
		question_86_choices_array[i] = document.getElementById('choice86_' + i);
		question_87_choices_array[i] = document.getElementById('choice87_' + i);
		question_88_choices_array[i] = document.getElementById('choice88_' + i);
		question_89_choices_array[i] = document.getElementById('choice89_' + i);

		question_90_choices_array[i] = document.getElementById('choice90_' + i); // 0_0, 0_1, 0_2, 0_3
		question_91_choices_array[i] = document.getElementById('choice91_' + i); // 1_0, 1_1, 1_2, 1_3
		question_92_choices_array[i] = document.getElementById('choice92_' + i);
		question_93_choices_array[i] = document.getElementById('choice93_' + i);
		question_94_choices_array[i] = document.getElementById('choice94_' + i);
		question_95_choices_array[i] = document.getElementById('choice95_' + i);
		question_96_choices_array[i] = document.getElementById('choice96_' + i);
		question_97_choices_array[i] = document.getElementById('choice97_' + i);
		question_98_choices_array[i] = document.getElementById('choice98_' + i);
		question_99_choices_array[i] = document.getElementById('choice99_' + i);

		// if the choice is selected, the submit it as student answer
		if(question_0_choices_array[i].checked){
			question_0_answer = question_0_choices_array[i].value;
		}

		if(question_1_choices_array[i].checked){
			question_1_answer = question_1_choices_array[i].value;
		}

		if(question_2_choices_array[i].checked){
			question_2_answer = question_2_choices_array[i].value;
		}
		if(question_3_choices_array[i].checked){
			question_3_answer = question_3_choices_array[i].value;
		}
		if(question_4_choices_array[i].checked){
			question_4_answer = question_4_choices_array[i].value;
		}
		if(question_5_choices_array[i].checked){
			question_5_answer = question_5_choices_array[i].value;
		}
		if(question_6_choices_array[i].checked){
			question_6_answer = question_6_choices_array[i].value;
		}
		if(question_7_choices_array[i].checked){
			question_7_answer = question_7_choices_array[i].value;
		}
		if(question_8_choices_array[i].checked){
			question_8_answer = question_8_choices_array[i].value;
		}
		if(question_9_choices_array[i].checked){
			question_9_answer = question_9_choices_array[i].value;
		}
		if(question_10_choices_array[i].checked){
			question_10_answer = question_10_choices_array[i].value;
		}
		if(question_11_choices_array[i].checked){
			question_11_answer = question_11_choices_array[i].value;
		}
		if(question_12_choices_array[i].checked){
			question_12_answer = question_12_choices_array[i].value;
		}
		if(question_13_choices_array[i].checked){
			question_13_answer = question_13_choices_array[i].value;
		}
		if(question_14_choices_array[i].checked){
			question_14_answer = question_14_choices_array[i].value;
		}
		if(question_15_choices_array[i].checked){
			question_15_answer = question_15_choices_array[i].value;
		}
		if(question_16_choices_array[i].checked){
			question_16_answer = question_16_choices_array[i].value;
		}
		if(question_17_choices_array[i].checked){
			question_17_answer = question_17_choices_array[i].value;
		}
		if(question_18_choices_array[i].checked){
			question_18_answer = question_18_choices_array[i].value;
		}
		if(question_19_choices_array[i].checked){
			question_19_answer = question_19_choices_array[i].value;
		}
		if(question_20_choices_array[i].checked){
			question_20_answer = question_20_choices_array[i].value;
		}
		if(question_21_choices_array[i].checked){
			question_21_answer = question_21_choices_array[i].value;
		}
		if(question_22_choices_array[i].checked){
			question_22_answer = question_22_choices_array[i].value;
		}

		if(question_23_choices_array[i].checked){
			question_23_answer = question_23_choices_array[i].value;
		}

		if(question_24_choices_array[i].checked){
			question_24_answer = question_24_choices_array[i].value;
		}
		if(question_25_choices_array[i].checked){
			question_25_answer = question_25_choices_array[i].value;
		}
		if(question_26_choices_array[i].checked){
			question_26_answer = question_26_choices_array[i].value;
		}
		if(question_27_choices_array[i].checked){
			question_27_answer = question_27_choices_array[i].value;
		}
		if(question_28_choices_array[i].checked){
			question_28_answer = question_28_choices_array[i].value;
		}
		if(question_29_choices_array[i].checked){
			question_29_answer = question_29_choices_array[i].value;
		}
		if(question_30_choices_array[i].checked){
			question_30_answer = question_30_choices_array[i].value;
		}
		if(question_31_choices_array[i].checked){
			question_31_answer = question_31_choices_array[i].value;
		}

		if(question_32_choices_array[i].checked){
			question_32_answer = question_32_choices_array[i].value;
		}
		if(question_33_choices_array[i].checked){
			question_33_answer = question_33_choices_array[i].value;
		}
		if(question_34_choices_array[i].checked){
			question_34_answer = question_34_choices_array[i].value;
		}
		if(question_35_choices_array[i].checked){
			question_35_answer = question_35_choices_array[i].value;
		}
		if(question_36_choices_array[i].checked){
			question_36_answer = question_36_choices_array[i].value;
		}
		if(question_37_choices_array[i].checked){
			question_37_answer = question_37_choices_array[i].value;
		}
		if(question_38_choices_array[i].checked){
			question_38_answer = question_38_choices_array[i].value;
		}
		if(question_39_choices_array[i].checked){
			question_39_answer = question_39_choices_array[i].value;
		}
		if(question_40_choices_array[i].checked){
			question_40_answer = question_40_choices_array[i].value;
		}

		if(question_41_choices_array[i].checked){
			question_41_answer = question_41_choices_array[i].value;
		}

		if(question_42_choices_array[i].checked){
			question_42_answer = question_42_choices_array[i].value;
		}
		if(question_43_choices_array[i].checked){
			question_43_answer = question_43_choices_array[i].value;
		}
		if(question_44_choices_array[i].checked){
			question_44_answer = question_44_choices_array[i].value;
		}
		if(question_45_choices_array[i].checked){
			question_45_answer = question_45_choices_array[i].value;
		}
		if(question_46_choices_array[i].checked){
			question_46_answer = question_46_choices_array[i].value;
		}
		if(question_47_choices_array[i].checked){
			question_47_answer = question_47_choices_array[i].value;
		}
		if(question_48_choices_array[i].checked){
			question_48_answer = question_48_choices_array[i].value;
		}
		if(question_49_choices_array[i].checked){
			question_49_answer = question_49_choices_array[i].value;
		}
		if(question_50_choices_array[i].checked){
			question_50_answer = question_50_choices_array[i].value;
		}

		if(question_51_choices_array[i].checked){
			question_51_answer = question_51_choices_array[i].value;
		}

		if(question_52_choices_array[i].checked){
			question_52_answer = question_52_choices_array[i].value;
		}
		if(question_53_choices_array[i].checked){
			question_53_answer = question_53_choices_array[i].value;
		}
		if(question_54_choices_array[i].checked){
			question_54_answer = question_54_choices_array[i].value;
		}
		if(question_55_choices_array[i].checked){
			question_55_answer = question_55_choices_array[i].value;
		}
		if(question_56_choices_array[i].checked){
			question_56_answer = question_56_choices_array[i].value;
		}
		if(question_57_choices_array[i].checked){
			question_57_answer = question_57_choices_array[i].value;
		}
		if(question_58_choices_array[i].checked){
			question_58_answer = question_58_choices_array[i].value;
		}
		if(question_59_choices_array[i].checked){
			question_59_answer = question_59_choices_array[i].value;
		}
		if(question_60_choices_array[i].checked){
			question_60_answer = question_60_choices_array[i].value;
		}

		if(question_61_choices_array[i].checked){
			question_61_answer = question_61_choices_array[i].value;
		}

		if(question_62_choices_array[i].checked){
			question_62_answer = question_62_choices_array[i].value;
		}
		if(question_63_choices_array[i].checked){
			question_63_answer = question_63_choices_array[i].value;
		}
		if(question_64_choices_array[i].checked){
			question_64_answer = question_64_choices_array[i].value;
		}
		if(question_65_choices_array[i].checked){
			question_65_answer = question_65_choices_array[i].value;
		}
		if(question_66_choices_array[i].checked){
			question_66_answer = question_66_choices_array[i].value;
		}
		if(question_67_choices_array[i].checked){
			question_67_answer = question_67_choices_array[i].value;
		}
		if(question_68_choices_array[i].checked){
			question_68_answer = question_68_choices_array[i].value;
		}
		if(question_69_choices_array[i].checked){
			question_69_answer = question_69_choices_array[i].value;
		}
		if(question_70_choices_array[i].checked){
			question_70_answer = question_70_choices_array[i].value;
		}

		if(question_71_choices_array[i].checked){
			question_71_answer = question_71_choices_array[i].value;
		}

		if(question_72_choices_array[i].checked){
			question_72_answer = question_72_choices_array[i].value;
		}
		if(question_73_choices_array[i].checked){
			question_73_answer = question_73_choices_array[i].value;
		}
		if(question_74_choices_array[i].checked){
			question_74_answer = question_74_choices_array[i].value;
		}
		if(question_75_choices_array[i].checked){
			question_75_answer = question_75_choices_array[i].value;
		}
		if(question_76_choices_array[i].checked){
			question_76_answer = question_76_choices_array[i].value;
		}
		if(question_77_choices_array[i].checked){
			question_77_answer = question_77_choices_array[i].value;
		}
		if(question_78_choices_array[i].checked){
			question_78_answer = question_78_choices_array[i].value;
		}
		if(question_79_choices_array[i].checked){
			question_79_answer = question_79_choices_array[i].value;
		}
		if(question_80_choices_array[i].checked){
			question_80_answer = question_80_choices_array[i].value;
		}

		if(question_81_choices_array[i].checked){
			question_81_answer = question_81_choices_array[i].value;
		}

		if(question_82_choices_array[i].checked){
			question_82_answer = question_82_choices_array[i].value;
		}
		if(question_83_choices_array[i].checked){
			question_83_answer = question_83_choices_array[i].value;
		}
		if(question_84_choices_array[i].checked){
			question_84_answer = question_84_choices_array[i].value;
		}
		if(question_85_choices_array[i].checked){
			question_85_answer = question_85_choices_array[i].value;
		}
		if(question_86_choices_array[i].checked){
			question_86_answer = question_86_choices_array[i].value;
		}
		if(question_87_choices_array[i].checked){
			question_87_answer = question_87_choices_array[i].value;
		}
		if(question_88_choices_array[i].checked){
			question_88_answer = question_88_choices_array[i].value;
		}
		if(question_89_choices_array[i].checked){
			question_89_answer = question_89_choices_array[i].value;
		}
		if(question_90_choices_array[i].checked){
			question_90_answer = question_90_choices_array[i].value;
		}

		if(question_91_choices_array[i].checked){
			question_91_answer = question_91_choices_array[i].value;
		}

		if(question_92_choices_array[i].checked){
			question_92_answer = question_92_choices_array[i].value;
		}
		if(question_93_choices_array[i].checked){
			question_93_answer = question_93_choices_array[i].value;
		}
		if(question_94_choices_array[i].checked){
			question_94_answer = question_94_choices_array[i].value;
		}
		if(question_95_choices_array[i].checked){
			question_95_answer = question_95_choices_array[i].value;
		}
		if(question_96_choices_array[i].checked){
			question_96_answer = question_96_choices_array[i].value;
		}
		if(question_97_choices_array[i].checked){
			question_97_answer = question_97_choices_array[i].value;
		}
		if(question_98_choices_array[i].checked){
			question_98_answer = question_98_choices_array[i].value;
		}
		if(question_99_choices_array[i].checked){
			question_99_answer = question_99_choices_array[i].value;
		}

	}

	// gather student 10 answers
	studentAnswersArr = [question_0_answer, question_1_answer, question_2_answer, question_3_answer,
		question_4_answer, question_5_answer, question_6_answer, question_7_answer,
		question_8_answer, question_9_answer, question_10_answer, question_11_answer, question_12_answer, question_13_answer,
		question_14_answer, question_15_answer, question_16_answer, question_17_answer,
		question_18_answer, question_19_answer, question_20_answer, question_21_answer, question_22_answer, question_23_answer,
		question_24_answer, question_25_answer, question_26_answer, question_27_answer,
		question_28_answer, question_29_answer, question_30_answer, question_31_answer, question_32_answer, question_33_answer,
		question_34_answer, question_35_answer, question_36_answer, question_37_answer,
		question_38_answer, question_39_answer, question_40_answer, question_41_answer, question_42_answer, question_43_answer,
		question_44_answer, question_45_answer, question_46_answer, question_47_answer,
		question_48_answer, question_49_answer, question_50_answer, question_51_answer, question_52_answer, question_53_answer,
		question_54_answer, question_55_answer, question_56_answer, question_57_answer,
		question_58_answer, question_59_answer, question_60_answer, question_61_answer, question_62_answer, question_63_answer,
		question_64_answer, question_65_answer, question_66_answer, question_67_answer,
		question_68_answer, question_69_answer, question_70_answer, question_71_answer, question_72_answer, question_73_answer,
		question_74_answer, question_75_answer, question_76_answer, question_77_answer,
		question_78_answer, question_79_answer, question_80_answer, question_81_answer, question_82_answer, question_83_answer,
		question_84_answer, question_85_answer, question_86_answer, question_87_answer,
		question_88_answer, question_89_answer, question_90_answer, question_91_answer, question_92_answer, question_93_answer,
		question_94_answer, question_95_answer, question_96_answer, question_97_answer,
		question_98_answer, question_99_answer];

	// b, c, a, b, d, b, b, d, c, c

	correctAnswersArr = ['A. Dr. Tewolde Berhan Gebre Egziabher',
		'B. Schistosomiasis',
		'B. Aklilu Lemma Institute of Pathobiology (ALIPB)',
		'D. To improve resolution by reducing light refraction',
		'B. To make the cells easier to see',
		'B. Use of lead and uranium stains',
		'C. Specimens must be observed in a vacuum',
		'C. Nuclei',
		'B. Cytoplasm',
		'C. It allows some substances to pass through but not others.',
		'C. Keeping the cells rigid to support the plant.',
		'C. Digestion',
		'A. Cells are the fundamental structural and functional units of all living organisms.',
		'A. It involves cells adapting to perform specific functions based on their location in the embryo and genetic instructions.',
		'C. To provide energy for muscle contraction.',
		'C. To move mucus and microbes away from the lungs.',
		'B. Their flattened shape or presence of microvilli.',
		'C. To move mucus and microbes away from the lungs.',
		'B. They have a long tail for propulsion.',
		'B. By switching on and off certain genes in the nucleus.',
		'B. Cells that have not yet assumed their final functional characteristics.',
		'C. By compartmentalizing different cellular activities.',
		'C. Enzymes regulate the rate of specific chemical reactions.',
		'A. To create a controlled environment for chemical reactions to prevent chaos.',
		'C. Because of the random movement of particles',
		'D. Increasing the surface area of the cell membrane',
		'A. Gradient',
		'C. Involves movement from high to low concentration',
		'C. It facilitates the movement of essential substances like oxygen and glucose',
		'C. There is no net movement of water.',
		'C. Plasma membrane',
		'D. Diffusion is the movement of particles from high to low concentration osmosis is the movement of water from low to high concentration.',
		'B. It will swell.',
		'C. Hypertonic',
		'B. Water moves out of the cell.',
		'B. By gaining water and becoming turgid.',
		'B. It maintains constant internal conditions.',
		'A. It shrinks.',
		'C. Isotonic',
		'C. Movement of water into the cell',
		'B. Moving substances from low to high concentration',
		'C. Absorption of ions from dilute solutions',
		'C. To provide energy',
		'C. Glycogen',
		'C. Cellulose',
		'B. Iodine test',
		'A. Condensation',
		'A.Marasmus',
		'D.They dissolve in organic solvents but not in water.',
		'D.They have single covalent bonds between carbon atoms.',
		'D.Energy storage and insulation',
		'C. Polyunsaturated fatty acid',
		'A.Vitamin A',
		'C. Phosphorus',
		'C. Vitamin D',
		'C. Maintaining body fluid levels',
		'C. Peristalsis and preventing constipation',
		'B.The shape of teeth helps in breaking down food mechanically.',
		'D. Pepsin',
		'B. To provide a larger surface area for nutrient absorption.',
		'D. Water is absorbed from it to form solid feces.',
		'B. Ribcage contracts diaphragm relaxes',
		'B. Thick mucus layer',
		'C. It closes off the trachea to prevent food from entering the lungs.',
		'B. Increases breathing rate due to lower oxygen levels',
		'B. Vital capacity',
		'D. Increases less rapidly and returns to normal faster',
		'C. Tidal volume',
		'B. Glucose is partially broken down into lactic acid and energy.',
		'C. Both produce ATP without using oxygen.',
		'C. Right atrium',
		'C. Capillariesc',
		'B. To prevent the backflow of blood',
		'C. To pump oxygenated blood to the body',
		'B. The opening and closing of the heart valves',
		'B. Systolic pressure',
		'B. Tricuspid valve',
		'A. Left arm → Veins → Vena cava → Right atrium → Right ventricle → Pulmonary artery → Lungs → Left atrium → Left ventricle → Aorta → Arteries → Body',
		'A. Agglutination',
		'B. Leucocytes',
		'C. Infectious diseases are caused by micro-organisms.',
		'A. To prevent contamination of cultures',
		'B. Antigens',
		'C. By producing memory cells',
		'D. Dry heat',
		'C. Heating food to 135-150 °C for 2-6 seconds',
		'C. It prevents future infections by the same pathogen',
		'D. Natural passive immunity',
		'C. Vitamin B12',
		'B. Treatment with antibiotics is not completed as prescribed',
		'B. Their preference for human blood meals',
		'B. Improving sanitation and access to clean water',
		'A. Blindness in the child',
		'B. They are asymptomatic',						 
		'C. To simplify their study.',
		'D. They are used to determine relationships between species.',
		'C. To simplify the identification of unknown organisms.',
		'B. Protista have eukaryotic cells while Monera have prokaryotic cells.',
		'C. They have eukaryotic cells.',
		'A. Nematoda'
	   ];




	// sent submitted choices for grading
	gradeAnswers(studentAnswersArr, correctAnswersArr);
}


// this function grades submitted answers
function gradeAnswers(responseArr, correctArr){
	var counter = 0, finalGrade, decision, message, certificate;
	
	// get student info from output
	var stu_info_arr = studentInfo(); // name, gender, age, nationality

	// get current date
	var today = generateDate();



	// compare to the correct answers and !!COUNT!! the correct ones
	for(var i = 0; i < responseArr.length; i++){
		if(responseArr[i] == correctArr[i]){
			counter++; // increases as answer is correct
		}
	}


	// final grade out of 100%
	// if answers 6 out of 10, 6/10 = 0.6; 0.6*100 = 60; score = 60%
	finalGrade = counter;

	// decide the passing grade, only allowd to miss one question
	if(finalGrade >= 75){
		decision = 'Passed!';
		message = 'Congradulations!';
	} else {
		decision = 'Failed!';
		message = 'Sorry!';
	}

	// generate certificate
	certificate = '=================ETHIOPIA ENTRANCE EXAMINATION (EUEE) BIOLOGY====================';
	certificate += '<br>student: ' + stu_info_arr[0];
	certificate += '<br>Exam taken on: ' + today;
	certificate += '<br>Score: ' + finalGrade + '%';
	certificate += '<br>Decision: ' + decision;
	certificate += '<br>' + message;


	certificate += '<br>Correct Answers: 1. A. Dr. Tewolde Berhan Gebre Egziabher.'
	certificate += '<br>Correct Answers: 2. B. Schistosomiasis.'
	certificate += '<br>Correct Answers: 3. B. Aklilu Lemma Institute of Pathobiology (ALIPB).'
	certificate += '<br>Correct Answers: 4. D. To improve resolution by reducing light refraction.' 
	certificate += '<br>Correct Answers: 5. B. To make the cells easier to see.' 
	certificate += '<br>Correct Answers: 6. B. Use of lead and uranium stains.'
	certificate += '<br>Correct Answers: 7. C. Specimens must be observed in a vacuum.'
	certificate += '<br>Correct Answers: 8. C. Nuclei.'
	certificate += '<br>Correct Answers: 9. B. Cytoplasm.'
    certificate += '<br>Correct Answers: 10. C. It allows some substances to pass through but not others.'
    certificate += '<br>Correct Answers: 11. C. Keeping the cells rigid to support the plant.'
    certificate += '<br>Correct Answers: 12. C. Digestion.'
    certificate += '<br>Correct Answers: 13. A. Cells are the fundamental structural and functional units of all living organisms.'
    certificate += '<br>Correct Answers: 14. A. It involves cells adapting to perform specific functions based on their location in the embryo and genetic instructions.'
	certificate += '<br>Correct Answers: 15. C. To provide energy for muscle contraction.'
	certificate += '<br>Correct Answers: 16. C. To move mucus and microbes away from the lungs.'
	certificate += '<br>Correct Answers: 17. B. Their flattened shape or presence of microvilli.'
	certificate += '<br>Correct Answers: 18. C. To move mucus and microbes away from the lungs.'
	certificate += '<br>Correct Answers: 19. B. They have a long tail for propulsion.'
	certificate += '<br>Correct Answers: 20. B. By switching on and off certain genes in the nucleus.'
	certificate += '<br>Correct Answers: 21. B. Cells that have not yet assumed their final functional characteristics.'
	certificate += '<br>Correct Answers: 22. C. By compartmentalizing different cellular activities.'
	certificate += '<br>Correct Answers: 23. C. Enzymes regulate the rate of specific chemical reactions.'
	certificate += '<br>Correct Answers: 24. A. To create a controlled environment for chemical reactions to prevent chaos.'
	certificate += '<br>Correct Answers: 25. C. Because of the random movement of particles.'
	certificate += '<br>Correct Answers: 26. D. Increasing the surface area of the cell membrane.'
	certificate += '<br>Correct Answers: 27. A. Gradient.'
	certificate += '<br>Correct Answers: 28. C. Involves movement from high to low concentration.'
	certificate += '<br>Correct Answers: 29. C. It facilitates the movement of essential substances like oxygen and glucose.'
	certificate += '<br>Correct Answers: 30. C. There is no net movement of water.'
	certificate += '<br>Correct Answers: 31. C. Plasma membrane.'
	certificate += '<br>Correct Answers: 32. D. Diffusion is the movement of particles from high to low concentration; osmosis is the movement of water from low to high concentration.'
	certificate += '<br>Correct Answers: 33. B. It will swell.'
	certificate += '<br>Correct Answers: 34. C. Hypertonic.'
	certificate += '<br>Correct Answers: 35. B. Water moves out of the cell.'
	certificate += '<br>Correct Answers: 36. B. By gaining water and becoming turgid.'
	certificate += '<br>Correct Answers: 37. B. It maintains constant internal conditions.'
	certificate += '<br>Correct Answers: 38. A. It shrinks.'
	certificate += '<br>Correct Answers: 39. C. Isotonic.'
	certificate += '<br>Correct Answers: 40. C. Movement of water into the cell.'
	certificate += '<br>Correct Answers: 41. B. Moving substances from low to high concentration.'
	certificate += '<br>Correct Answers: 42. C. Absorption of ions from dilute solutions.'
	certificate += '<br>Correct Answers: 43. C. To provide energy.'
	certificate += '<br>Correct Answers: 44. C. GlycogenJuly.'
	certificate += '<br>Correct Answers: 45. C. Cellulose.'
	certificate += '<br>Correct Answers: 46. B. Iodine test.'
	certificate += '<br>Correct Answers: 47. A. Condensation.'
	certificate += '<br>Correct Answers: 48. A. Marasmus.'
	certificate += '<br>Correct Answers: 49. D. They dissolve in organic solvents but not in water.'
	certificate += '<br>Correct Answers: 50. D. They have single covalent bonds between carbon atoms.'
	certificate += '<br>Correct Answers: 51. D. Energy storage and insulation.'
	certificate += '<br>Correct Answers: 52. C. Polyunsaturated fatty acid.'
	certificate += '<br>Correct Answers: 53. A. Vitamin A.'
	certificate += '<br>Correct Answers: 54. C. Phosphorus.'
	certificate += '<br>Correct Answers: 55. C. Vitamin D.'
	certificate += '<br>Correct Answers: 56. C. Maintaining body fluid levels.'
	certificate += '<br>Correct Answers: 57. C. Peristalsis and preventing constipation.'
	certificate += '<br>Correct Answers: 58. B. The shape of teeth helps in breaking down food mechanically.'
	certificate += '<br>Correct Answers: 59. D. Pepsin.'
	certificate += '<br>Correct Answers: 60. B. To provide a larger surface area for nutrient absorption.'
	certificate += '<br>Correct Answers: 61. D. Water is absorbed from it to form solid feces.'
	certificate += '<br>Correct Answers: 62. B. Ribcage contracts, diaphragm relaxes.'
	certificate += '<br>Correct Answers: 63. B. Thick mucus layer.'
	certificate += '<br>Correct Answers: 64. C. It closes off the trachea to prevent food from entering the lungs.'
	certificate += '<br>Correct Answers: 65. B. Increases breathing rate due to lower oxygen levels.'
	certificate += '<br>Correct Answers: 66. B. Vital capacity.'
	certificate += '<br>Correct Answers: 67. D. Increases less rapidly and returns to normal faster.'
	certificate += '<br>Correct Answers: 68. C. Tidal volume.'
	certificate += '<br>Correct Answers: 69. B. Glucose is partially broken down into lactic acid and energy.'
	certificate += '<br>Correct Answers: 70. C. Both produce ATP without using oxygen.'
	certificate += '<br>Correct Answers: 71. C. Right atrium.'
	certificate += '<br>Correct Answers: 72. C. Capillaries.'
	certificate += '<br>Correct Answers: 73. B. To prevent the backflow of blood.'
	certificate += '<br>Correct Answers: 74. C. To pump oxygenated blood to the body.'
	certificate += '<br>Correct Answers: 75. B. The opening and closing of the heart valves.'
	certificate += '<br>Correct Answers: 76. B. Systolic pressure.'
	certificate += '<br>Correct Answers: 77. B. Tricuspid valve.'
	certificate += '<br>Correct Answers: 78. A. Left arm → Veins → Vena cava → Right atrium → Right ventricle → Pulmonary artery → Lungs → Left atrium → Left ventricle → Aorta → Arteries → Body.'
	certificate += '<br>Correct Answers: 79. A. Agglutination.'
	certificate += '<br>Correct Answers: 80. B. Leucocytes.'
	certificate += '<br>Correct Answers: 81. C. Infectious diseases are caused by micro-organisms.'
	certificate += '<br>Correct Answers: 82. A. To prevent contamination of cultures.'
	certificate += '<br>Correct Answers: 83. B. Antigens.'
	certificate += '<br>Correct Answers: 84. C. By producing memory cells.'
	certificate += '<br>Correct Answers: 85. D. Dry heat.'
	certificate += '<br>Correct Answers: 86. C. Heating food to 135-150 °C for 2-6 seconds.'
	certificate += '<br>Correct Answers: 87. C. It prevents future infections by the same pathogen.'
	certificate += '<br>Correct Answers: 88. D. Natural passive immunity.'
	certificate += '<br>Correct Answers: 89. C. Vitamin B12.'
	certificate += '<br>Correct Answers: 90. B. Treatment with antibiotics is not completed as prescribed.'
	certificate += '<br>Correct Answers: 91. B. Their preference for human blood meals.'
	certificate += '<br>Correct Answers: 92. B. Improving sanitation and access to clean water.'
	certificate += '<br>Correct Answers: 93. A. Blindness in the child.'
	certificate += '<br>Correct Answers: 94. B. They are asymptomatic.'
	certificate += '<br>Correct Answers: 95. C. To simplify their study.'
	certificate += '<br>Correct Answers: 96. D. They are used to determine relationships between species.'
	certificate += '<br>Correct Answers: 97. C. To simplify the identification of unknown organisms.'
	certificate += '<br>Correct Answers: 98. B. Protista have eukaryotic cells, while Monera have prokaryotic cells.'
	certificate += '<br>Correct Answers: 99. C. They have eukaryotic cells.'
	certificate += '<br>Correct Answers: 100. A. Nematoda.';
	certificate += '<br>==================================================================================';


	// export certificate
	document.getElementById('question_header').innerHTML = certificate;

}

function studentInfo(){
	var stuInfoStr = document.getElementById('student_info').textContent;
	var stuInfoArr = stuInfoStr.split(' '); // 17 elements
	var studentInfo = [];
	var j = 0;

	for(var i = 0; i < stuInfoArr.length; i++){
		if(stuInfoArr[i].includes(':') || stuInfoArr[i] == ''){
			// do nothing
		} else {
			studentInfo[j] = stuInfoArr[i];
			j++; // increases as we find correct info
		}
	}


	return studentInfo;
}