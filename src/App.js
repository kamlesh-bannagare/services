import {useState} from 'react';
import Container from '@mui/material/Container';
import Service from './Service/Service'
import Grid from '@mui/material/Grid';
import NewService from './Service/NewService/NewService'

let services_data = [
  {
    id: "166",
    title: "Golden Hall",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_RLZ49-CzVNh56icMtjgn8dZvHK1J6jbPg&usqp=CAU",
    amount: "16564",
    date: new Date()
  },
  {
    id: "255",
    title: "Govt College of Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIc28-cVzsMa__02Hottx6fA1eu6RNz2ykNA&usqp=CAU",
    amount: "50000",
    date: new Date()
  },
  {
    id: "555",
    title: "Electrician",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXG_3XM8rIsWDbGqGXhz0rseSw81ndG_Zg7g&usqp=CAU",
    amount: "9764",
    date: new Date()
  },
]

function App() {
  const [services, setServices]=useState(services_data)
  const addServiceHandler = (data) => {
    // services.push(data)
     setServices((prevState) => { return [...services,data]})
  
  }

  return (
    <div className="App">
      <Container fixed>
        <NewService onAddService={addServiceHandler} />

        <Grid container spacing={2}>
          {
            services.map((service,i) => <Grid key={i} item lg={4} md={6}>
              <Service title={service.title}
                image={service.image}
                amount={service.amount}
                date={service.date} />
            </Grid>
            )
          }
          {/* <Grid item lg={4} md={6}>
            <Service title={services[0].title} image={services[0].image} amount={services[0].amount} date={services[0].date} />
          </Grid>
          <Grid item lg={4} md={6}>
            <Service title={services[1].title} image={services[1].image} amount={services[1].amount} date={services[1].date} />
          </Grid>
          <Grid item lg={4} md={6}>
            <Service title={services[2].title} image={services[2].image} amount={services[2].amount} date={services[2].date} />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
