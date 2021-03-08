import React from 'react';

const Button = props =>  {
    return  (
        <div key={props.text} className="button">
            <button 
                onClick={() => props.clicked(props.type, props.text)}
                className={props.isActive ? "active" : ""}    
            >{props.text}</button>
            <style jsx>{`
                    .button {
                        display: inline-block;
                        margin: 10px 20px;
                    }
                    button {
                        width: 100px;
                        padding: 10px;
                        font-weight: bold;
                        border-radius: 10px;
                        cursor: pointer;
                        background-color: #c9f3da;
                    }
                    .active {
                        background-color: #508e69;
                    }

                    @media (min-width: 760px) and (max-width: 1024px) {
                        .button {
                            margin: 3px;
                        }
                        button {
                            width: 60px;
                        }
                    }
            `}</style>
        </div>
    );
}

export default Button;