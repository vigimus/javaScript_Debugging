//Debugging i JavaScript

//Debugging är konsten att se kod som är fel ta isär det och sedan rätta till
//felmeddelandet så det fungerar igen
//Varför gör inte programmet det jag vill att det ska göra?
//Du kommer ägna massa tid till debugging
//const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//(a, b) => a.concat(b), []); 

//Läs det bara vi ger något en varibel --> det ser ut som att vi har en array,
//det är även en nested array (flera arrayer i varandra), vi vill göra något som heter
//flattened, vi vet att reduce a är accumilatorn och b är det vi loopar
//Vi vill även att accululatorn startar med en tom array
//Och concat sätter ihop innehållet med andra arrayer
//Eftersom vi slänge in {} och console loggade behöver vi manuellt ligga till return också

//För att bättre förstå
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
(accumulator, array) => {
	console.log('array', array);
	console.log('accumulator', accumulator);
	debugger;
 return accumulator.concat(array)
}, []); 

//Det ser ut som att accumulatorn är tom till att börja med, perfekt
//Sedan att den hittar arrayen 0, 1 som den lägger till perfekt
//Efter det 2, 3 och till sist 4, 5
//Flattend betyder att istället för tre separata arrayer så
//flattar man till så man bara får en array gemensamt istället
//Istället för console.log så kan man använda debugger också
//Debugger stoppar javascript, med stepover kan man se steg för steg vad som sker