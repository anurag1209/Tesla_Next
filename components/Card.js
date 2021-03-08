import react from 'React';

const Card = (props) => {
    return (
        <div className="Card">
            <div className="Image">
                <img src={props.mission.links.mission_patch_small} alt="No image"/>
            </div>
            <div className="Card-Content">
                <p className="Name">{`${props.mission.mission_name} #${props.mission.flight_number}`}</p>
                <p><b>Mission Ids</b></p>
                <ul>
                    { props.mission.mission_id.length === 0 
                        ? <li>No mission ID found</li> 
                        : props.mission.mission_id.map( miss => <li key={miss}>{miss}</li>)
                    }
                </ul>
                <p><b>launch Year</b>: {props.mission.launch_year}</p>
                <p><b>Successful Launch</b>: {props.mission.launch_success + ""}</p>
                <p><b>Successful Landing</b>: {props.mission?.rocket?.first_stage?.cores[0]?.land_success + "" !== "null" ? props.mission.rocket.first_stage.cores[0].land_success + "" : "Unknown" }</p>
            </div>
            <style jsx>{`
                .Card {
                    width: 21%;
                    background-color: #fff;
                    padding: 10px;
                    display: inline-block;
                    margin: 10px;
                }
                .Image {
                    padding: 15px 10px;
                    background-color: #ccc;
                    max-height: 230px;
                }
                .Name {
                    font-weight: bold;
                    color: #0000ffb5;
                }
                .Card-Content {
                    height: 225px;
                }
                img {
                    width: 215px;
                }
                @media (max-width: 760px) {
                    .Card {
                        width: 94%;
                        padding: 0;
                    }
                }
                @media (min-width: 760px) and (max-width: 1024px) {
                    .Card {
                        width: 45%;
                        padding: 0px;
                        vertical-align: top;
                    }
                    .Image {
                        padding: 0;
                    }
                    img {
                        width: 150px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Card;