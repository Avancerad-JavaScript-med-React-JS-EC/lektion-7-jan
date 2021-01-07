import React from 'react';

function ShowInsult(props) {
    return (
        <section>
            <p>{ props.currentInsult.insult } - { props.currentInsult.play }</p>
        </section>
    )
}

export default ShowInsult;