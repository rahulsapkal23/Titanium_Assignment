var args =arguments[0] || {};
Ti.API.info("by");
  Ti.API.info(JSON.stringify(args));
$.rowId123.text=args.rowId;

$.itemName123.text=args.itemName;
function closeme() {
//  Ti.API.info(JSON.stringify(args));
  $.win123.close();
}
