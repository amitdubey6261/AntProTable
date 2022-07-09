import React, { Component } from 'react'
import "./bar.css"

export class Bar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortState: {
                idSort: "nan",
                titleSort: "nan",
                descSort: "nan",
                dateSort: "nan",
                dueSort: "nan",
            },

            showData: [],
        }
    }
    render() {

        let { data, pages } = this.props.prop;

        let pageArray = [];

        for (var i = 0; i < pages; i++) {
            pageArray.push(i);
        }

        let pageHandle = (x) => {
            var skip = x * 5;
            var newArr = [];
            for (var i = skip; i < skip + 5; i++) {
                if (!data[i]) {
                    continue;
                }
                newArr.push(data[i]);
            }
            this.setState({
                showData: newArr,
            })
            console.log(newArr);
        }

        let sortByid = () => {
            if (this.state.sortState.idSort === "decend") {
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return a.id - b.id });
                let newSortState = { ...this.state.sortState };
                newSortState.idSort = "acend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
            else {
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return b.id - a.id });
                let newSortState = { ...this.state.sortState };
                newSortState.idSort = "decend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
        }

        let sortByName = () => {
            if (this.state.sortState.titleSort === "decend") {
                let newArr = [...this.state.showData];
                newArr.sort(function (a, b) {
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return +1; }
                    return 0;
                });
                let newSortState = { ...this.state.sortState };
                newSortState.titleSort = "acend";
                console.log(newArr);
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
            else {
                let newArr = [...this.state.showData];
                newArr.sort(function (a, b) {
                    let x = a.title.toLowerCase();
                    let y = b.title.toLowerCase();
                    if (x > y) { return -1; }
                    if (x < y) { return +1; }
                    return 0;
                });
                let newSortState = { ...this.state.sortState };
                newSortState.titleSort = "decend";
                console.log(newArr);
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
        }

        let sortByDesc = () => {
            if (this.state.sortState.descSort === "decend") {
                console.log("idhar");
                let newArr = [...this.state.showData];
                newArr.sort(function (a, b) {
                    let x = a.desc.toLowerCase();
                    let y = b.desc.toLowerCase();
                    if (x < y) { return -1; }
                    if (x > y) { return +1; }
                    return 0;
                });
                let newSortState = { ...this.state.sortState };
                newSortState.descSort = "acend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
            else {
                console.log("udhar");
                let newArr = [...this.state.showData];
                newArr.sort(function (a, b) {
                    let x = a.desc.toLowerCase();
                    let y = b.desc.toLowerCase();
                    if (x > y) { return -1; }
                    if (x < y) { return +1; }
                    return 0;
                });
                let newSortState = { ...this.state.sortState };
                newSortState.descSort = "decend";
                console.log(newArr);
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
        }
        let sortByCreatedOn = () => {
            if (this.state.sortState.dateSort === "decend") {
                console.log("idhar");
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return a.id - b.id });
                let newSortState = { ...this.state.sortState };
                newSortState.dateSort = "acend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
            else {
                console.log("udhar");
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return b.id - a.id });
                let newSortState = { ...this.state.sortState };
                newSortState.dateSort = "decend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
        }
        let sortByDueDate = () => {
            if (this.state.sortState.dueSort === "decend") {
                console.log("idhar");
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return a.id - b.id });
                let newSortState = { ...this.state.sortState };
                newSortState.dueSort = "acend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
            else {
                console.log("udhar");
                let newArr = [...this.state.showData];
                newArr = newArr.sort(function (a, b) { return b.id - a.id });
                let newSortState = { ...this.state.sortState };
                newSortState.dueSort = "decend";
                this.setState({
                    sortState: newSortState,
                    showData: newArr,
                })
            }
        }
        return (
            <div className="barCon">
                <div className="titleCon">
                    <button className='btn'  onClick={sortByid}>ID&nbsp;<i class='fas fa-caret-square-down'></i><i class='fas fa-caret-square-up'></i></button>
                    <button className='btn'  onClick={sortByName}>Title&nbsp;<i class='fas fa-caret-square-down'></i><i class='fas fa-caret-square-up'></i></button>
                    <button className='btn'  onClick={sortByDesc}>Desc&nbsp;<i class='fas fa-caret-square-down'></i><i class='fas fa-caret-square-up'></i></button>
                    <button className='btn'  onClick={sortByCreatedOn}>Created-On&nbsp;<i class='fas fa-caret-square-down'></i><i class='fas fa-caret-square-up'></i></button>
                    <button className='btn'  onClick={sortByDueDate}>Due-Date&nbsp;<i class='fas fa-caret-square-down'></i><i class='fas fa-caret-square-up'></i></button>
                    <button className='btn' >Status&nbsp;</button>
                </div>
                <div className="cardCon">
                    {
                        this.state.showData.map((x) => (
                            <div className='bar'>
                                <div className='showBarData'>{x.id}</div>
                                <div className='showBarData'>{x.title}</div>
                                <div className='showBarData'>{x.desc}</div>
                                <div className='showBarData'>{x.date}</div>
                                <div className='showBarData'>{x.dueDate}</div>
                                <div className='showBarData'>{x.status}</div>
                            </div>
                        ))
                    }
                    <div className="Pagination">
                        {
                            pageArray.map((x) => <button onClick={() => { pageHandle(x) }}>{x}</button>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Bar