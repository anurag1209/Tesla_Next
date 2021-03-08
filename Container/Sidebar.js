import React, { Component } from 'react';
import Filter from '../components/Filter';

class Sidebar extends Component {

    getYearsArray = (props) => {
        return [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
    }

    getBooleanArray = () => {
        return ["True", "False"];
    }

    getSelectedYear = () => {
        return this.props.filterData.launch_year;
    }

    getSuccessLandingFilter = () => {
        if (this.props.filterData.land_success !== null){
            return this.capitalize(this.props.filterData.land_success);
        } else {
            return this.props.filterData.land_success;
        }
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    getSuccessLaunchFilter = () => {
        if (this.props.filterData.launch_success !== null){
            return this.capitalize(this.props.filterData.launch_success);
        } else {
            return this.props.filterData.launch_success;
        }
    }

    createFilter = () => {
        return [
            { header: "Launch Year", filterCondition: this.getSelectedYear() + "", data: this.getYearsArray() },
            { header: "Successful Launch", filterCondition: this.getSuccessLaunchFilter() + "", data: this.getBooleanArray() },
            { header: "Successful Landing", filterCondition: this.getSuccessLandingFilter() + "", data: this.getBooleanArray() }
        ]; 
    }

    render () {
        const filters = this.createFilter().map( (filter, index) => {
            return (
                    <Filter 
                        key={index}
                        header={filter.header} 
                        data={filter.data} 
                        clicked={this.props.clicked}
                        filterdata={filter.filterCondition}
                    />
            );
        });

        return  (
            <div className="Sidebar">
                <p className="Sidebar-heading">Filters</p>
                { filters }
                <style jsx>{`
                    .Sidebar {
                        width: 20%;
                        background-color: #fff;
                        padding: 5px 10px;
                        display: inline-block;
                        vertical-align: top;
                    }
                    .Sidebar-heading {
                        font-weight: bold;
                    }
                    @media (max-width: 760px) {
                        .Sidebar {
                            width: 90%;
                            margin-bottom: 25px;
                            padding-bottom: 30px;
                        }
                    }
                    @media (min-width: 760px and max-width: 1024px) {
                        .Sidebar {
                            width: 30%;
                        }
                    }
                `}</style>
            </div>
        )
    }
}

export default Sidebar;