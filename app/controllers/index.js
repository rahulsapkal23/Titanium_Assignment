function showItems123(e) {
  var payload={
    rowId:"11",
    itemName:"ad"
  }
  var w=Alloy.createController('detailwin',payload).getView();
  w.open();

}


$.itemsList123.data="rowData";
$.win123.open();
