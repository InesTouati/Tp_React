import * as React from 'react';

interface Props {
    beer_name : string;
};

export const BeerNamePrint: React.FunctionComponent<Props> = (props) => {    
 
    return (
        <p>Name of beer to add : {props.beer_name}</p>
    )
  }