/**
 * !testing
 * This is just a practice file to test the use of props and states
 */
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ItemListContainer = ({a, b}) => {
    console.log('ItemListContainer Rendered');
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    const [aValue, setA] = useState(a);

    const promesaGenerica = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a > b) {
                resolve(a + b);
            } else {
                reject(a - b);
            }
        }, 250);
    });

    
    useEffect(() => {
        console.log(`useEffect() a = ${a}`);
        console.log(`useEffect() b = ${b}`);
        
        promesaGenerica
            .then((resultado) => {
                setA(resultado);
                console.log(`El resultado es ${resultado}`);
            })
            .catch((resultado) => {
                console.log(`El resultado es ${resultado}`);
            });
    }, [a, b]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>ItemListContainer</h1>
                    <p>Este es el ItemListContainer</p>
                    <p>a = {aValue}</p>
                </div>
            </div>
        </div>
    );
}

ItemListContainer.propTypes = {
    a: propTypes.number.isRequired,
    b: propTypes.number.isRequired
}

export default ItemListContainer;