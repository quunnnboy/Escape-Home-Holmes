Opdracht webscripting Quinten Beke


"Escape Home Holmes"

Concept:
Ik heb een escape room gemaakt met als thema het huis van Sherlock Holmes. Je moet ontsnappen door in het codeklavier de juiste code in te vullen. Ook is het de bedoeling dat je de juiste schakelaars activeert. Dit doe je aan de hand van aanwijzingen dat je in andere kamers vind.

Voor het switchen van kamers heb ik gewerkt met classes voor de achtergrondfoto's en met InnerHTML voor de content van de page.

Ik heb het internet gebruikt voor volgende zaken:
1. Voor de switches te maken. Ik heb hiervoor volgende website gebruikt: https://www.w3schools.com/howto/howto_css_switch.asp

2. Hier heb ik AI gebruikt voor het debuggen want de loop wou niet stoppen. Ik heb de code gestuurd en gevraagd wat er mis was, ook heb ik de errorcode erbij gestuurd. Ik was dus vergeten voor de clearinterval op te roepen wanneer de if state voldaan is.
js lijn 435-443
    let checkConditions = setInterval(() => {
        if (loopStop === 1 && controlKeypad === 1 && controlSwitches === 1) {
            roomExitOpen();
            modalKeypad.classList.remove("active");

            clearInterval(checkConditions);
            loopStop = 0;
        }
    }, 500);

3. Ik heb AI gebruikt voor de switches in te kunnen lezen.

// Hier heb ik wat gpt voor moeten gebruiken Omdat ik maar niet de checked vallue heb kunnen inlezen.
// De reden dat dit niet gelukt is was omdat ik "#switch1" deed idp van "#switch1 input".

    let switch1 = document.querySelector("#switch1 input");


Link figma file: https://www.figma.com/design/pyxk5wzARMvcHzdoOxKeVd/Eindopdracht?node-id=0-1&t=gtOT0Zxq9XS2ZtHE-1

Link figma prototype: https://www.figma.com/proto/pyxk5wzARMvcHzdoOxKeVd/Eindopdracht?page-id=0%3A1&node-id=1-3&p=f&viewport=-35%2C-227%2C0.17&t=EImaqc4VopF5b85M-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A3
