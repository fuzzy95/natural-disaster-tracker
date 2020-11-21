import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Map from './components/Map/Map'

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
};

export default App;
