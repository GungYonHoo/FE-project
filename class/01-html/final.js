const changeFocus1 = () => {
  let phone1 = document.getElementById("p1").value
  if (phone1.length === 3) {
    document.getElementById("p2").focus()
  }
}

const changeFocus2 = () => {
  let phone2 = document.getElementById("p2").value
  if (phone2.length === 4) {
    document.getElementById("p3").focus()
  }
}

const checkValidation = () => {
  let phone1 = document.getElementById("p1").value
  let phone2 = document.getElementById("p2").value
  let phone3 = document.getElementById("p3").value
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.getElementById("sendButton").disabled = false
  }
  else {
    document.getElementById("sendButton").disabled = true
  }
}

let timer
let isStarted = false

const submit = () => {
  const token = String(Math.floor( Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certificationNumber").innerText = token;
  document.getElementById("sendButton").setAttribute("disabled", "true")
  document.getElementById("completeButton").removeAttribute("disabled")

  
  if(isStarted === false) {
    // 타이머가 작동중이 아닐때
    isStarted = true 
    
    let time = 180
    
    
    timer = setInterval(function(){
      
      if(time >=0) {
        let min = Math.floor(time/60)
        let sec = String(time%60).padStart(2, "0")
        document.getElementById("timer").innerText = min + ":" + sec;
        time = time -1
      }

      else {
          document.getElementById('completeButton').disabled = true;
          isStarted = false
          document.getElementById("certificationNumber").innerText = "000000";
          document.getElementById("timer").innerText = "3:00";
          
          clearInterval(timer)
      }
    },1000)
    
} 
  else {

}

}

const completeMessage = (timer) => {
    clearInterval(timer)
    alert("인증이 완료되었습니다.")
    document.getElementById('completeButton').disabled = true;
    isStarted = false
    

    document.getElementById("completeButton").innerText = "인증 완료"
    document.getElementById("signup").disabled = false;
}

const errorMessage = () => {
  let email = document.getElementById("inputLine1").value
  let name = document.getElementById("inputLine2").value
  let password = document.getElementById("inputLine3").value
  let repassword = document.getElementById("inputLine4").value
  let region = document.getElementById("select").value
  let genderWoman = document.getElementById("gender_woman").checked
  let genderMan = document.getElementById("gender_man").checked
  
  let isValid = true;

  if (email === "" || !email.includes("@")) {
    document.getElementById("error_email").innerText = "이메일이 올바르지 않습니다."
    email = ""
    isValid = false
  }
  else {
    document.getElementById("error_email").innerText = ""
  }
  
  if (name === "") {
    document.getElementById("error_name").innerText = "이름이 올바르지 않습니다."
    name = ""
    isValid = false
  }
  else {
    document.getElementById("error_name").innerText = ""
  }

  if (password === "" || repassword === "" || password !== repassword) {
    document.getElementById("error_password").innerText = "비밀번호를 입력해주세요"
    document.getElementById("error_repassword").innerText = "비밀번호를 입력해주세요"
    password = ""
    repassword = ""
    isValid = false
  }
  else {
    document.getElementById("error_password").innerText = ""
    document.getElementById("error_repassword").innerText = ""
  }

  if (region !== "서울" && region !== "경기" && region !== "인천") {
    document.getElementById("error_region").innerText = "지역을 선택해 주세요."
    region = ""
    isValid = false
  }
  else {
    document.getElementById("error_region").innerText = ""
  }

  if (genderWoman !== true && genderMan !== true) {
    document.getElementById("error_gender").innerText = "성별을 선택해 주세요."
    gender = ""
    isValid = false
  }
  else {
    document.getElementById("error_gender").innerText = "성별을 선택해 주세요."
  }
  
  if (isValid === true) {
        alert("코드캠프 가입을 축하합니다.")
      }
}

