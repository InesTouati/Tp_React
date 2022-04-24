import * as React from 'react';

interface Props {
    change_beer_name (e: React.FormEvent<HTMLInputElement>) : void;
};

export const BeerNameChange: React.FunctionComponent<Props> = (props) => {    
 
    return (
        <input type="text" onChange={props.change_beer_name} />
    )
  }