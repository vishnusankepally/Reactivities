import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5001/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h1" icon="users" content="demo application react" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.titile}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
