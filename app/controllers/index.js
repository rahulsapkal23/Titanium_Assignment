var rowData=[];
for (var i = 1; i <=10; i++)
{
  var payload1={
                  rowId:i,
                  itemName:'Test'+i
                }
  var row1=Alloy.createController('row123',payload1).getView();
//  Ti.API.info(row1);
  rowData.push(row1);
}


function showItems123(e) {
  //  Ti.API.info(JSON.stringify(e));
  var payload={
    rowId:e.rowData.rowId,
    itemName:e.rowData.itemName
  }
  var w=Alloy.createController('detailwin',payload).getView();
  w.open();

}

//Ti.API.info(rowData);
$.itemsList123.data=rowData;
$.win123.open();
