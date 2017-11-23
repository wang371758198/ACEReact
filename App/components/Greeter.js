import React, {Component} from 'react'


class Greeter extends Component{
  

  constructor(props){
    super(props);
   console.log("props",props);
   this.state={
     A:0,
     B:0,
     C:0
   };
    this.handlerClickA=this.handlerClickA.bind(this);
    this.handlerClickB=this.handlerClickB.bind(this);
    this.Add=this.Add.bind(this);
  }

  handlerClickA(event){
    this.setState({
      A:event.target.value
    });
  }

  handlerClickB(event){
    this.setState({
      B:event.target.value
    });
  }

  Add(){
    fetch('/api/values/12').then((res)=>{
      console.log(res.blob());
    })
  }

  render() {
    return (
      <div style={{height:1200}}>
       <input  value={this.state.A} onChange={this.handlerClickA} />
       +
       <input  value={this.state.B} onChange={this.handlerClickB} />
       =
       <input  value={this.state.C} />

       <br/>
       <button onClick={this.Add}>计算结果</button>
      
      </div>
    );
  }
}

export default Greeter

