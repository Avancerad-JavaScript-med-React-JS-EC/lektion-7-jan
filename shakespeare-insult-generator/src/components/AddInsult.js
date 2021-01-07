import React from 'react';

/**
 * 1. När jag skriver in i ett inputfält spara undan i variabel
 * 2. När jag klickar på knappen uppdatera state med ny förolämpning
 */

function AddInsult(props) {
    let insultToAdd = '';
    let playToAdd = '';

    //När jag trycker ner en tangent körs denna funktion och vi får med det event som triggas (samma som vid addEventListener)
    const saveInsult = (event) => {

        //När jag klickar på Enter spara innehållet i en variabel
        //if (event.key === 'Enter') {
            insultToAdd = event.target.value;
            console.log('Insult sparad: ', insultToAdd);
        //}
    }

    const savePlay = (event) => {

        //När jag klickar på Enter spara innehållet i en variabel
        //if (event.key === 'Enter') {
            playToAdd = event.target.value;
            console.log('Insult sparad: ', playToAdd);
        //}
    }

    const handleClick = () => {
        props.updateState({ insult: insultToAdd, play: playToAdd })
    }

    return (
        <section>
            <input type="text" placeholder="Skriv in en förolämpning" onKeyUp={ saveInsult } />
            <input type="text" placeholder="Skriv in en pjäs" onKeyUp={ savePlay} />
            <button onClick={ handleClick }>Lägg till förolämpning</button>
        </section>
    )
}

export default AddInsult;