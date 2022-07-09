import React, { Component } from 'react'
import "./bar.css"

export class Bar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showData:[],
        }
    }
    render() {

        let { data, pages } = this.props.prop;

        let pageArray = [];

        for (var i = 0; i < pages; i++) {
            pageArray.push(i);
        }

        let pageHandle = (x) => {
            var skip  = x*5 ; 
            var newArr=[];
            for(var i=skip ; i<skip+5 ; i++){
                if(!data[i]){
                    continue;
                }
                newArr.push(data[i]);
            }
            this.setState({
                showData:newArr,
            })
            console.log(newArr);
        }
  
        let handleTitle = (e) =>{
            this.setState({
                title:e.target.value,
            })
            console.log(this.state.title);
        }
        let handleDesc = (e) =>{
            this.setState({
                desc:e.target.value,
            })
        }
        let handleStatus = (e) =>{
            this.setState({
                status:e.target.value,
            })
        }
        
        let handleUpdate = (id) =>{
            console.log(id);

        }
        
        let handleDelete = (id) =>{
            console.log(id);
        }

        return (
            <div className="barCon">
                <div className="titleCon">
                    <h4>Name</h4>
                    <h4>Desc</h4>
                    <h4>Created-On</h4>
                    <h4>Due-Date</h4>
                    <h4>Status</h4>
                    <h4>Update</h4>
                    <h4>Delete</h4>
                </div>
                <div className="cardCon">
                    {
                        this.state.showData.map((x) => (
                            <div className='bar'>
                                <input type="text" onChange={handleTitle} value={x.title} name="title" id="" />
                                <input type="text" onChange={handleDesc} value={x.desc} name="desc" id="" />
                                <div>{x.date}</div>
                                <div>{x.dueDate}</div>
                                <input type="text" onChange={handleStatus} value={x.status} name="desc" id="" />
                                <button onClick={()=>{handleUpdate(x.id)}}>Update</button>
                                <button onClick={()=>handleDelete(x.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div className="Pagination">
                    {
                        pageArray.map((x) => <button onClick={() => { pageHandle(x) }}>{x}</button>)
                    }
                </div>
            </div>
        )
    }
}

export default Bar