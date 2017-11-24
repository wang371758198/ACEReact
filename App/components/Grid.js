import React, { Component } from "react";
import "../../www/css/grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gridPanel">
        <table id="simple-table" className="table  table-bordered table-hover">
          <thead>
            <tr>
              <th className="center">
                <label className="pos-rel">
                  <input type="checkbox" class="ace" />
                  <span className="lbl" />
                </label>
              </th>
              <th className="detail-col">Details</th>
              <th>Domain</th>
              <th>Price</th>
              <th className="hidden-480">Clicks</th>

              <th>
                <i className="ace-icon fa fa-clock-o bigger-110 hidden-480" />
                Update
              </th>
              <th className="hidden-480">Status</th>

              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center">
                <label className="pos-rel">
                  <input type="checkbox" class="ace" />
                  <span className="lbl" />
                </label>
              </td>

              <td className="center">
                <div className="action-buttons">
                  <a
                    href="#"
                    className="green bigger-140 show-details-btn"
                    title="Show Details"
                  >
                    <i className="ace-icon fa fa-angle-double-down" />
                    <span className="sr-only">Details</span>
                  </a>
                </div>
              </td>

              <td>
                <a href="#">ace.com</a>
              </td>
              <td>$45</td>
              <td className="hidden-480">3,330</td>
              <td>Feb 12</td>

              <td className="hidden-480">
                <span className="label label-sm label-warning">Expiring</span>
              </td>

              <td>
                <div className="hidden-sm hidden-xs btn-group">
                  <button className="btn btn-xs btn-success">
                    <i className="ace-icon fa fa-check bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-info">
                    <i className="ace-icon fa fa-pencil bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-danger">
                    <i className="ace-icon fa fa-trash-o bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-warning">
                    <i className="ace-icon fa fa-flag bigger-120" />
                  </button>
                </div>

                <div className="hidden-md hidden-lg">
                  <div className="inline pos-rel">
                    <button
                      className="btn btn-minier btn-primary dropdown-toggle"
                      data-toggle="dropdown"
                      data-position="auto"
                    >
                      <i className="ace-icon fa fa-cog icon-only bigger-110" />
                    </button>

                    <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                      <li>
                        <a
                          href="#"
                          className="tooltip-info"
                          data-rel="tooltip"
                          title="View"
                        >
                          <span className="blue">
                            <i class="ace-icon fa fa-search-plus bigger-120" />
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="tooltip-success"
                          data-rel="tooltip"
                          title="Edit"
                        >
                          <span className="green">
                            <i className="ace-icon fa fa-pencil-square-o bigger-120" />
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="tooltip-error"
                          data-rel="tooltip"
                          title="Delete"
                        >
                          <span className="red">
                            <i className="ace-icon fa fa-trash-o bigger-120" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className="center">
                <label className="pos-rel">
                  <input type="checkbox" class="ace" />
                  <span className="lbl" />
                </label>
              </td>

              <td className="center">
                <div className="action-buttons">
                  <a
                    href="#"
                    className="green bigger-140 show-details-btn"
                    title="Show Details"
                  >
                    <i className="ace-icon fa fa-angle-double-down" />
                    <span className="sr-only">Details</span>
                  </a>
                </div>
              </td>

              <td>
                <a href="#">ace.com</a>
              </td>
              <td>$45</td>
              <td className="hidden-480">3,330</td>
              <td>Feb 12</td>

              <td className="hidden-480">
                <span className="label label-sm label-warning">Expiring</span>
              </td>

              <td>
                <div className="hidden-sm hidden-xs btn-group">
                  <button className="btn btn-xs btn-success">
                    <i className="ace-icon fa fa-check bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-info">
                    <i className="ace-icon fa fa-pencil bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-danger">
                    <i className="ace-icon fa fa-trash-o bigger-120" />
                  </button>

                  <button className="btn btn-xs btn-warning">
                    <i className="ace-icon fa fa-flag bigger-120" />
                  </button>
                </div>

                <div className="hidden-md hidden-lg">
                  <div className="inline pos-rel">
                    <button
                      className="btn btn-minier btn-primary dropdown-toggle"
                      data-toggle="dropdown"
                      data-position="auto"
                    >
                      <i className="ace-icon fa fa-cog icon-only bigger-110" />
                    </button>

                    <ul className="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">
                      <li>
                        <a
                          href="#"
                          className="tooltip-info"
                          data-rel="tooltip"
                          title="View"
                        >
                          <span className="blue">
                            <i class="ace-icon fa fa-search-plus bigger-120" />
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="tooltip-success"
                          data-rel="tooltip"
                          title="Edit"
                        >
                          <span className="green">
                            <i className="ace-icon fa fa-pencil-square-o bigger-120" />
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="tooltip-error"
                          data-rel="tooltip"
                          title="Delete"
                        >
                          <span className="red">
                            <i className="ace-icon fa fa-trash-o bigger-120" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-6">
            <div className="dataTables_paging_simple_numbers">
              <ul className="pagination">
                <li className="paginate_button previous disabled">
                  <a href="javascript:void(0)">上一页</a>
                </li>
                <li className="paginate_button active">
                  <a href="javascript:void(0)">1</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">2</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">3</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">4</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">5</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">6</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">7</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">8</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">9</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">...</a>
                </li>
                <li className="paginate_button">
                  <a href="javascript:void(0)">100</a>
                </li>
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
