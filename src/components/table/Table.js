import React, { Component } from 'react'
import Bar from '../bar/Bar'
import "./table.css"


export class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 2,
            pages: 1,
            title: "",
            date: Date.now(),
            desc: "",
            dueDate: undefined,
            status: "",
            data: [
                {
                    id: 1,
                    title: "Khana",
                    date: Date.now(),
                    desc: "Kahna Khalo",
                    dueDate: Date.now(),
                    status: "Done",
                },
                {
                    id: 2,
                    title: "Amitji",
                    date: Date.now(),
                    desc: "Kahna Khalo",
                    dueDate: Date.now(),
                    status: "Done",
                },
            ],
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
            this.setState(
                {
                    data: [...this.state.data, {
                        id: this.state.count + 1,
                        title: this.state.title,
                        date: Date.now(),
                        desc: this.state.desc,
                        dueDate: Date.now(),
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
                date: e.target.value,
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
                        <input onChange={DueDateChange} type="date" name="Date" id="" />

                    </div>
                    <div className="item">
                        <h3>Status</h3>
                        <input onChange={StatusChange} placeholder='Status' type="text" name='status' />

                    </div>
                    <button onClick={submitHandler}>+ADD</button>
                </div>
                <div>
                    <Bar del={modified} prop={this.state} />
                </div>
            </div>
        )
    }
}

export default Table






    // let data = [
    // {
    //     title: "Khana",
    //     date: Date.now(),
    //     desc: "Kahna Khalo",
    //     dueDate: Date.now(),
    //     status: "Done",
    // },
    // {
    //     title: "Amitji",
    //     date: Date.now(),
    //     desc: "Kahna Khalo",
    //     dueDate: Date.now(),
    //     status: "Done",
    // },
    // ]