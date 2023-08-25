import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function HomePage() {
  const [userData, setUserData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [suggestedNames, setSuggestedNames] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const filteredNames = userData
      .filter((user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase())
      )
      .map((user) => user.name);
    setSuggestedNames(filteredNames);
  }, [inputValue, userData]);

  return (
    <div>
      <h1>Users from API:</h1>
      <Autocomplete
        sx={{width:"50%"}}
        options={suggestedNames}
        renderInput={(params) => (
          <TextField {...params} label="Search for names" variant="outlined" />
        )}
      />
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;


// import React, {useState, useEffect} from "react";

// function HomePage() {
//   const [userData, setUserData] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [suggestedNames, setSuggestedNames] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API endpoint
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUserData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   useEffect(() => {
//     // Filter user names based on input value
//     const filteredNames = userData
//       .filter((user) =>
//         user.name.toLowerCase().includes(inputValue.toLowerCase())
//       )
//       .map((user) => user.name);
//     setSuggestedNames(filteredNames);
//   }, [inputValue, userData]);

//   return (
//     <div>
//       <h1>Users from API:</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Search for names"
//         list="suggestions"
//       />
//       <datalist id="suggestions">
//         {suggestedNames.map((name, index) => (
//           <option key={index} value={name} />
//         ))}
//       </datalist>
//       {/* <ul>
//         {userData.map((user) => (
//           <li key={user.id}>
//             <h3>{user.name}</h3>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default HomePage;
