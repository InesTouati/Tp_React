import * as React from 'react';

interface Props {
    beer: string;
    id : number;
}


  
export const Beer: React.FunctionComponent<Props> = (props) => {
    return <li key={props.id}>
                {props.beer}
            </li>;
};