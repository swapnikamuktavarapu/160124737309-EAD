import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    let score = 0;

    // Validation rules
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>_]/.test(value)) score++;

    // Strength conditions
    if (score <= 1) {
      setStrength("Weak");
    } else if (score === 2 || score === 3) {
      setStrength("Medium");
    } else if (score === 4) {
      setStrength("Strong");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  return (
    <div >
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        
      />

      <p>
        Strength: <strong>{strength}</strong>
      </p>

      <ul>
        <li>Minimum 8 characters</li>
        <li>At least one uppercase letter</li>
        <li>At least one number</li>
        <li>At least one special character</li>
      </ul>
    </div>
  );
}

export default PasswordChecker;