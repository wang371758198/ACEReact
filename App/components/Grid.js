import React, { Component } from "react";
import "../../www/css/grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    //this.initTableThead=this.initTableThead.bind(this);
    this.state = {
      multiselect: false,
      checkbox: true,
      url: props.url,
      primaryKey: "PKID",
      colums: props.colums,
      data: [],
      btns: props.btns,
      rowNumber: 8, //一页渲染的行数
      page: 5, //分页工具栏显示的页数按钮
      total: 10,
      event: {
        rowClick: function(e) {
          if (!this.state.checkbox) return false;

          if (!this.state.multiselect) {
            if (
              $("#cb" + e.PKID)
                .parent()
                .parent()
                .parent()
                .parent()
                .find("tr").length > 0
            ) {
              $("#cb" + e.PKID)
                .parent()
                .parent()
                .parent()
                .parent()
                .find("tr")
                .each(function() {
                  $(this)
                    .children()
                    .first()
                    .find("input")
                    .removeAttr("checked");
                });
            }
          }
          var checked = $("#cb" + e.PKID).attr("checked");
          if (checked) {
            $("#cb" + e.PKID).removeAttr("checked");
          } else {
            $("#cb" + e.PKID).attr("checked", "checked");
          }
        }
      }
    };
  }

  componentWillMount() {}

  componentDidMount() {
    fetch(this.state.url).then(res => {
      if(res.status == 200){
        res.json().then(json => {
          console.log("json", json);
          this.setState({
            data: json
          });
        });
      }
    });
  }

  initTableThead(thead) {
    if (this.state.checkbox) {
      thead.push(
        <th className="center" style={{ width: 20 }}>
          <label className="pos-rel">
            <input type="checkbox" class="ace" />
            <span className="lbl" />
          </label>
        </th>
      );
    }
    this.state.colums.forEach(e => {
      if (!e.hidden) {
        thead.push(
          <th className="detail-col" className={e.className} width={e.width}>
            {e.text}
          </th>
        );
      } else {
        thead.push(<th className="detail-col hidden">{e.text}</th>);
      }
    });
    thead.push(<th />);
  }

  initTableTbody(tbody) {
    if (this.state.data.length <= 0) {
      var colspanNumber=2;
      this.state.colums.forEach(function(e){
        if(!e.hidden){
          colspanNumber++;
        }
      });
     
      tbody.push(<tr>  <td className="center" colSpan={colspanNumber}  >没有记录!</td></tr>)
      return;
    }
    this.state.data.forEach((data, index) => {
      var tr = [];
      if (this.state.checkbox) {
        tr.push(
          <td className="center">
            <label className="pos-rel">
              <input
                type="checkbox"
                class="ace"
                id={"cb" + data[this.state.primaryKey]}
              />
              <span className="lbl" />
            </label>
          </td>
        );
      }
      this.state.colums.forEach(e => {
        if (!e.hidden) {
          if (!e.formatter) {
            tr.push(
              <td className={"center " + e.className}>{data[e.key]} </td>
            );
          } else {
            tr.push(<td className="center">{e.formatter(data)}</td>);
          }
        } else {
          tr.push(<td className="center hidden">{data[e.key]} </td>);
        }
      });

      var btns = [];
      if (this.state.btns) {
        this.state.btns.forEach(e => {
          btns.push(
            <button className={e.icon} onClick={e.click.bind(this, data)}>
              {e.text}
            </button>
          );
        });
      }
      tr.push(
        <td>
          {" "}
          <div className="hidden-sm hidden-xs btn-group">{btns}</div>
        </td>
      );
      tbody.push(
        <tr
          className={index % 2 == 0 ? "odd" : "even"}
          onClick={this.state.event.rowClick.bind(this, data)}
        >
          {tr}
        </tr>
      );
    });
  }

  initPagination(pagination) {
    for (var i = 1; i <= this.state.page; i++) {
      pagination.push(
        <li className="paginate_button">
          <a href="javascript:void(0)">{i}</a>
        </li>
      );
    }
    pagination.push(
      <li className="paginate_button">
        <a href="javascript:void(0)">...</a>
      </li>
    );
    pagination.push(
      <li className="paginate_button">
        <a href="javascript:void(0)">{this.state.total}</a>
      </li>
    );
  }

  render() {
    var thead = [];

    this.initTableThead(thead);

    var tbody = [];
    this.initTableTbody(tbody);

    var pagination = [];
    this.initPagination(pagination);

    return (
      <div className="gridPanel">
        <table
          id="simple-table"
          className="table table-striped table-bordered table-hover"
        >
          <thead>
            <tr>{thead}</tr>
          </thead>
          <tbody>{tbody}</tbody>
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
