
var rowData=[];
for (var i = 1; i <=10; i++)
{
  var payload1={
                  rowId:i,
                  itemName:'Test'+i
                }


  var row1=Alloy.createController('row',payload1).getView();
  Ti.API.info('hiiii');
//    Ti.API.info(JSON.stringify(row1));
  rowData.push(row1);
  Ti.API.info(JSON.stringify(rowData[i]));
  Ti.API.info('grgrgrg');
}
//Ti.API.info("rowData");
$.itemsList123.data=rowData;
$.win123.open();

function showItems123(e) {
  // Ti.API.info(JSON.stringify(e));

  var payload1={
    rowId:e.row.rowId,
    itemName:e.row.itemName
  }
  var w=Alloy.createController('detailwin',payload1).getView();
  w.open();

}
