import React from 'react';
import Button from './Button';

const Filter = props =>  {
    const buttons = props.data.map(btn => {
        return (<Button 
            text={btn} 
            key={btn}
            type={props.header}
            clicked={props.clicked}
            isActive={props.filterdata == btn}
        />);
    });

    return  (
        <div className="Filter">
            <p>{props.header}</p>
            <div className="Launch-Filter">
                {buttons}
            </div>
            <style jsx>{`
                p {
                    text-align: center;
                    margin: 0;
                    text-decoration: underline;
                }
                @media (max-width: 760px) {
                    .Launch-Filter {
                        padding: 15px 0px;
                    }
                }
                @media (min-width: 760px) and (max-width: 1024px) {
                    .Launch-Filter {
                        margin: 15px 0px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Filter;