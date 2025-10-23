function validateForm(email, password) {
  try {
    if (!email.includes("@")) {
      throw new Error("Invalid Email");
    }
    if (password.length < 6) {
      throw new Error("Weak Password");
    }
    console.log("✅ Form is valid!");
  } catch (error) {
    console.log("❌ Error:", error);
  }
}

// Test cases
validateForm("testgmail.com", "12345"); // ❌ Invalid Email
validateForm("test@gmail.com", "123");  // ❌ Weak Password
validateForm("test@gmail.com", "123456"); // ✅ Form is valid!







function parseJSON(str) {
  try {
    let data = JSON.parse(str);
    console.log("✅ Valid JSON:", data);
    return data;
  } catch (error) {
    console.error("❌ Invalid JSON");
    return "Invalid JSON";
  }
}

// Test cases
parseJSON('{"name":"Asiya"}');  // ✅ Valid JSON: { name: "Asiya" }
parseJSON("invalid json");      // ❌ Invalid JSON
