function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var now = new Date();
    
    var age = now.getFullYear() - dob.getFullYear();
    
    // Adjust age if birthday has not occurred yet this year
    if (now.getMonth() < dob.getMonth() || (now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate())) {
      age--;
    }
    
    var result = document.getElementById('result');
    result.innerHTML = "Your age is: " + age;
  }
  