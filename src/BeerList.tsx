import * as React from 'react';
import {Beer} from './Beer'
import { BeerNameChange } from './BeerNameChange';
import { BeerNamePrint } from './BeerNamePrint';

interface Props {
    beers: string[];
};

  
export const BeerList: React.FunctionComponent<Props> = (props) => {    

    const [beers, setBeers] = React.useState<string[]>(props.beers);
    const [beer_name, setBeerName] = React.useState<string>("bière");


    const remove_beer = (beers : string[]) : void => {
        beers = beers.slice(1);
        setBeers(beers);
    };

    const add_beer = (beers : string[], new_beer : string) : void => {
        beers.push(new_beer);
        beers = beers.slice(0); //pour actualiser
        setBeers(beers);
    } 
    
    const change_beer_name = (e: React.FormEvent<HTMLInputElement>) : void => {
        setBeerName( e.currentTarget.value );
    }
    
    return (
        <div>
            <ul>
                { beers.map((beer, index) =>{
                    return <Beer beer={beer} id={index}/>
                })}
            </ul>
            <button onClick={() => remove_beer(beers)}>Remove first beer</button>
            <button onClick={() => add_beer(beers, beer_name)}> Add beer</button>
            <BeerNamePrint beer_name={beer_name}/>
            {/* <p>Name of beer to add : {beer_name}</p> */}
            <BeerNameChange change_beer_name={change_beer_name}/>
            {/* <input type="text" value={beer_name} onChange={change_beer_name} /> */}
        </div>
    );
};

