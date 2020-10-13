function myFunction() {

 // 現在扱っているシートを取得
    var sheet = SpreadsheetApp.getActiveSheet();

  //ユーザー変更部分------------
  //検索ワード
  var values = sheet.getDataRange().getValues(); //全体
  var search_word = values[1][8]

  //書き込むワード
  var input_word = "OK"
  //何列の何行目から検索するか
  var search_col = "E"
  var search_row = 2
  //何列目に書き込むか
  var input_col = 6

 
  // E2以降のE列を取得（空白を処理する）
  var Values_E = sheet.getRange('E2:E').getValues().filter(String);
  //　結果を表示
  Logger.log(Values_E);
  
  for(var i = 1; i <= Values_E.length; i++) {  // １つずつ値を取り出してみる
    if(Math.floor(Values_E[i]) === search_word){ // i個目が一致していたら
      sheet.getRange(i+search_row, input_col).setValue(input_word); //F列＝６列目
      Logger.log("書き込みました")
    }else{
    Logger.log("除外しました",Math.floor(Values_E[i]))
    }
  }
  Logger.log("終了しました")
}
