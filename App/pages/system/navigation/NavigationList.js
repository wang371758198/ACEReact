import React, { Component } from "react";
import Grid from '../../../components/Grid';

class NavigationList extends Component {
  
  constructor(props) {
    super(props);
    this.state={
    }
    
  }

  componentWillMount() {
   
  }

  componentDidMount() {
   
  }

  componentWillReceiveProps() {}

  shouldComponentUpdate() {}

  componentWillUpdate() {

  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  initColums(){
    var colums=[{
      key:"PKID",
      text:"PKID",
      hidden:true
    },{
      key:"IconClassName",
      text:"图 标",
      width:20,
      className:"txtTd"
    },{
      key:"MenuName",
      text:"菜单名称",
    },{
      key:"Uri",
      text:"链接地址"
    }];
    
    return colums;
  }

  initBtns(){
    var btns =[];
    btns.push({
      icon: "btn btn-xs btn-success",
      text: <i className="ace-icon fa fa-check bigger-120" />,
      click: e=>{
        this.add(e);
      }
    });
    btns.push({
      icon: "btn btn-xs btn-info",
      text: <i className="ace-icon fa fa-pencil bigger-120" ></i>,
      click: e=>{
        this.edit(e);
      }
    });
    btns.push({
      icon: "btn btn-xs btn-danger",
      text: <i className="ace-icon fa fa-trash-o bigger-120" ></i>,
      click: e=>{
        this.delete(e);
        console.log(e);
      }
    });
    return btns;
  }

  add(e){
    layer.open({
      title:"标 题",
      area:['420px','400px'],
      type: 2,
      content:'/System/Navigation/Form',
      btn:['确 定','取 消'],
      yes:function(){

      },
      cancel:function(index,layero){
        layer.close(index);
      }
    });
  }

  edit(e){
    alert("编辑")
  }
  delete(e){
    alert("删除");
  }

  render() {
    var colums = this.initColums();
    var btns = this.initBtns();
    return (
      <div
        className="page-content"
        style={{ height: "100%", overflow: "auto", padding: 0 }}
      >
       <Grid  url="/api/home/index" colums={colums}  btns={btns}/>
      </div>
    );
  }
}
export default NavigationList;
