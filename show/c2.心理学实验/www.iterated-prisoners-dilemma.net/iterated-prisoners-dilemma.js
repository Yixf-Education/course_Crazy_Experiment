var StillLoading = true;
browserName = navigator.appName; 
browserVer = parseInt(navigator.appVersion);
if ((browserName == "Netscape" && browserVer >= 3) || ( browserName == "Microsoft Internet Explorer" && browserVer >= 4)){
	Compatible = true;
}	
else {
	Compatible = false;
}

var buffer = "____________________________________________________________________"; 
var text1 = "____Welcome to the Prisoner\'s Dilemma site";
var text2 = "What is your choice? Co-operate or Defect";  
var text3 =  "Run strategy simulations against Lucifer"; 
var text4 = "Create your own customised strategies to run in the simulator";
var text5 =  "";  
var text6 = "Visit the links to download software or learn about the significance of Prisoners Dilemma in nature....";	
var marqueeString = marqueeString = buffer + text1 + buffer + text2 + buffer +text3 + buffer + text4 + buffer + text5 + buffer + text6;
var marqueeRunning=false;
var timeoutID2 = null;
var timeoutID3 = null;
var tittatRunning = false;
var position = 0;
var sLength=marqueeString.length;
var author = "<a href='http://members.ozemail.com.au/~wpdavis/home/'>Wayne Davis</a>";
var email = "wpdavis@ozemail.com.au";
var amended = "Thursday, March 22nd, 2007";
var noComputerStrategies = 20;
var noPlayerStrategies = 20;
var arrayLength = 23;
var notseen = true;
var msga = 0;
var msgb = 0;
	
function setText_array(arrayLength){
	text_array = new makeArray(arrayLength)
	text_array[1] = "Your Outcomes";
	text_array[2] = "Lucifer\'s Outcomes";
	text_array[3] = "Mutual Outcomes";
	text_array[4] = "Tit For Tat";
	text_array[5] =  "Tit For Tat / Random";
	text_array[6] =  "Tit For Two Tats / Random";
	text_array[7] = "Tit For Two Tats";
	text_array[8] = "Naive Prober"; 
	text_array[9] =  "Remorseful Prober";
	text_array[10] =  "Naive Peace Maker";
	text_array[11] =  "True Peace Maker"; 
	text_array[12] = "Random";
	text_array[13] =  "Always Defect";
	text_array[14] =  "Always Co-operate";
	text_array[15] =  "Grudger";
	text_array[16] =  "Pavlov";
	text_array[17] =  "Pavlov / Random";
	text_array[18] =  "Adaptive";
	text_array[19] =  "Gradual";
	text_array[20] =  "Suspicious Tit For Tat";
	text_array[21] =  "Soft Grudger";
	text_array[22] =  "Customised 1";
	text_array[23] =  "Customised 2";

}

function makeArray(n){
	this.length=n;
	for (var sub=1; sub <= n; sub++)
	this[sub] = 0; 
	return this;
}


function setTally(){
	document.tally.reset(); 
	tally_counter = 0;
	tally1_counter = 0;
	tally2_counter = 0;
	tally3_counter = 0;
	tally4_counter = 0;
	tally5_counter = 0;
	tally6_counter = 0;
	tally7_counter = 0;
	tally8_counter = 0;
	tally9_counter = 0;
	tally10_counter = 0;
	tally11_counter = 0;
	tally12_counter = 0;
	tally13_counter = 0;
	tally14_counter = 0;
	tally15_counter = 0;
	tally16_counter = 0;
	tally17_counter = 0;
	tally18_counter = 0;
	tally19_counter = 0;
	tally20_counter = 0;
	player_tally = 0;
	computer_tally = 0;
	mutual_tally = 0;
	TitForTat = 0;  
	TitForTatRandom  = 0;  
	TitForTwoTatsRandom = 0;  
	TitForTwoTats = 0;  
	NaiveProber = 0;  
	RemorsefulProber = 0;  
	NaivePeaceMaker = 0;  
	TruePeaceMaker = 0;  
	Random = 0;  
	AlwaysDefect = 0;  
	AlwaysCooperate = 0;  
	Grudger = 0;  
	Pavlov = 0;  
	PavlovRandom = 0;  
	Adaptive = 0;
	Gradual = 0;
	SuspiciousTitForTat = 0;
	SoftGrudger = 0;
	Custom1 = 0;
	Custom2 = 0;
	AvgTitForTat = 0;  
	AvgTitForTatRandom  = 0;  
	AvgTitForTwoTatsRandom = 0;  
	AvgTitForTwoTats = 0;  
	AvgNaiveProber = 0;  
	AvgRemorsefulProber = 0;  
	AvgNaivePeaceMaker = 0;  
	AvgTruePeaceMaker = 0;  
	AvgRandom = 0;  
	AvgAlwaysDefect = 0;  
	AvgAlwaysCooperate = 0; 
	AvgGrudger = 0;  
	AvgPavlov = 0;  
	AvgPavlovRandom = 0;  
	AvgAdaptive = 0;
	AvgGradual = 0;    
	AvgSuspiciousTitForTat = 0; 
	AvgSoftGrudger = 0;
	AvgCustom1 = 0;
	AvgCustom2 = 0;
	Avg_array = new makeArray(arrayLength);
	setText_array(arrayLength);
		
}
function updateTally(){
	tally_counter += 1;	
	Avg_array[1] =  document.tally.player.value = Avgplayer_tally = Math.round((player_tally += player_rating) / tally_counter);
	Avg_array[2] =  document.tally.computer.value = Avgcomputer_tally = Math.round((computer_tally += computer_rating) / tally_counter);
	Avg_array[3] =  document.tally.mutual.value = Avgmutual_tally = Math.round((mutual_tally += mutual_rating) / tally_counter);
	if (strategy == 1){
		tally1_counter += 1; 
		Avg_array[4] =  AvgTitForTat = Math.round((TitForTat += computer_rating) / tally1_counter);
	};
	if (strategy == 2){
		tally2_counter += 1; 
		Avg_array[5] =  AvgTitForTatRandom = Math.round((TitForTatRandom  +=  computer_rating) / tally2_counter);
	};
	if (strategy == 3){
		tally3_counter += 1; 
		Avg_array[6] =  AvgTitForTwoTatsRandom = Math.round((TitForTwoTatsRandom += computer_rating) / tally3_counter);
	};
	if (strategy == 4){
		tally4_counter += 1; 
		Avg_array[7] =  AvgTitForTwoTats = Math.round((TitForTwoTats += computer_rating) / tally4_counter);
	};
	if (strategy == 5){
		tally5_counter += 1; 
		Avg_array[8] =  AvgNaiveProber = Math.round((NaiveProber += computer_rating) / tally5_counter);
	};
	if (strategy == 6){
		tally6_counter += 1; 
		Avg_array[9] =  AvgRemorsefulProber = Math.round((RemorsefulProber += computer_rating) / tally6_counter);
	};
	if (strategy == 7){
		tally7_counter += 1; 
		Avg_array[10] =  AvgNaivePeaceMaker = Math.round((NaivePeaceMaker += computer_rating) / tally7_counter);
	};
	if (strategy == 8){
		tally8_counter += 1; 
		Avg_array[11] =  AvgTruePeaceMaker = Math.round((TruePeaceMaker += computer_rating) / tally8_counter);
	};
	if (strategy == 9){
		tally9_counter += 1; 
		Avg_array[12] =  AvgRandom = Math.round((Random += computer_rating) / tally9_counter);
	};
	if (strategy == 10){
		tally10_counter += 1; 
		Avg_array[13] =  AvgAlwaysDefect = Math.round((AlwaysDefect += computer_rating) / tally10_counter);
	};
	if (strategy == 11){
		tally11_counter += 1; 
		Avg_array[14] =  AvgAlwaysCooperate = Math.round((AlwaysCooperate += computer_rating) / tally11_counter);
	};
	if (strategy == 12){
		tally12_counter += 1; 
		Avg_array[15] =  AvgGrudger = Math.round((Grudger += computer_rating) / tally12_counter);
	};
	if (strategy == 13){
		tally13_counter += 1; 
		Avg_array[16] =  AvgPavlov = Math.round((Pavlov += computer_rating) / tally13_counter);
	};
	if (strategy == 14){
		tally14_counter += 1; 
		Avg_array[17] =  AvgPavlovRandom = Math.round((PavlovRandom += computer_rating) / tally14_counter);
	};
	if (strategy == 15){
		tally15_counter += 1; 
		Avg_array[18] =  AvgAdaptive = Math.round((Adaptive += computer_rating) / tally15_counter);
	};
	if (strategy == 16){
		tally16_counter += 1; 
		Avg_array[19] =  AvgGradual = Math.round((Gradual += computer_rating) / tally16_counter);
	};
	if (strategy == 17){
		tally17_counter += 1; 
		Avg_array[20] =  AvgSuspiciousTitForTat = Math.round((SuspiciousTitForTat += computer_rating) / tally17_counter);
	};
	if (strategy == 18){
		tally18_counter += 1; 
		Avg_array[21] =  AvgSoftGrudger = Math.round((SoftGrudger += computer_rating) / tally18_counter);
	};
	if (strategy == 19){
		tally19_counter += 1; 
		Avg_array[22] =  AvgCustom1 = Math.round((Custom1 += computer_rating) / tally19_counter);
	};
	if (strategy == 20){
		tally20_counter += 1; 
		Avg_array[23] =  AvgCustom2 = Math.round((Custom2 += computer_rating) / tally20_counter);
	};
	document.tally.TitForTat.value = AvgTitForTat;
	document.tally.TitForTatRandom.value = AvgTitForTatRandom;  
	document.tally.TitForTwoTatsRandom.value = AvgTitForTwoTatsRandom;
	document.tally.TitForTwoTats.value = AvgTitForTwoTats;
	document.tally.NaiveProber.value = AvgNaiveProber;
	document.tally.RemorsefulProber.value = AvgRemorsefulProber;
	document.tally.NaivePeaceMaker.value = AvgNaivePeaceMaker;
	document.tally.TruePeaceMaker.value = AvgTruePeaceMaker;
	document.tally.Random.value = AvgRandom;
	document.tally.AlwaysDefect.value = AvgAlwaysDefect;
	document.tally.AlwaysCooperate.value = AvgAlwaysCooperate;
	document.tally.Grudger.value = AvgGrudger;
	document.tally.Pavlov.value = AvgPavlov;
	document.tally.PavlovRandom.value = AvgPavlovRandom;
	document.tally.Adaptive.value = AvgAdaptive;
	document.tally.Gradual.value = AvgGradual;
	document.tally.SuspiciousTitForTat.value = AvgSuspiciousTitForTat;
	document.tally.SoftGrudger.value = AvgSoftGrudger;
	document.tally.Custom1.value = AvgCustom1;
	document.tally.Custom2.value = AvgCustom2;
}

function aboutStrategies(){
	if (confirm('Help Panel\n\nThe \'All Strategies\' selection will play all strategies' 
	+ ' against the opposing strategy. \n\n'
	+ 'Strategy Rating values are always kept for averaging into the next simulation or game, until reset by you.\n\n'
	+ 'The \'Graph Ratings\' button will graph the Ratings values shown in the table. Note that there may be several seconds delay before the graph appears.\n\n'
	+ 'The \'Reset All\' button will allow you to cancel an in flight simulation and reset the ratings values. \n\n'
	+ ' \'Random Intervention\' settings only affects partially random strategies and allows you to change the randomness of the strategies. Exception being the strategy \'Random\', which is always set to 50%.\n\n'
	+ ' \'Custom Strategy\' settings allow you to create your own simulation strategies. To invoke it you must select \'Customised 1\'  or \'Customised 2\' in the strategies list boxes.  The letters T, P, R, S (Temptation, Punishment, Reward, Sucker) refer to the possible outcomes of the previous choice - see the table explaining the point score system. For each of the four possible outcomes, the settings represent the probability of choosing \'Co-operate\' on the next move. Eg 1.0 meaning always co-operate, 0 meaning always defect and .25 meaning 25% chance of co-operation. The B setting specifies how to begin play, 1 to co-operate or 0 to defect.\n\n'
	+ ' Click OK to see strategy descriptions. If the window does not open turn off your pop-up blocker.') == false) {return false};
	info=window.open("","about","toolbar=no,width=500,height=300,directories=no,status=no,scrollbars=yes,resize=yes,menubar=yes");
	info.document.open();
	info.document.write('<HTML><HEAD><title>Prisoner\'s Dilemma Game and Simulation:  Strategy Information</title></HEAD>');
	info.document.write('<body text=\"#700000\"  background=\"whtsand.jpg\">');
	info.document.write('<center><h1><FONT FACE="Vivaldi"><FONT COLOR=\"#700000\">Prisoner\'s Dilemma Strategies</FONT></FONT><hr  width = \"52%\" size=1><hr  width = \"26%\" size=1><hr  width = \"2%\" size=1></h1></center> ');

	info.document.write('<ol><li>Tit For Tat - Repeat opponent\'s last choice.'); 
	info.document.write('<li>Tit For Tat and Random - Repeat opponent\'s last choice skewed by random setting.*');
	info.document.write('<li>Tit For Two Tats and Random - Like Tit For Tat except that opponent must make the same choice twice in a row before it is reciprocated. Choice is skewed by random setting.*'); 
	info.document.write('<li>Tit For Two Tats - Like Tit For Tat except that opponent must make the same choice twice in row before it is reciprocated. ');
	info.document.write('<li>Naive Prober \(Tit For Tat with Random Defection\) -  Repeat opponent\'s last choice \(ie Tit For Tat\), but sometimes probe by defecting in lieu of co-operating.*');
	info.document.write('<li>Remorseful Prober \(Tit For Tat with Random Defection\) -  Repeat opponent\'s last choice \(ie Tit For Tat\), but sometimes probe by defecting in lieu of co-operating. If the opponent defects in response to probing, show remorse by co-operating once.*');
	info.document.write('<li>Naive Peace Maker \(Tit For Tat with Random Co-operation\) - Repeat opponent\'s last choice \(ie Tit For Tat\), but sometimes make peace by co-operating in lieu of defecting.*');
	info.document.write('<li>True Peace Maker \(hybrid of Tit For Tat and Tit For Two Tats with Random Co-operation\) - Co-operate unless opponent defects twice in a row, then defect once, but sometimes make peace by co-operating in lieu of defecting.*');
	info.document.write('<li>Random - always set at 50% probability.'); 
	info.document.write('<li>Always Defect'); 
	info.document.write('<li>Always Co-operate'); 
	info.document.write('<li>Grudger \(Co-operate, but only be a sucker once\) - Co-operate until the opponent defects. Then always defect unforgivingly.');
	info.document.write('<li>Pavlov \(repeat last choice if good outcome\) - If 5 or 3 points scored in the last round then repeat last choice.');
	info.document.write('<li>Pavlov / Random \(repeat last choice if good outcome and Random\) - If 5 or 3 points scored in the last round then repeat last choice, but sometimes make random choices.*');
	info.document.write('<li>Adaptive - Starts with c,c,c,c,c,c,d,d,d,d,d and then takes choices which have given the best average score re-calculated after every move.');
	info.document.write('<li>Gradual - Co-operates until the opponent defects, in such case defects the total number of times the opponent has defected during the game. Followed up by two co-operations.');
	info.document.write('<li>Suspicious Tit For Tat - As for Tit For Tat except begins by defecting.');
	info.document.write('<li>Soft Grudger - Co-operates until the opponent defects, in such case opponent is punished with d,d,d,d,c,c.');
	info.document.write('<li>Customised strategy 1 - default setting is T=1, P=1, R=1, S=0, B=1, always co-operate unless sucker \(ie 0 points scored\).');
	info.document.write('<li>Customised strategy 2 - default setting is T=1, P=1, R=0, S=0, B=0, always play alternating defect/co-operate.');
	info.document.write('</ol>* <i>Strategies with random intervention</i>.<FORM><center><INPUT TYPE=\"button\" VALUE=\"Close\" onClick=\"setTimeout(\'window.close()\',1)\"></center></FORM>');
	info.document.close();
	return true;
}

function graphIt(){
	if (StillLoading == true){ alert('Still loading page....'); history.go(0); return;} 
	graph=window.open("","graph","toolbar=no,directories=no,status=no,scrollbars=yes,resize=yes,menubar=yes");
	graph.document.open();
	graph.document.write('<HTML><HEAD><title>Prisoner\'s Dilemma Game and Simulation:  Average Ratings Graph</title></HEAD>');
	graph.document.write('<body text=\"#D03030\" background=\"whtsand.jpg\">');
	graph.document.write('<center><h1><FONT FACE="Vivaldi"><FONT COLOR=\"#700000\">Prisoner\'s Dilemma Ratings Graph</FONT></FONT><hr  width = \"52%\" size=1><hr  width = \"26%\" size=1><hr  width = \"2%\" size=1></h1> ');
	 
	graph.document.write(' <applet code="Chart.class" name=javaGraph width=550 height=550><param name=scale value="3"><param name=orientation value="horizontal"><param name=title value="Average Ratings (%)">');


	for (var sub=1; sub <= arrayLength; sub++){
		graph.document.write("<param name=c" + sub + "_color value='magenta'>"); 
		graph.document.write("<param name=c" + sub + "_label value='" + text_array[sub] + "'>");
		graph.document.write("<param name=c" + sub + "_style value='solid'>");
		graph.document.write("<param name=c" + sub + " value=" + Avg_array[sub]  + ">");
				
	} 
	sub--;
	graph.document.write("<param name=columns value=" + sub +"></applet>");
	graph.document.write('<FORM><INPUT TYPE=\"button\" VALUE=\"Close\" onClick=\"setTimeout(\'window.close()\',1)\"></FORM>');
	graph.document.close();
//--	if (browserName == "Netscape" && browserVer >= 4){graph.history.go(0)}
	
}

function stopMarquee() {
	if (marqueeRunning)
		clearTimeout(timeoutID2);
	marqueeRunning=false;
	}
function startMarquee(){
	stopMarquee();
	updateMarquee();
	}

function updateMarquee(){
	self.status = marqueeString.substring(position++%sLength,position+139%sLength);
	timeoutID2 = setTimeout("updateMarquee()",50);
	marqueeRunning = true;
	return true;
	}

function initialise(){ 
	document.dilemma.reset(); 
	Player_All_Strategies = null;
	sim_round = "";
	player_strategy = 0;
	target = 0;
	player_softgrudger_counter = 0;
	player_gradual_counter = 0;
	player_gradual_keep = 2;
	player_adaptive_t_tally = 0;
	player_adaptive_r_tally = 0;
	player_adaptive_p_tally = 0;
	player_adaptive_s_tally = 0;
	computer_softgrudger_counter = 0;
	computer_gradual_counter = 0;
	computer_gradual_keep = 2;	
	computer_adaptive_t_tally = 0;
	computer_adaptive_r_tally = 0;
	computer_adaptive_p_tally = 0;
	computer_adaptive_s_tally = 0;
	allStrategies = null;
	bias = 0.45;
	custom1_t_bias = 0;
	custom1_p_bias = 0;
	custom1_r_bias = 0;
	custom1_s_bias = 0;
	custom1_b_bias = 0;
	custom2_t_bias = 0;
	custom2_p_bias = 0;
	custom2_r_bias = 0;
	custom2_s_bias = 0;
	custom2_b_bias = 0;
	auto = "  What is your next choice? ";
	speed = 2000;
	targetSet = false;
	strategy  = Math.round(0.5 + Math.random()*(noComputerStrategies - 0.01));
	var timeoutId = null;
	var timeoutID3 = null;
	player_score = 0;
	computer_score = 0;
	player_action = 0;
	counter = 0;
	cooperate_counter = 0;
	defect_counter = 0; 
	defect_probed = 0; 
	comp_cooperate_counter = 0;
	comp_defect_counter = 0; 
	player_defect_probed = 0;	
	manual = false;
	player_grudger = false;
	computer_grudger = false;
	startMarquee(); 
	if (strategy == 10) {computer_action_prev = computer_action = 1}
	else  {computer_action_prev = computer_action = 0}
	
}
 
function setCustomBias(custom){
	for (var sub=0; sub <= 100; sub++){
		if (custom.options[sub].selected) {return sub};
	}
	return sub;
}
function startTitTat(){
	if (StillLoading == true){ alert('Still loading page....'); history.go(0); return;} 
	error = null;
	if (tittatRunning == true){
		msg3 = alert('Simulation already in progress');
	}
	else{
		 if (manual == true){
			msg3 = alert('Game in progress - can\'t start simulation');
		}
		else{
			auto = " Simulation now running. ";
			if (document.dilemma.rounds[0].checked){target = 50};
			if (document.dilemma.rounds[1].checked){target = 100};
			if (document.dilemma.rounds[2].checked){target = 200};
			if (document.dilemma.rounds[3].checked){target = 500};
			if (document.dilemma.rounds[4].checked){target = 1000};
			if (document.dilemma.rounds[5].checked){target = 10000};
			targetSet = true; 
			if (document.dilemma.skew[0].checked){bias = 0.49};
			if (document.dilemma.skew[1].checked){bias = 0.48};
			if (document.dilemma.skew[2].checked){bias = 0.45};
			if (document.dilemma.skew[3].checked){bias = 0.40};
			if (document.dilemma.skew[4].checked){bias = 0.30};
			if (document.dilemma.skew[5].checked){bias = 0.20};
			if (document.dilemma.skew[6].checked){bias = 0.10};
			
			custom1_t_bias = setCustomBias(document.dilemma.custom1_t);
			custom1_p_bias = setCustomBias(document.dilemma.custom1_p);
			custom1_r_bias = setCustomBias(document.dilemma.custom1_r);
			custom1_s_bias = setCustomBias(document.dilemma.custom1_s);
			custom1_b_bias = 1 - setCustomBias(document.dilemma.custom1_b);
			custom2_t_bias = setCustomBias(document.dilemma.custom2_t);
			custom2_p_bias = setCustomBias(document.dilemma.custom2_p);
			custom2_r_bias = setCustomBias(document.dilemma.custom2_r);
			custom2_s_bias = setCustomBias(document.dilemma.custom2_s);
			custom2_b_bias = 1 - setCustomBias(document.dilemma.custom2_b);

			if (document.dilemma.Lucifer.options[2].selected){strategy = 1};
			if (document.dilemma.Lucifer.options[3].selected){strategy = 2}; 
			if (document.dilemma.Lucifer.options[4].selected){strategy = 3}; 
			if (document.dilemma.Lucifer.options[5].selected){strategy = 4}; 
			if (document.dilemma.Lucifer.options[6].selected){strategy = 5}; 
			if (document.dilemma.Lucifer.options[7].selected){strategy = 6}; 
			if (document.dilemma.Lucifer.options[8].selected){strategy = 7}; 
			if (document.dilemma.Lucifer.options[9].selected){strategy = 8}; 
			if (document.dilemma.Lucifer.options[10].selected){strategy = 9}; 
			if (document.dilemma.Lucifer.options[11].selected){
				strategy = 10
				computer_action_prev = computer_action = 1
			};
			if (document.dilemma.Lucifer.options[12].selected){strategy = 11}; 
			if (document.dilemma.Lucifer.options[13].selected){strategy = 12}; 
			if (document.dilemma.Lucifer.options[14].selected){strategy = 13}; 
			if (document.dilemma.Lucifer.options[15].selected){strategy = 14}; 
			if (document.dilemma.Lucifer.options[16].selected){strategy = 15}; 
			if (document.dilemma.Lucifer.options[17].selected){strategy = 16};
			if (document.dilemma.Lucifer.options[18].selected){
				strategy = 17
				computer_action_prev = computer_action = 1
			};  
			if (document.dilemma.Lucifer.options[19].selected){strategy = 18};
			if (document.dilemma.Lucifer.options[20].selected){
				strategy = 19;
				computer_action_prev = computer_action = custom1_b_bias;
			};
			if (document.dilemma.Lucifer.options[21].selected){
				strategy = 20;
				computer_action_prev = computer_action = custom2_b_bias;
			};
			if (document.dilemma.strategy.options[0].selected){player_strategy = 1};
			if (document.dilemma.strategy.options[1].selected){player_strategy = 1};
			if (document.dilemma.strategy.options[2].selected){player_strategy = 2};
			if (document.dilemma.strategy.options[3].selected){player_strategy = 3};
			if (document.dilemma.strategy.options[4].selected){player_strategy = 4};
			if (document.dilemma.strategy.options[5].selected){player_strategy = 5};
			if (document.dilemma.strategy.options[6].selected){player_strategy = 6};
			if (document.dilemma.strategy.options[7].selected){player_strategy = 7};
			if (document.dilemma.strategy.options[8].selected){player_strategy = 8};
			if (document.dilemma.strategy.options[9].selected){player_strategy = 9};
			if (document.dilemma.strategy.options[10].selected){
				player_strategy = 10;
				player_action = 1;
			};
			if (document.dilemma.strategy.options[11].selected){player_strategy = 11};
			if (document.dilemma.strategy.options[12].selected){player_strategy = 12};
			if (document.dilemma.strategy.options[13].selected){player_strategy = 13};
			if (document.dilemma.strategy.options[14].selected){player_strategy = 14};
			if (document.dilemma.strategy.options[15].selected){player_strategy = 15};
			if (document.dilemma.strategy.options[16].selected){player_strategy = 16};
			if (document.dilemma.strategy.options[17].selected){
				player_strategy = 17;
				player_action = 1;
			};
			if (document.dilemma.strategy.options[18].selected){player_strategy = 18};
			if (document.dilemma.strategy.options[19].selected){
				player_strategy = 19
				player_action = custom1_b_bias;
			};
			if (document.dilemma.strategy.options[20].selected){
				player_strategy = 20
				player_action = custom2_b_bias;
			};

			if (document.dilemma.strategy.options[21].selected){
					Player_All_Strategies = true;
					player_strategy = 0;
			}
			if (document.dilemma.Lucifer.options[22].selected){
				strategy = 0;
				if (Player_All_Strategies){player_strategy++};
				allStrategies = true;
				roundRobin();
			}
			else {	
				if (Player_All_Strategies){roundRobin()}
				else {updateTitTat()}
			}
		}
	}
}

function roundRobin(){
	error = null;
	var timeoutId = null;
	var timeoutID3 = null;
	player_softgrudger_counter = 0;
	player_gradual_counter = 0;
	player_gradual_keep = 2;
	player_adaptive_t_tally = 0;
	player_adaptive_r_tally = 0;
	player_adaptive_p_tally = 0;
	player_adaptive_s_tally = 0;
	computer_softgrudger_counter = 0;
	computer_gradual_counter = 0;
	computer_gradual_keep = 2;	
	computer_adaptive_t_tally = 0;
	computer_adaptive_r_tally = 0;
	computer_adaptive_p_tally = 0;
	computer_adaptive_s_tally = 0;
	player_score = 0;
	computer_score = 0;
	counter = 0;
	cooperate_counter = 0;
	defect_counter = 0; 
	defect_probed = 0; 
	comp_cooperate_counter = 0;
	comp_defect_counter = 0; 
	player_defect_probed = 0; 
	player_grudger = false;
	computer_grudger = false;
	if (strategy == 10) {computer_action_prev = computer_action = 1}
	else  {computer_action_prev = computer_action = 0}
	if (player_strategy == 10) {player_action = 1}
	else  {player_action = 0}
			
	if (allStrategies){
		strategy++;
		if (strategy > noComputerStrategies  && Player_All_Strategies != true){
			initialise()
			msg=alert("\n         Simulation Complete.\n\nAll Lucifer\'s strategies were played." + randomn_text +"\n\nGame initialised - play again.");
			return true;
		}
	 	if (strategy <= noComputerStrategies  && ((Player_All_Strategies && player_strategy <= noPlayerStrategies) || (Player_All_Strategies != true))){
			goUpdateTitTat();
			return true;
		} 
		
		if (strategy > noComputerStrategies  && (Player_All_Strategies && player_strategy >= noPlayerStrategies)) {
			initialise()
			msg=alert("\n         Simulation Complete.\n\nAll Lucifer\'s strategies were played against all your strategies." + randomn_text +"\n\nGame initialised - play again.");
			return true;
		}
		if (strategy > noComputerStrategies  && (Player_All_Strategies && player_strategy < noPlayerStrategies)) {
			strategy = 1;
			player_strategy++;
			goUpdateTitTat();
			return true;
		}
		alert('Error: A1 - please report to wayne@fastlink.com.au');
		top.history.go(0);
	}
	else {
		if (player_strategy < noPlayerStrategies) {
			player_strategy++;
			goUpdateTitTat();
			return true;
		}
		else{
			initialise()
			msg=alert("\n         Simulation Complete.\n\nAll your strategies were played." + randomn_text +"\n\nGame initialised - play again.");
			return true;
		}
		
	}
}
function goUpdateTitTat(){
	if (strategy == 10 || strategy == 17) {computer_action_prev = computer_action = 1}
	else  {computer_action_prev = computer_action = 0}
	if (player_strategy == 10 || player_strategy == 17) {player_action = 1}
	else  {player_action = 0}
	updateTitTat();
}
function updateTitTat(){
	if (error == true) {alert('Error: ' + speed + ' - please report to wayne@fastlink.com.au');top.history.go(0);};
	if (document.dilemma.speed[0].checked){speed = 50};
	if (document.dilemma.speed[1].checked){speed = 200};
	if (document.dilemma.speed[2].checked){speed = 500};
	if (document.dilemma.speed[3].checked){speed = 1000};
	if (document.dilemma.speed[4].checked){speed = 2000};
	if (document.dilemma.speed[5].checked){speed = 5000};
	if (document.dilemma.speed[6].checked){speed = 10000};
	if (document.dilemma.speed[7].checked){speed = 30000};
	error = true;
	timeoutID3 = setTimeout("updateTitTat()",speed);
	tittatRunning = true;
	computer_action_prev  = computer_action;

	if (Player_All_Strategies != true){
		if (allStrategies){
			sim_round = strategy + ".";
		}
	}
	else {
		if (allStrategies){
			sim_round = player_strategy + "." + strategy + ".";
		}
		else{
			sim_round = player_strategy + ".";
		}
		if (player_strategy > noPlayerStrategies){alert('Error: A3 - Please report to wayne@fastlink.com.au');top.history.go(0);};
	}
	auto = text_array[player_strategy + 3] + " v'\s " + text_array[strategy + 3];

	if (player_action == 1){defect()}
	else{cooperate()};
	
		if (player_strategy == 1){
			player_action = computer_action_prev;
		}
		if (player_strategy == 2){
			if (computer_action_prev == 1){player_action = Math.round(Math.random() + bias)}
			else {player_action = Math.round(Math.random() - bias)}
		}
		if (player_strategy == 3 || player_strategy == 4){
			if (computer_action_prev == 0){
				comp_defect_counter = 0;
				comp_cooperate_counter++
				if  (comp_cooperate_counter > 1){
					player_action = 0;
					comp_cooperate_counter = 0;
					if (player_strategy == 3) {player_action = Math.round(Math.random() - bias)};
				}
			}
			else{
				comp_defect_counter++;
				comp_cooperate_counter = 0;
				if  (comp_defect_counter > 1){
					player_action = 1;
					comp_defect_counter = 0;
					if (player_strategy == 3) {player_action = Math.round(Math.random() + bias)};
				}
			}	
		}
		if (player_strategy == 5){
			if (computer_action_prev == 1){player_action = 1}
			else {player_action = Math.round(Math.random() - bias)}
		}
		if (player_strategy == 6){
			player_action = computer_action_prev;
			if (computer_action_prev == 1){
				if (player_defect_probed > 0){
					player_action = 0;
					player_defect_probed = 0;
				}
				else {player_action = 1;}
			}
			else{		
				if (player_defect_probed == 1 ) {player_defect_probed = 2}
				else {
					if (player_defect_probed > 1 ) {player_defect_probed = 0}
					else {
						player_action = Math.round(Math.random() - bias);
						if (player_action == 1){
							player_defect_probed = 1;
						}
						else{player_defect_probed = 0};
					}
				}
			}
		}
		if (player_strategy == 7){
			if (computer_action_prev == 1){player_action = Math.round(Math.random() + bias)}
			else {player_action = 0}
		}
		if (player_strategy == 8){
			if (computer_action_prev == 1){
				comp_defect_counter++;
				if  (comp_defect_counter > 1){
					comp_defect_counter = 0;
					player_action = Math.round(Math.random() + bias);
				}
			}
			else {
				player_action = 0;
				comp_defect_counter = 0;
			}
		}

		if (player_strategy == 9){
			player_action = Math.round(Math.random())
		}
		if (player_strategy == 10){
			player_action = 1;
		}
		if (player_strategy == 11){
			player_action = 0;
		}
		if (player_strategy == 12){
			if (computer_action_prev == 1 || player_grudger == true){
				player_action = 1;
				player_grudger = true;
			}
			else {player_action = 0}
		}
		if (player_strategy == 13){
//-- R, S, T, P 0.999, 0.001, 0.001, 0.995 / 0.999, 0.001, 0.007, 0.946
			if (player_action == 1){
				if (computer_action_prev == 0) {player_action = 1}
				else { player_action = 0}
			}
			else{
				if (computer_action_prev == 0) {player_action = 0}
				else { player_action = 1}
			}
		}
		if (player_strategy == 14){
			if (player_action == 1){
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() + bias);}
				else {player_action = Math.round(Math.random() - bias);}
			}
			else{
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() - bias);}
				else {player_action = Math.round(Math.random() + bias);}
			};
		}
		if (player_strategy == 15){
			if (computer_action_prev == 1) {
				if (player_action == 1){
					player_adaptive_p_tally += 1; 
				}
				else{
					player_adaptive_s_tally +=1; 
				}
			}
			else {
				if (player_action == 1){ 
					player_adaptive_t_tally +=1; 
				}
				else {	
					player_adaptive_r_tally +=1; 
				}
			};
			if ((player_adaptive_s_tally + player_adaptive_r_tally) < 6){
				player_action = 0;
				error = false;
				return true;
			}
			if (player_adaptive_p_tally < 5) {
				player_action = 1;
				error = false;
				return true;
			}
			if ((player_adaptive_t_tally * 5 + player_adaptive_p_tally) / (player_adaptive_t_tally + player_adaptive_p_tally) > (player_adaptive_r_tally * 3) / (player_adaptive_r_tally + player_adaptive_s_tally)) {
				player_action = 1;
			}
			else { 
				player_action = 0;
			}
		}
		if (player_strategy == 16){
			if (player_gradual_counter > 0){
				player_gradual_counter--;
			}
			else { 
				if (computer_action_prev == 1) {
					player_gradual_counter = player_gradual_keep;
					player_gradual_keep++;
				}	
			}	
			if (player_gradual_counter > 1) {
				player_action = 1;
			}
			else {
				player_action = 0;
			}
		}
		if (player_strategy == 17){
			player_action = computer_action_prev;
		}
		if (player_strategy == 18){
			if (player_softgrudger_counter > 0){
				player_softgrudger_counter--;
			}
			else { 
				if (computer_action_prev == 1) {
					player_softgrudger_counter = 6;
					player_softgrudger_counter--;
				}	
			}
			if (player_softgrudger_counter > 1) {
				player_action = 1;
			}
			else {
				player_action = 0;
			}
		}
		if (player_strategy == 19){
			if (player_action == 1){
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() + (100 - custom1_t_bias)/100 - 0.5)}
				else {player_action = Math.round(Math.random() + (100 - custom1_p_bias)/100 - 0.5)}
			}
			else{
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() + (100 - custom1_r_bias)/100 - 0.5)}
				else {player_action = Math.round(Math.random() + (100 - custom1_s_bias)/100 - 0.5)}
			};
			if (player_action > 1){player_action = 1};
			if (player_action < 0){player_action = 0};
		}
		if (player_strategy == 20){
			if (player_action == 1){
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() + (100 - custom2_t_bias)/100 - 0.5)}
				else {player_action = Math.round(Math.random() + (100 - custom2_p_bias)/100 - 0.5)}
			}
			else{
				if (computer_action_prev == 0) {player_action = Math.round(Math.random() + (100 - custom2_r_bias)/100 - 0.5)}
				else {player_action = Math.round(Math.random() + (100 - custom2_s_bias)/100 - 0.5)}
			};
			if (player_action > 1){player_action = 1};
			if (player_action < 0){player_action = 0};
		}
		

	if (player_strategy > noPlayerStrategies){alert('Error: A2 - Please report to wayne@fastlink.com.au');top.history.go(0);};
	error = false;
	return true;
}
function stopTitTat(){
	if (tittatRunning == true){
		clearTimeout(timeoutID3); 
	}
	tittatRunning=false;
}
function checkSkew(){
	if (tittatRunning == true){
		msg4 = alert('Simulation in progress - can\'t change random skew setting.');
	}
	
}
function checkTitTat(){
	if (tittatRunning == true){
		msg4 = alert('Simulation in progress - can\'t change Lucifer\'s strategy');
	}
	else{
		if (notseen){
			notseen = false;
		}
	}
}
function checkRounds(){
	if (targetSet && manual != true){
		msg5=alert('Number of rounds already set to ' + target + ' - can\'t change during simulation.');
	}
}   
function checkCustom(setting, at){
	if (tittatRunning == true){
		msg4 = alert('Simulation in progress - can\'t change ' + setting +'. \nCurrent setting is ' + at);
	}
}
function checkYours(){
	if (Player_All_Strategies == true || tittatRunning == true){
		msg4 = alert('Simulation in progress - can\'t change your strategy');
	}
	else{
		if (notseen){
			notseen = false;
		}
	}
}
 
function goCooperate(){
if (StillLoading == true){ alert('Still loading page....'); history.go(0); return;} 
if (tittatRunning == true){
		msg2 = alert('Simulation in progress');
	}
else{
	manual = true;
	cooperate();
	}
}	
function cooperate() {
	
	stopMarquee(); 
	cooperate_counter ++; 
	defect_counter = 0; 
	
	if (computer_action == 0) {
		computer_score += 3;
		player_score +=3;
		if (Compatible){
			document.leftside.src= 'peace2a.gif';
			document.rightside.src= 'peace1a.gif';
		}
		if (cooperate_counter > 1){
			document.dilemma.outcome.value = "Lucifer also co-operated and gets 3 points.\nYou get 3 more points - a fairly good reward for mutual co-operation.";




		}
		else{		
			document.dilemma.outcome.value = "Lucifer also co-operated and gets 3 points.\nYou get 3 points - a fairly good reward for mutual co-operation.";




		}
		
	}
	else{
		computer_score += 5;
		if (Compatible){
			document.leftside.src= 'peace2a.gif';
			document.rightside.src= 'eagle1a.gif';
		}
		document.dilemma.outcome.value = "Lucifer chose to defect and gets 5 points.\nYou get no points - a very bad sucker\'s payoff. ";




	};
	if (strategy == 2 || strategy == 1 || strategy == 5  || strategy == 6 || strategy == 7 || strategy == 8 || strategy == 17){
		computer_action = 0;
		if  (cooperate_counter > 1){cooperate_counter = 0}
		if (strategy == 2) {computer_action = Math.round(Math.random() - bias)}; 
		if (strategy == 5) {computer_action = Math.round(Math.random() - bias)};
		if (strategy == 6) { 
			computer_action = 0;
			if (defect_probed == 1 ) {defect_probed = 2}
			else {
				if (defect_probed > 1 ) {defect_probed = 0}
				else {
					computer_action = Math.round(Math.random() - bias);
					if (computer_action == 1){
						defect_probed = 1;
					}
					else{defect_probed = 0};
				}
			}
		} 
	}
	if (strategy == 3 || strategy == 4){
		if  (cooperate_counter > 1){
			computer_action = 0;
			cooperate_counter = 0;
			if (strategy == 3) {computer_action = Math.round(Math.random() - bias)};
		}
		
	}                                   
	
	if (strategy == 9) {
		computer_action = Math.round(Math.random()) 
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
	};
	if (strategy == 10) {
                computer_action = 1 
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
	}
	if (strategy == 11) {
                computer_action = 0 
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
	}
	if (strategy == 12) {
		if (computer_grudger) {computer_action = 1}
		else {computer_action = 0};
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
	}
	if (strategy == 13) {
//-- R, S, T, P 0.999, 0.001, 0.001, 0.995 / 0.999, 0.001, 0.007, 0.946
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 0) {computer_action = 0}
		else { computer_action = 1}
	}
	if (strategy == 14) {
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 0) {computer_action = Math.round(Math.random() - bias)}
		else {computer_action = Math.round(Math.random() + bias)}
	}
	if (strategy == 15) {
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 0) { 
			computer_adaptive_r_tally +=1; 
		 }
		else {
			computer_adaptive_t_tally +=1; 
		};
		if ((computer_adaptive_s_tally + computer_adaptive_r_tally) < 6){
			computer_action = 0;
		}
		else {
		 	if (computer_adaptive_p_tally < 5) {
				computer_action = 1;
			}
			else {
				if ((computer_adaptive_t_tally * 5 + computer_adaptive_p_tally) / (computer_adaptive_t_tally + computer_adaptive_p_tally) > (computer_adaptive_r_tally * 3) / (computer_adaptive_r_tally + computer_adaptive_s_tally)) {
					computer_action = 1;
				}
				else { 
					computer_action = 0;
				}
			}
		}
	}
	if (strategy == 16) {
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_gradual_counter > 0){
				computer_gradual_counter--;
		}
		if (computer_gradual_counter > 1) {
			computer_action = 1;
		}
		else {
			computer_action = 0;
		}
	}
	if (strategy == 18){
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_softgrudger_counter > 0){
			computer_softgrudger_counter--;
		}
		if (computer_softgrudger_counter > 1) {
			computer_action = 1;
		}
		else {
			computer_action = 0;
		}
	}
	if (strategy == 19){
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 1){
			computer_action = Math.round(Math.random() + (100 - custom1_t_bias)/100 - 0.5)
		}
		else{
			computer_action = Math.round(Math.random() + (100 - custom1_r_bias)/100 - 0.5)
		};
		if (computer_action > 1){computer_action = 1};
		if (computer_action < 0){computer_action = 0};
	}
	if (strategy == 20){
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 1){
			computer_action = Math.round(Math.random() + (100 - custom2_t_bias)/100 - 0.5)
		}
		else{
			computer_action = Math.round(Math.random() + (100 - custom2_r_bias)/100 - 0.5)
		};
		if (computer_action > 1){computer_action = 1};
		if (computer_action < 0){computer_action = 0};
	}


	document.dilemma.player.value = player_score; 
	document.dilemma.computer.value = computer_score; 
	counter +=1; 
	self.status = "Round: " + sim_round + counter + ". You co-operated. " +" " + auto;

	
	if (targetSet) { 
		if (counter >= target){  
			stopTitTat();
	                     	end(); 
			if (allStrategies != true && Player_All_Strategies != true){
				 initialise();
			}	 
		} 
	} 
	else { 
		target = Math.round(Math.random() * 99); 
		targetSet = true; 
	} 
	return true;
} 

function goDefect(){
if (StillLoading == true){ alert('Still loading page....'); history.go(0); return;} 
if (tittatRunning == true){
		msg2 = alert('Simulation in progress');
	}
	else{
	manual = true;
	defect();
	}
}
 
function defect(){ 
	stopMarquee(); 
	defect_counter ++; 
	cooperate_counter = 0; 
	 
	if (computer_action == 0) { 
		player_score +=5;
		if (Compatible){
			document.leftside.src= 'eagle2a.gif';
			document.rightside.src= 'peace1a.gif';
		}
		document.dilemma.outcome.value = "Lucifer co-operated and became the sucker. No points to Lucifer. \nYou get 5 points - a very good \'temptation to defect\' payoff.";




	}
	else {
		computer_score += 1;
		player_score += 1;
		if (Compatible){
			document.leftside.src= 'eagle2a.gif';
			document.rightside.src= 'eagle1a.gif';
		}
		if (defect_counter > 1){
			document.dilemma.outcome.value = "Lucifer also defected and gets 1 point.\nYou get only 1 point - a fairly bad punishment for mutual defection.";




		}
		else {
			document.dilemma.outcome.value = "Lucifer also defected and gets 1 point.\nYou get 1 point - a fairly bad punishment for mutual defection.";




		}
	};
	if (strategy == 2 || strategy == 1 || strategy == 7 || strategy == 6 || strategy == 5 || strategy == 17){
		if (strategy == 6 && defect_probed > 0){computer_action = 0}
		else {computer_action = 1};
		if  (defect_counter > 1){defect_counter = 0};
		if  (defect_counter > 0){defect_probed = 0};
		if (strategy == 2) {computer_action = Math.round(Math.random() + bias)}; 
		if (strategy == 7) {computer_action = Math.round(Math.random() + bias)};
		 
	}
	if (strategy == 3 || strategy == 4 || strategy == 8){
		if  (defect_counter > 1){
			computer_action = 1;
			defect_counter = 0;
			if (strategy == 8) {computer_action = Math.round(Math.random() + bias)};
			if (strategy == 3) {computer_action = Math.round(Math.random() + bias)};
		}

	}
	if (strategy == 9) {
		computer_action = Math.round(Math.random())	
		if  (defect_counter > 1){defect_counter = 0};	
	}
	if (strategy == 10) {
                computer_action = 1 
		if  (defect_counter > 1){defect_counter = 0};	
	}
	if (strategy == 11) {
                computer_action = 0 
		if  (defect_counter > 1){defect_counter = 0};	
	}
	if (strategy == 12) {
		computer_action = 1;
		computer_grudger = true;
		if  (defect_counter > 1){defect_counter = 0};	
	}
	if (strategy == 13) {
//-- R, S, T, P 0.999, 0.001, 0.001, 0.995 / 0.999, 0.001, 0.007, 0.946
		if  (defect_counter > 1){defect_counter = 0}; 
		if (computer_action == 0) {computer_action = 1}
		else { computer_action = 0}
	}	
	if (strategy == 14) {
		if  (defect_counter > 1){defect_counter = 0} ;
		if (computer_action == 0) {computer_action = Math.round(Math.random() + bias)}
		else {computer_action = Math.round(Math.random() - bias)}
	}

	if (strategy == 15) {
		if  (defect_counter > 1){defect_counter = 0};	 
		if (computer_action == 0) { 
			computer_adaptive_s_tally += 1; 
		 }
		else {
			computer_adaptive_p_tally += 1; 
		};
		if ((computer_adaptive_s_tally + computer_adaptive_r_tally) < 6){
			computer_action = 0;
		}
		else {
		 	if (computer_adaptive_p_tally < 5) {
				computer_action = 1;
			}
			else {
				if ((computer_adaptive_t_tally * 5 + computer_adaptive_p_tally) / (computer_adaptive_t_tally + computer_adaptive_p_tally) > (computer_adaptive_r_tally * 3) / (computer_adaptive_r_tally + computer_adaptive_s_tally)) {
					computer_action = 1;
				}
				else { 
					computer_action = 0;
				}
			}
		}
 	}
					
	if (strategy == 16) {
		if  (defect_counter > 1){defect_counter = 0}; 
		if (computer_gradual_counter > 0){
				computer_gradual_counter--;
		}
		else {
			computer_gradual_counter = computer_gradual_keep;
			computer_gradual_keep++;
		}
		if (computer_gradual_counter > 1) {
			computer_action = 1;
		}
		else {
			computer_action = 0;
		}
	}
	if (strategy == 18) {
		if  (defect_counter > 1){defect_counter = 0};
		if (computer_softgrudger_counter > 0){
			computer_softgrudger_counter--;
		}
		else { 
			computer_softgrudger_counter = 6;
			computer_softgrudger_counter--;
		}
		if (computer_softgrudger_counter > 1) {
			computer_action = 1;
		}
		else {
			computer_action = 0;
		}
	}
	if (strategy == 19){
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 1){
			computer_action = Math.round(Math.random() + (100 - custom1_p_bias)/100 - 0.5)
		}
		else{
			computer_action = Math.round(Math.random() + (100 - custom1_s_bias)/100 - 0.5)
		};
		if (computer_action > 1){computer_action = 1};
		if (computer_action < 0){computer_action = 0};
	}
	if (strategy == 20){
		if  (cooperate_counter > 1){cooperate_counter = 0};	 
		if (computer_action == 1){
			computer_action = Math.round(Math.random() + (100 - custom2_p_bias)/100 - 0.5)
		}
		else{
			computer_action = Math.round(Math.random() + (100 - custom2_s_bias)/100 - 0.5)
		};
		if (computer_action > 1){computer_action = 1};
		if (computer_action < 0){computer_action = 0};
	}
	
	document.dilemma.player.value = player_score; 
	document.dilemma.computer.value = computer_score; 
	counter +=1; 
	self.status = "Round: " + sim_round  +  counter + ". You defected."+"        " + auto;
	
	if (targetSet) {
		if (counter >= target){ 
			stopTitTat();
	                	end();
	          	 	if (allStrategies != true && Player_All_Strategies != true){
				 initialise();
			}	 
		}
	}
	else {
		target = Math.round(Math.random() * 99);
		targetSet = true;
	} 
	return true;
}

function end(){ 
	
   	if (strategy == 1){text_strategy = "Tit For Tat "};
	if (strategy == 2){text_strategy = "Tit For Tat and Random ."};
	if (strategy == 3){text_strategy = "Tit For Two Tats and Random ."};
	if (strategy == 4){text_strategy = "Tit For Two Tats."};
	if (strategy == 5){text_strategy = "Naive Prober (Tit For Tat with Random Defection) ."}; 
	if (strategy == 6){text_strategy = "Remorseful Prober (Tit For Tat with Random Defection) ."};
	if (strategy == 7){text_strategy = "Naive Peace Maker (Tit For Tat with Random Co-operation) ."};
	if (strategy == 8){text_strategy = "True Peace Maker (hybrid of Tit For Tat and Tit For Two Tats with Random Co-operation)."}; 
	if (strategy == 9){text_strategy = "Random - probability rate of 50%"};
	if (strategy == 10){text_strategy = "Always Defect"};
	if (strategy == 11){text_strategy = "Always Co-operate"};
	if (strategy == 12){text_strategy = "Grudger (Co-operate, but only be a sucker once) ."};
	if (strategy == 13){text_strategy = "Pavlov (repeat last choice if good outcome) ."};
	if (strategy == 14){text_strategy = "Pavlov / Random (repeat last choice if good outcome and Random)."};
	if (strategy == 15){text_strategy = "Adaptive."};
	if (strategy == 16){text_strategy = "Gradual ."};
	if (strategy == 17){text_strategy = "Suspicious Tit For Tat ."};
	if (strategy == 18){text_strategy = "Soft Grudger ."};
	if (strategy == 19){text_strategy = "Custom 1."};
	if (strategy == 20){text_strategy = "Custom 2."};
	
	best_score = counter * 3;
	best_total = best_score * 2; 
	total_score = computer_score + player_score;
	mutual_rating = Math.round(((total_score * 100) / best_total) - 0.5);
	player_rating =  Math.round(((player_score * 100) / (counter * 5)) - 0.5);
	computer_rating =  Math.round(((computer_score * 100) / (counter * 5)) - 0.5);
	updateTally();
	if (player_score == counter * 5) {player_text = " - very good sentence reductions."}
	else {    if (player_score >= counter * 3) {player_text = " - fairly good sentence reductions."}
		else {   if (player_score >= counter) {player_text = " - fairly bad sentence reductions."}
			else {player_text = " - very bad sentence reductions."
			}
		}
	}

	if (computer_score == counter * 5) {computer_text = " - very good sentence reductions."}
	else {    if (computer_score >= counter * 3) {computer_text = " - fairly good sentence reductions."}
		else {   if (computer_score >= counter) {computer_text = " - fairly bad sentence reductions."}
			else {computer_text = " - very bad sentence reductions."
			}
		}
	}
	 
	if (player_score > best_score && player_score > computer_score) {
		msg_text ="Congratulations!\nYou achieved the better score."
	}
	else{
		if (total_score >= best_total){
			msg_text = "Congratulations!\nYou achieved the best possible Mutual Outcome Rating."
		}
		else { 
			if (mutual_rating >= 98.5) {
				msg_text = "A good Mutual Outcome Rating out of a possible 100%.\n"
			}
			else { 
				if (player_score < computer_score && best_score < computer_score) {
					msg_text = "Lucifer achieved the better score!\n"
				}
				else {
					msg_text = "The best possible Mutual Outcome Rating was not achieved.\n" 
				}
			}
		}	
	}
	randomn_text =  " ";
	if (allStrategies || Player_All_Strategies || strategy == 2 || strategy == 3 || strategy == 5 || strategy == 6 || strategy == 7 || strategy == 8 || strategy == 14) {
		var skew = Math.round((1 - (bias + 0.5))*1000)/10;
		randomn_text =  "\n\nRandom Intervention was set at " + skew + "% for partially random strategies.";
	}
	if (allStrategies || Player_All_Strategies){
		timeoutID3 = setTimeout(" roundRobin()",speed);
		 return true;
	}
msg = alert("\n                              GAME OVER                               \n\n" 
+ msg_text 
+ "\n\nYour Score:        "
+ player_score
+ player_text
+"\nLucifer\'s Score:  "
+ computer_score
+ computer_text
+ "\nYour Outcome Rating:        "
+ player_rating
+ "%.\nLucifer\'s Outcome Rating:  "
+ computer_rating
+"%.\nMutual Outcome Rating:    "
+ mutual_rating
+"%.\n\nLucifer\'s strategy was "
+ text_strategy
+ randomn_text
+"\n\nGame initialised - play again.");

	return true;	
	
}


