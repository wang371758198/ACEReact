import React, { Component } from "react";
import "../../www/css/grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state={
      checkbox:true,
      colums:[
        {key:"Details",text:"Details", className:"detail-col", hidden:true,
        formatter:function(){
          return <label className="pos-rel">
          <input type="checkbox" class="ace" />
          <span className="lbl" />
        </label>;
        }
        ,width:null,height:null},
        {key:"Domain",text:"Domain",className:null, hidden:false,formatter:null,width:null,height:null},
        {key:"Price",text:"Price",className:null, hidden:false,formatter:null,width:null,height:null},
        {key:"Clicks",text:"Clicks",className:"hidden-480", hidden:false,formatter:null,width:null,height:null},
        {key:"Update",text:"Update",className:null, hidden:false,formatter:null,width:null,height:null},
        {key:"Status",text:"Status",className:"hidden-480", hidden:false,formatter:null,width:null,height:null}
      ],
      data:[
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        {Details:"Details",Domain:"Domain",Price:"Price",Clicks:"Clicks",Update:"Update",Status:"Status"},
        
      ],
      btn:[
        {icon:"btn btn-xs btn-success",text:<i className="ace-icon fa fa-check bigger-120" />,click:(e)=>{
          console.log('第一个按钮',e)
        }},
        {icon:"btn btn-xs btn-info",text:<i className="ace-icon fa fa-pencil bigger-120" />,click:(e)=>{
          console.log("第二个按钮",e);
        }}
      ],
      pagerNumber:8,
      total:10
    }
  }

  componentWillMount() {
    
  }

  componentDidMount(){

  }

  render() {
    var thead=[];
    if(this.state.checkbox){
      thead.push(<th className="center">
                <label className="pos-rel">
                  <input type="checkbox" class="ace" />
                  <span className="lbl" />
                </label>
              </th>);
    }
    this.state.colums.forEach((e)=>{
      if(!e.hidden){
      thead.push(<th className="detail-col" className={e.className} >{e.text}</th>);
      }else{
      thead.push(<th className="detail-col hidden">{e.text}</th>);
      }
    });
    thead.push(<th/>);

   var tbody=[];
   this.state.data.forEach((data,index)=>{
     var tr=[];
      if(this.state.checkbox){
        tr.push(<td className="center">
        <label className="pos-rel">
          <input type="checkbox" class="ace" />
          <span className="lbl" />
        </label>
      </td>);
      }
      this.state.colums.forEach((e)=>{
        if(!e.hidden){
          tr.push(  <td className="center">{data[e.key]} </td>);
        }else{
          tr.push(  <td className="center hidden">{data[e.key]} </td>);
        }
      })

      var btns=[];
      this.state.btn.forEach((e)=>{
          btns.push(<button className={e.icon}  onClick={e.click.bind(this,data)} >{e.text}</button>);
      });
      tr.push(<td> <div className="hidden-sm hidden-xs btn-group">{btns}</div></td>)
      tbody.push(<tr className={index%2==0?"odd":"even"}>{tr}</tr>);
   });
   
   var pagination=[];
   for(var i=1;i<=this.state.pagerNumber;i++){
      pagination.push(<li className="paginate_button">
                      <a href="javascript:void(0)">{i}</a>
                    </li>);
   }
      pagination.push( <li className="paginate_button">
                      <a href="javascript:void(0)">...</a>
                    </li>);
       pagination.push( <li className="paginate_button">
                          <a href="javascript:void(0)">{this.state.total}</a>
                        </li>);

    return (
      <div className="gridPanel">
        <table id="simple-table" className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
            {thead}
            </tr>
          </thead>
          <tbody>
           {tbody}
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-6">
            <div className="dataTables_paging_simple_numbers">
              <ul className="pagination">
                <li className="paginate_button previous disabled">
                  <a href="javascript:void(0)">上一页</a>
                </li>
                {pagination}               
                <li className="paginate_button previous disabled">
                  <a href="javascript:void(0)">下一页</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="pager_record">
              显示第 1 - 15 条记录 &nbsp;&nbsp; 检索到15条记录
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Grid;
