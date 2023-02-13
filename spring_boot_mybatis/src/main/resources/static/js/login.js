/**
 * login.js
 */
 
 $(document).ready(function(){
 	$("#frmLogin").on("submit", function(){
 		//폼이 submit 되지 않도록 기본 기능 중단
 		event.preventDefault();
 		
 		//id와 pw값 변수에 저장
 		var userId = $("#user_id").val();
 		var userPw = $("#user_pw").val();
 		
 		//서버에 전송하고 결과 받아서 처리
 		$.ajax({
 			type:"post",
 			url:"login",
 			data: {"id":userId,
 				   "pwd":userPw},
 			dataType:"text",
 			success:function(result) {
 				if(result == "success"){
 					alert("login ok\n");
 					location.href="/loginOk";
 					
 				} else
 					alert("login fail");
 			},
 			error:function(){
 				alert("실패");
 			},
 		}); // ajax 종료
 		
 	});// submit 종료
 });