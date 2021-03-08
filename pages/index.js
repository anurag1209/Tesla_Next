import React, { Component } from 'react';
import axios from 'axios';
import Router from 'next/router'


import ContentArea from '../Container/ContentArea';
import Sidebar from '../Container/Sidebar';
import Header from '../components/Header';

class IndexPage extends Component {

    state = {
        selectedFilters: {
            launch_year: null,
            launch_success: null,
            land_success: null
        }
    };

    BASE_URL = "http://localhost:3000";

    static async getInitialProps({ req, res, query }) {
        let API_URL = "https://api.spacexdata.com/v3/launches?limit=10";
        if (Object.keys(query).length) {
            let queryStr="";
            for (let key in query){
                if(query[key]){
                    queryStr += "&" + key + "=" + query[key];
                }
            }
            API_URL += queryStr.toLowerCase();
        }
        let response = await axios.get(API_URL).then(response => response);
        return { missions: response.data, queryData: query };
    }

    MAPPER = {
        "Launch Year": "launch_year",
        "Successful Launch": "launch_success",
        "Successful Landing": "land_success"
    }

    handleButtonClick = (buttonInfo, buttonVal) => {
        if(this.state.selectedFilters[this.MAPPER[buttonInfo]] === buttonVal) {
            buttonVal = null;
        }
        const selectedFilterObj = { 
            ...this.state.selectedFilters,
            ...Router.query,
            [this.MAPPER[buttonInfo]]: buttonVal 
        };
        let queryParams = this.createFilter(selectedFilterObj);
        let finalRedirectUrl = this.BASE_URL + '?' + queryParams.substring(1);
        this.setState({selectedFilters: selectedFilterObj});
        Router.push(finalRedirectUrl);
    }

    createFilter = (map) => {
        let queryStr="";
        for (let key in map){
            if(map[key]){
                queryStr += "&" + key + "=" + map[key];
            }
        }
        return queryStr.toLowerCase();
    }

    render() {
        return  (
            <div className="App">
                <Header />
                <div className="ContentPage">
                    <Sidebar clicked={this.handleButtonClick} filterData={{...this.state.selectedFilters, ...this.props.queryData}}/>
                    <ContentArea missions={this.props.missions} />
                    <p><b>Developed by</b>: Anurag Sharma</p>
                </div>
                <style jsx>{`
                    .App {
                        max-width: 90%;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #ccc;
                    }
                    p {
                        text-align: center;
                        padding-top: 20px;
                    }
                `}</style>
            </div>
        );
    }
}

export default IndexPage;