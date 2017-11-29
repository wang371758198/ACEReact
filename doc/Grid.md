# Grid 组件使用说明
## 属性说明

    是否可以多选 true 可以 
    multiselect: false,

    是否有多选框按钮
    checkbox: true,

    组件只 必填
    primaryKey: "PKID",

    显示的列定义，数组
      colums: [{
          key: "Details",//列显示的字段
          text: "Details",//列显示的名称
          className: "detail-col",//列的样式class
          hidden: true, //是否隐藏
          //格式化显示 e 当前行数据的对象
          formatter: function(e) {
            return (
                <label className="pos-rel">
                {'PKID:'+e.PKID +' Value:'+e.Details}
               </label>
            );
          },
          //列宽度 为null是默认
          width: null,
          //列高度 为null是默认
          height: null
        }],

      //数据源
      data: [
        {
          PKID: 1,
          Details: "Details",
          Domain: "Domain",
          Price: "Price",
          Clicks: "Clicks",
          Update: "Update",
          Status: "Status"
        }
      ],

      //操作列按钮的定义
      btn: [
        {
          icon: "btn btn-xs btn-success",
          text: <i className="ace-icon fa fa-check bigger-120" />,
          click: e => { 
            // e 当前行数据源对象
          }
        },
      ],
      rowNumber: 8,//一页渲染的行数
      page:5,//分页工具栏显示的页数按钮
      total: 10,//总行数
      event: {
       
      }}