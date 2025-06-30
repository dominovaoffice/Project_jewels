import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.js";

const auth = getAuth(app);

// Slide panels
const container = document.getElementById("container");
document.getElementById("signUp").addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
document.getElementById("signIn").addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "/"; // redirect to home
  } catch (error) {
    alert("Login failed: " + error.message);
  }
});
