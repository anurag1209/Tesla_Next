import React, { Component } from 'react';
import Card from '../components/Card';

const ContentArea = (props) =>  {
    const missions = props.missions.length ? props.missions.map( mission => <Card mission={mission} key={mission.flight_number}/>) : <p>No Results Found</p>;

    return  (
        <div className="ContentArea">
            {missions}
            <style jsx>{`
                .ContentArea {
                    width: 74%;
                    background-color: #fff;
                    padding: 5px 10px;
                    display: inline-block;
                    margin-left: 30px;
                    min-height: 80vh;
                }
                @media (max-width: 760px) {
                    .ContentArea {
                        width: 97%;
                        padding: 0;
                        margin: 0;
                    }
                }
                @media (min-width: 760px) and (max-width: 1024px) {
                    .ContentArea {
                        width: 70%;
                        margin-left: 10px;
                    }
                }
            `}</style>
        </div>
    )
}

export default ContentArea;