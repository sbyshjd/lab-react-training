import React, { Component } from 'react';
// import CreditCard from './components/creditcard';
// import Rating from './components/rating';
// import DriverCard from './components/drivercard';
// import LikeButton from './components/likebutton';
// import ClickablePicture from './components/clickablepicture';
// import Dice from './components/dice';
import Carousel from './components/carousel';
import NumbersTable from './components/numberstable';
import FaceBook from './components/facebook';
import SignUp from './components/signup';
import RgbColorPicker from './components/rgbcolorpicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>CreditCard</h1>
        <div style={{display:'flex'}}>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />         
        </div>
        <h1>Rating</h1>
        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <h1>DriverCard</h1>
        <div>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }} />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} />
        </div>
        <h1>Like Button</h1>
          <div>
          <LikeButton/>
          </div>
          <h1>ClickablePicture</h1>
          <ClickablePicture img='/img/maxence.png' imgClicked='/img/maxence-glasses.png'/>
          <h1>Dice</h1>
          <Dice/> */}
          <h1>Carousel</h1>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
          />
          <h1>NumbersTable</h1>
          <NumbersTable limit={12} />
          <h1>Facebook</h1>
          <FaceBook/>
          <h1>SignUp Page</h1>
          <SignUp/>
          <h1>RGB Color Picker</h1>
          <RgbColorPicker/>
      </div>
    );
  }
}

export default App;
