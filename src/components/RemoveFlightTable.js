// src/components/RemoveFlightTable.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFlight } from '../redux/dashboardSlice'; // Assuming the action exists

const RemoveFlightTable = () => {
  const flights = useSelector(state => state.dashboard.flights); // Get flights from Redux state
  const dispatch = useDispatch();

  const handleDelete = (flightId) => {
    dispatch(deleteFlight(flightId)); // Dispatch the delete action for the flight
  };

  return (
    <div className="flight-table">
      <table>
        <thead>
          <tr>
            <th>Flight ID</th>
            <th>Airline</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Delete Flight</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.airline}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>
                <button onClick={() => handleDelete(flight.id)}>Yes</button>
                <button>No</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveFlightTable;
