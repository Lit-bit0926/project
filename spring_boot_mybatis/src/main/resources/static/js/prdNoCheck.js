/**
 * prdNoCheck.js
 */
 
 $(document).ready(function() {
 	$("#btnPrdNoCheck").on("click", function(){
 		event.preventDefault();
 		
 		$.ajax({
 			type:"post",
 			url:"prdNoCheck",
 			data: {"prdNo":$("#prdNo").val()},
 			dataType:"text",
 			success:function(result){
 				if(result == "no_use"){
 					alert("사용할 수 없는 번호입니다.");
 					$("#prdNo").val("");
 				}else
 					alert("사용 가능한 번호입니다.");
 			},
 			error:function(){
 				alert("실패");
 			},
 			complete:function() {
 				//alert("작업 완료");
 			}
 		}); // ajax 종료
 		
 	}); //$("#btnCheck").on("click", 종료
 });