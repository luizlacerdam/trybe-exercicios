import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      storage: [],
      load: false,
    }
  }
  fetchPerson = async () => {
    const URL = 'https://api.randomuser.me/';
    const request = await fetch(URL);
    const data = await request.json();
    this.setState(() => ({
      storage: [data],
      load: true,
    }));
  }

  componentDidMount() {
    this.fetchPerson();
  }

  getUserElements = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }
  
  render() {
    const { load, storage } = this.state;
    if (!load) return <Loading />;
    return (
      <>
        <PersonCard 
        person={ this.getUserElements(storage[0].results[0]) }
        />
      </>
    );
  }
}

export default PersonDetails;
