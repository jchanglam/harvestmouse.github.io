/**
 * Summary. Verifies user input for calcWithDiam is not blank and is greater than zero.
 *
 * Description. Returns false and alerts user if input is blank or greater than zero.
 *
 * @param {Number}   tdiam           Tail diameter. Value gathered from user input.
 * @param {Number}   tlength         Tail length. Value gathered from user input.
 * @param {Number}   blength         Body length. Value gathered from user input.
 * 
 * @return {Boolean} Returns false and alerts user if input is blank or greater than zero. Else, returns true.
 */
function verifyWithDiam(tdiam, tlength, blength){
    if (tdiam <= 0 || tdiam == ""){
        alert("Please enter a value greater than 0 for tail diameter.")
        return false;
    }
    if (tlength <= 0 || tlength == ""){
        alert("Please enter a value greater than 0 for tail length.")
        return false;
    }
    if (blength <= 0 || blength == ""){
        alert("Please enter a value greater than 0 for body length.")
        return false;
    }
    else {
        return true;
    }
}

/**
 * Summary. Determines whether species is SMHM or WHM based on tail diameter, tail length, and body length.
 *
 * Description. Calculates classification value for SMHM and WHM. 
 *              Species is determined by which classification value is higher.
 *              Outputs species name. If classification values are the same, outputs "Inconclusive".
 *
 * @param {Number}   log_tdiam           Log10 transformation of tail diameter.
 * @param {Number}   log_tlength         Log10 transformation of tail length.
 * @param {Number}   log_blength         Log10 transformation of body length.
 * 
 * @return {type} None.
 */
function speciesWithDiam(log_tdiam, log_tlength, log_blength){
    var SMHM = (1658.63*log_tlength) + (1251.43*log_blength) - (1356.23*log_tdiam) - 2483.19;
    var WHM = (1594.17*log_tlength) + (1290.70*log_blength) - (1381.15*log_tdiam) - 2426.26;
    var species = "";
    if (SMHM > WHM) {
        species = "<span style='color:green; font-weight:bold;'>Salt Marsh Harvest Mouse, <i>Reithrodontomys raviventris halicoetes</i></span>";
    }
    else if (SMHM === WHM){
        document.getElementById("species").innerHTML = "Inconclusive";
        return;
    }
    else {
        species = "<span style='color:blue; font-weight:bold;'>Western Harvest Mouse, <i>Reithrodontomys megalotis</i></span>";
    }
    document.getElementById("species").innerHTML = species;
}

/**
 * Summary. Determines certainty of species identification based on tail diameter, tail length, body length, sex, and reproductive condition.
 *
 * Description. Calculates and displays probability value. 
 *              Probability value of 0.4 to 0.7 indicates low level of certainty.
 *
 * @param {Number}   log_tdiam           Log10 transformation of tail diameter.
 * @param {Number}   log_tlength         Log10 transformation of tail length.
 * @param {Number}   log_blength         Log10 transformation of body length.
 * @param {Number}   sex                 Sex, male=0, female=1. Value gathered from user input.
 * @param {Number}   repro               Reproductive status, non-reproductive=0, reproductive=1.
 *                                       Value gathered from user input.
 * 
 * @return {type} None.
 */
function probWithDiam(log_tdiam, log_tlength, log_blength, sex, repro){
    var prob = 1/(1 + (Math.exp((-1)*((-176.6804749) + (134.8900487 * log_tlength) + (-64.98908781 * log_tlength * sex) + (-36.24677334 * log_blength) + (-12.94430661 * log_blength * repro) + (-26.64893326 * log_tdiam) + (36.88839651 * log_tdiam * sex) + (72.58639553 * log_tdiam * repro) + (110.9957523 * sex) ))));
    var prob_rounded = prob.toFixed(2);
    if (prob >= 0.4 && prob <= 0.7){
        document.getElementById("prob").innerHTML = "<span style='color:red'>Estimated probability value: " + prob_rounded + ", low level of certainty</span>";
    }
    else {
        document.getElementById("prob").innerHTML = "Estimated probability value: " + prob_rounded + ", acceptable level of certainty";
    }
}


/**
 * Summary. Verifies user input for calcNoDiam is not blank and is greater than zero.
 *
 * Description. Returns false and alerts user if input is blank or greater than zero.
 *
 * @param {Number}   tlength         Tail length. Value gathered from user input.
 * @param {Number}   blength         Body length. Value gathered from user input.
 * 
 * @return {Boolean} Returns false and alerts user if input is blank or greater than zero. Else, returns true.
 */
function verifyNoDiam(tlength, blength){
    if (tlength <= 0 || tlength == ""){
        alert("Please enter a value greater than 0 for tail length.")
        return false;
    }
    if (blength <= 0 || blength == ""){
        alert("Please enter a value greater than 0 for body length.")
        return false;
    }
    else { 
        return true;
    }
}

/**
 * Summary. Determines whether species is SMHM or WHM based on tail length, and body length.
 *
 * Description. Calculates classification value for SMHM and WHM. 
 * Species is determined by which classification value is higher.
 * Outputs species name. If classification values are the same, outputs "Inconclusive".
 *
 * @param {Number}   log_tlength         Log10 transformation of tail length.
 * @param {Number}   log_blength         Log10 transformation of body length.
 * 
 * @return {type} None.
 */
function speciesNoDiam(log_tlength, log_blength){
    var SMHM = (1022.109*log_tlength) + (898.421*log_blength) - 1784.748;
    var WHM = (946.32*log_tlength) + (932.15*log_blength) - 1704.35;
    var species = "";
    if (SMHM > WHM) {
        species = "<span style='color:green; font-weight:bold;'>Salt Marsh Harvest Mouse, <i>Reithrodontomys raviventris halicoetes</i></span>";
    }
    else if (SMHM === WHM){
        document.getElementById("species").innerHTML = "Inconclusive";
        return;
    }
    else {
        species = "<span style='color:blue; font-weight:bold;'>Western Harvest Mouse, <i>Reithrodontomys megalotis</i></span>";
    }
    document.getElementById("species").innerHTML = species;
}

/**
 * Summary. Determines certainty of species identification based on tail length, body length, sex, and reproductive condition.
 *
 * Description. Calculates and displays probability value. 
 *              Probability value of 0.4 to 0.7 indicates low level of certainty.
 *
 * @param {Number}   log_tlength         Log10 transformation of tail length.
 * @param {Number}   log_blength         Log10 transformation of body length.
 * @param {Number}   sex                 Sex, male=0, female=1. Value gathered from user input.
 * @param {Number}   repro               Reproductive status, non-reproductive=0, reproductive=1.
 *                                       Value gathered from user input.
 * 
 * @return {type} None.
 */
function probNoDiam(log_tlength, log_blength, sex, repro){
    var prob = 1/(1 + (Math.exp((-1)*((-131.3871789) + (107.8989853 * log_tlength) + (-38.00935259 * log_blength) + (85.46575696 * sex) + (-86.8588366 * repro) + (-45.67206005 * log_tlength * sex) + (45.99885482 * log_tlength * repro) ))));
    var prob_rounded = prob.toFixed(2);
    if (prob >= 0.4 && prob <= 0.7){
        document.getElementById("prob").innerHTML = "<span style='color:red'>Estimated probability value: " + prob_rounded + ", low level of certainty</span>";
    }
    else {
        document.getElementById("prob").innerHTML = "Estimated probability value: " + prob_rounded + ", acceptable level of certainty";
    }
}



/**
 * Summary. Multiple Logistic Regression to distinguish SMHM and WHM based on
 *          tail diamter, tail length, body length, sex, and reproductive status.
 *
 * Description. Called from index.html "onClick".
 *              Gathers user input for tail diameter, tail length, body length, sex,
 *              and reproductive status.
 *              Verifies user input is not blank and tail diameter, tail length, and
 *              body length are greater than zero.
 *              Determines species based on classification equation.
 *              Calculates probability value to detemrine certainty of species identification.
 *               
 */
function calcWithDiam(){
    var tdiam = Number(document.getElementById("tailDiam").value);
    var tlength = Number(document.getElementById("tailLength").value);
    var blength = Number(document.getElementById("bodyLength").value);
    var sex = Number(document.getElementById("sexMF").value);
    var repro = Number(document.getElementById("reproStat").value);
    var log_tdiam = Math.log10(tdiam);
    var log_tlength = Math.log10(tlength);
    var log_blength = Math.log10(blength);
    var isValid = false;
    isValid = verifyWithDiam(tdiam, tlength, blength);
    if (isValid == false){
        return false;
    }
    document.getElementById("result").innerHTML = "<h3>Result:</h3>";
    speciesWithDiam(log_tdiam, log_tlength, log_blength);
    probWithDiam(log_tdiam, log_tlength, log_blength, sex, repro);
}

/**
 * Summary. Multiple Logistic Regression to distinguish SMHM and WHM based on
 *          tail length, body length, sex, and reproductive status.
 *
 * Description. Called from no_tail.html "onClick".
 *              Gathers user input for tail length, body length, sex,
 *              and reproductive status.
 *              Verifies user input is not blank, and tail length and
 *              body length are greater than zero.
 *              Determines species based on classification equation.
 *              Calculates probability value to detemrine certainty of species identification.
 *               
 */
function calcNoDiam(){
    var tlength = Number(document.getElementById("tailLength").value);
    var blength = Number(document.getElementById("bodyLength").value);
    var sex = Number(document.getElementById("sexMF").value);
    var repro = Number(document.getElementById("reproStat").value);
    var log_tlength = Math.log10(tlength);
    var log_blength = Math.log10(blength);
    var isValid = false;
    isValid = verifyNoDiam(tlength, blength);
    if (isValid == false){
        return false;
    }
    document.getElementById("result").innerHTML = "<h3>Result:</h3>";
    speciesNoDiam(log_tlength, log_blength);
    probNoDiam(log_tlength, log_blength, sex, repro);
}




