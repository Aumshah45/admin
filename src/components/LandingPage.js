// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import Info from './Info';
import Buttons from './Buttons';
import FlightTable from './FlightTable';
import RemoveFlightTable from './RemoveFlightTable';
import UpdateFlightStatusTable from './UpdateFlightStatusTable';
import AddFlightForm from './AddFlightForm';
import { useSelector } from 'react-redux';
import '../App.css';
const LandingPage = () => {
  const showAddFlightForm = useSelector(state => state.dashboard.showAddFlightForm);
  const showFlightTable = useSelector(state => state.dashboard.showFlightTable);
  const showRemoveFlightTable = useSelector(state => state.dashboard.showRemoveFlightTable);
  const showUpdateFlightStatusTable = useSelector(state => state.dashboard.showUpdateFlightStatusTable);

  return (
    <div className="container">
      <Header />
      <Info />
      <Buttons />
      
      {showAddFlightForm && <AddFlightForm />}
      {showFlightTable && <FlightTable />}
      {showRemoveFlightTable && <RemoveFlightTable />}
      {showUpdateFlightStatusTable && <UpdateFlightStatusTable />}
    </div>
  );
};

export default LandingPage;
