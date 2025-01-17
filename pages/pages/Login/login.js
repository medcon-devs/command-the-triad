import { useState } from "react";
import { useRouter } from "next/router"; // For navigatio

// Static credentials
const validCredentials = {
  email: "user@example.com",
  password: "password123",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials
    if (email === validCredentials.email && password === validCredentials.password) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/welcomePage"); // Redirect to Home page
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    
       <div
       style={{
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         height: "100vh",
         backgroundImage: "url('/images/background-login.jpg')", // Your custom background image
         backgroundSize: "cover",
         backgroundPosition: "center",
         color: "#fff", // White text for contrast
         backgroundColor:"red"
       }}
     >
       <div
         style={{
           backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for better text contrast
           padding: "40px",
           borderRadius: "10px",
           width: "100%",
           maxWidth: "400px",
         }}
       >
         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
         <form onSubmit={handleSubmit}>
           <div style={{ marginBottom: "20px" }}>
             <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
             <input
               type="email"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               style={{
                 padding: "10px",
                 width: "100%",
                 borderRadius: "5px",
                 border: "1px solid #ccc",
               }}
             />
           </div>
           <div style={{ marginBottom: "20px" }}>
             <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
             <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               style={{
                 padding: "10px",
                 width: "100%",
                 borderRadius: "5px",
                 border: "1px solid #ccc",
               }}
             />
           </div>
           {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
           <button
             type="submit"
             style={{
               padding: "10px 20px",
               width: "100%",
               backgroundColor: "#4CAF50",
               color: "#fff",
               border: "none",
               borderRadius: "5px",
               cursor: "pointer",
               fontWeight: "bold",
             }}
           >
             Login
           </button>
         </form>
       </div>
    
     </div> 
  );
}

export default Login;
