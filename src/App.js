// import React from 'react';
// import Header from './components/Header';
// import Buttons from './components/Buttons';
// import FlightTable from './components/FlightTable';
// import RemoveFlightTable from './components/RemoveFlightTable'; // Import RemoveFlightTable
// import UpdateFlightStatusTable from './components/UpdateFlightStatusTable'; // Import UpdateFlightStatusTable
// import './App.css';
// import Info from './components/Info';
// import AddFlightForm from './components/AddFlightForm'; // Import AddFlightForm
// import { useSelector } from 'react-redux'; // To access Redux state

// function App() {
//   const showAddFlightForm = useSelector(state => state.dashboard.showAddFlightForm); // Get Add Flight form visibility
//   const showFlightTable = useSelector(state => state.dashboard.showFlightTable); // Get View Flights table visibility
//   const showRemoveFlightTable = useSelector(state => state.dashboard.showRemoveFlightTable); // Get Remove Flights table visibility
//   const showUpdateFlightStatusTable = useSelector(state => state.dashboard.showUpdateFlightStatusTable); // Get Update Flight Status table visibility

//   return (
//     <div className="container">
//       <Header />
//       <Info />
//       <Buttons />
      
//       {showAddFlightForm && <AddFlightForm />} {/* Conditionally render Add Flight form */}
//       {showFlightTable && <FlightTable />} {/* Conditionally render View Flights table */}
//       {showRemoveFlightTable && <RemoveFlightTable />} {/* Conditionally render Remove Flights table */}
//       {showUpdateFlightStatusTable && <UpdateFlightStatusTable />} {/* Conditionally render Update Flight Status table */}
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Buttons from './components/Buttons';
import FlightTable from './components/FlightTable';
import RemoveFlightTable from './components/RemoveFlightTable';
import UpdateFlightStatusTable from './components/UpdateFlightStatusTable';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Info from './components/Info';
import AddFlightForm from './components/AddFlightForm';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const showAddFlightForm = useSelector(state => state.dashboard.showAddFlightForm);
  const showFlightTable = useSelector(state => state.dashboard.showFlightTable);
  const showRemoveFlightTable = useSelector(state => state.dashboard.showRemoveFlightTable);
  const showUpdateFlightStatusTable = useSelector(state => state.dashboard.showUpdateFlightStatusTable);

  return (
    <Router>
      <Header />
      <Info />
      <Buttons />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="container">
                {showAddFlightForm && <AddFlightForm />} {/* Conditionally render Add Flight form */}
                {showFlightTable && <FlightTable />} {/* Conditionally render View Flights table */}
                {showRemoveFlightTable && <RemoveFlightTable />} {/* Conditionally render Remove Flights table */}
                {showUpdateFlightStatusTable && <UpdateFlightStatusTable />} {/* Conditionally render Update Flight Status table */}
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/remove"
          element={
            <PrivateRoute>
              <RemoveFlightTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-status"
          element={
            <PrivateRoute>
              <UpdateFlightStatusTable />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
