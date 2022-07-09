import React, { Component } from 'react'
import Bar from '../bar/Bar'
import "./table.css"


export class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            upTitle: "",
            upDesc: "",
            upStatus: "",
            value: "",
            searchRes: {},
            count: 0,
            pages: 1,
            title: "",
            date: Date.now(),
            desc: "",
            dueDate:"2017-06-01",
            status: "",
            data: [],
        }
    }


    render() {
        let modified = (x) => {
            if (x === 1) {
                console.log("incement");
                console.log(`count${this.state.count}`);
                this.setState({
                    count: this.state.count + 1,
                })
            }
            else {
                console.log("decement");
                this.setState({
                    count: this.state.count - 1,
                })
            }
            let totalPage = Math.ceil(this.state.count / 5);
            if (totalPage > 1) {
                this.setState({
                    pages: totalPage,
                })
            }
            console.log(this.state.pages);
        }
        let submitHandler = () => {
            alert("Added item sucessfully ! Kindly Refresh Your Page ")
            this.setState(
                {
                    data: [...this.state.data, {
                        id: this.state.count + 1,
                        title: this.state.title,
                        date: Date.now(),
                        desc: this.state.desc,
                        dueDate: this.state.dueDate,
                        status: this.state.status,
                    }],
                }
            )
            modified(1);
        }
        let TitleChange = (e) => {
            this.setState({
                title: e.target.value,
            })
        }
        let DescChange = (e) => {
            this.setState({
                desc: e.target.value,
            })
        }
        let DueDateChange = (e) => {
            this.setState({
                dueDate: e.target.value,
            })
        }
        let StatusChange = (e) => {
            this.setState({
                status: e.target.value,
            })
        }
        let searchChange = (e) => {
            this.setState({
                value: e.target.value,
            })
        }
        let handleSearch = () => {
            let flag = 0;
            let idx = undefined;
            for (var i = 0; i < this.state.data.length; i++) {
                if (this.state.value == this.state.data[i].id) {
                    flag = 1;
                    idx = i;
                }
            }
            if (flag == 1) {
                console.log(`${this.state.data[idx].title}`);
                this.setState({
                    searchRes: this.state.data[idx],
                })
            } else {
                console.log("not found");
            }
        }


        let handleDelete = () => {
            console.log("delete handle");
            var id = this.state.searchRes.id;
            var flag = 0;
            var idx = undefined;
            for (var i = 0; i < this.state.data.length; i++) {
                if (id == this.state.data[i].id) {
                    flag = 1;
                    idx = i;
                }
            }
            if (flag == 1) {
                console.log(`Found idx:${idx}`);
                this.state.data.splice(idx, 1);
                console.log(this.state.data);
                alert("Element deleted sucessfully ! Please Refresh your page")
            } else {
                alert("Element Not Found")
            }
        }

        let handleUpdate = () => {
            console.log("update handle");
            var id = this.state.searchRes.id;
            var flag = 0;
            var idx = undefined;
            for (var i = 0; i < this.state.data.length; i++) {
                if (id == this.state.data[i].id) {
                    flag = 1;
                    idx = i;
                }
            }
            if (flag == 1) {
                console.log(`Found idx:${idx}`);
                let newArr = [...this.state.data];
                const obj = {
                    id: newArr[idx].id,
                    title: this.state.upTitle,
                    date: newArr[idx].date,
                    desc: this.state.upDesc,
                    dueDate: newArr[idx].dueDate,
                    status: this.state.upStatus,
                }
                newArr[idx] = obj;
                this.setState({
                    data: newArr,
                })
                alert("Element updated sucessfully ! Please Refresh your page")
            } else {
                alert("Element Not Found")
            }
        }

        let titleUpHandle = (e) => {
            this.setState({
                upTitle: e.target.value,
            })
        }
        let statusUpHandle = (e) => {
            this.setState({
                upStatus: e.target.value,
            })
        }
        let descUpHandle = (e) => {
            this.setState({
                upDesc: e.target.value,
            })
        }

        return (
            <div className="tableCon">
                <div className="inpBox">
                    <div className="item">
                        <h3>Title</h3>
                        <input onChange={TitleChange} placeholder='Title' type="text" name="title" id="" />

                    </div>
                    <div className="item">
                        <h3>Description</h3>
                        <input onChange={DescChange} placeholder='Desc' type="text" name="Desc" id="" />

                    </div>
                    <div className="item">
                        <h3>Due Date</h3>
                        <input onChange={DueDateChange} type="date" name="Date" id="" value={this.state.dueDate}/>

                    </div>
                    <div className="item">
                        <h3>Status</h3>
                        <input onChange={StatusChange} placeholder='Status' type="text" name='status' />

                    </div>
                    <div className="item">
                        <h3>Add Task</h3>
                        <button className='btn' onClick={submitHandler}>+ADD</button>
                    </div>
                </div>
                <div className='SearchinsertUpdate'>
                    <div style={{ display: "flex" }} className="giveMarginSearch">
                        <input className='giveMarginSearch' onChange={searchChange} value={this.state.value} placeholder='Enter Id' type="number" name="id" id="" />
                        <button  className='giveMarginSearch btn' onClick={handleSearch}>Search</button>
                    </div>
                    <div className="searchRes">
                        <div className='giveMarginSearch'>title:{this.state.searchRes.title}</div>
                        <div className='giveMarginSearch'>status:{this.state.searchRes.status}</div>
                        <div className='giveMarginSearch'>desc:{this.state.searchRes.desc}</div>
                        <div className='giveMarginSearch'>date:{this.state.searchRes.date}</div>
                        <div className='giveMarginSearch'>dueDate:{this.state.searchRes.dueDate}</div>
                        <div className='giveMarginSearch'><input onChange={titleUpHandle} placeholder='Update-title' value={this.state.upTitle} type="text" name="" id="" /></div>
                        <div className='giveMarginSearch'><input onChange={statusUpHandle} placeholder='Update-status' value={this.state.upStatus} type="text" name="" id="" /></div>
                        <div className='giveMarginSearch'><input onChange={descUpHandle} placeholder='Update-desc' value={this.state.upDesc} type="text" name="" id="" /></div>
                        <button  className='giveMarginSearch btn' onClick={handleUpdate}>Update</button>
                        <button  className='giveMarginSearch btn' onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                <div className="pageWalacon">
                    <Bar del={modified} prop={this.state} />
                </div>
            </div>
        )
    }
}

export default Table