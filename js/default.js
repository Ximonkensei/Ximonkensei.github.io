/*程式執行時預設為空*/
	var N1=document.getElementById("NameInput");
	//N1.value = '';
	var T1=document.getElementById("TagInput1");
	var T2=document.getElementById("TagInput2");
	var T3=document.getElementById("TagInput3");

	blank();
/*程式執行時預設為空*/




/*空之境界*/
function blank(){
	T1.value = '';
	T2.value = '';
	T3.value = '';
}
/*空之境界*/


function btn(x){

	/*假如變成這樣將位值訂定期為空*/
	/*
	if(T1.value == undefined || T1.value == null||T2.value == undefined || T2.value == null || T3.value == undefined || T3.value == null)	{
	blank();
	}*/
	/*假如變成這樣將位值訂定期為空*/


	/*殺死填入空格*/
	/*
	T1.value.replace(/" "|"　"/g,"");
	T2.value.replace(/" "|"　"/g,"");
	T3.value.replace(/" "|"　"/g,"");
	*/
	/*殺死填入空格*/


/*這邊是判斷式 讓Tag存放的工具*/
	if((T1.value == '') && ((T2.value != '' && T3.value =='') ||(T2.value == '' && T3.value !='')|| (T2.value != '' && T3.value !='')|| (T2.value == '' && T3.value ==''))){
		T1.value = x;
	}else if(T2.value == '' && ((T1.value != '' || T3.value == '') || (T1.value != '' || T3.value != ''))){
		T2.value = x;
	}else if(T3.value =='' && (T1.value != '' || T2.value != '')){
		T3.value = x;
	}else if(T1.value != '' && T2.value != '' && T3.value != ''){
		blank()
		T1.value == x;
	}else{
		blank();
	}

	TagSearch();
}
/*這邊開始是判斷式 讓Tag存放的工具*/






/*列表開關*/
function onoff() {
  if(document.getElementById("container").style.display == "none"){
	document.getElementById("container").style.display = "block";
  }else{
  	document.getElementById("container").style.display = "none";
  }
} 
/*列表開關*/















// Search(x,y) 的x 為查找表格的數字 y為選定框框的ID名稱
/*




//搜尋標籤器1
function SearchTag1() {
 Search(3,"TagInput1");
}

//標籤搜尋器2
function SearchTag2() {
 Search(3,"TagInput2");
}
//標籤搜尋器3
function SearchTag3() {
 Search(3,"TagInput3");
}

*/











/*TAG搜尋器*/
function TagSearch(){
//宣告一些名字很煞氣的變數名， input=輸入   filter=過濾   table=表格    tr=列<tr>  td=欄<td>	txtValue=表格的文字
 var  table, tr, td, i, txtValue;
 var T1 = document.getElementById("TagInput1");		//取得input id的輸入框
 var T2 = document.getElementById("TagInput2");		//取得input id的輸入框
 var T3 = document.getElementById("TagInput3");		//取得input id的輸入框
 

 table = document.getElementById("mytable");	//取得這個table
 tr = table.getElementsByTagName("tr");			//取得所有tr

	 for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[3];	//獲取所有表格td[????]之文本

		if (td) {
		  txtValue = td.textContent || td.innerText;

		  if((txtValue.indexOf(T1.value) > -1)  && (txtValue.indexOf(T2.value) > -1)  && (txtValue.indexOf(T3.value) > -1)) {	//滿足三種TAG條件的搜尋值 +
				tr[i].style.display = "";		//打開該列
		  }else {
			tr[i].style.display = "none";	//隱藏該列
		}
	  }
	}
}
/*TAG搜尋器*/




//名稱搜尋器
//可以轉換成建構函數  input = document.getElementById("???")=尋找的INPUT的ID ;   td[????]=查找行  
function NameSearch(){
//宣告一些名字很煞氣的變數名， input=輸入     table=表格    tr=列<tr>  td=欄<td>	txtValue=表格的文字
 var input, table, tr, td, i, txtValue;
 input = document.getElementById("NameInput");				//取得input id的輸入框

 table = document.getElementById("mytable");	//取得這個table
 tr = table.getElementsByTagName("tr");			//取得所有tr

 for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];	//獲取所有表格td[????]之文本
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(input.value) > -1) {
        tr[i].style.display = "";		//打開該列
      } else {
        tr[i].style.display = "none";	//隱藏該列
    }
   }
  }
}
//名稱搜尋器








