import React from 'react';
import './App.css';

import Header from './components/header';
import Image from './components/image';
import Contact from './components/contact';
import Button from './components/button/button';
import Card from './components/card/card';

const CardData = [
  {image: 'https://cdn1.iconfinder.com/data/icons/electronics-and-devices-14/100/device_electronic_gadget-11-512.png',
   title: 'Development',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  center: false,
      id: 1
  },
  {image: 'https://cdn1.iconfinder.com/data/icons/internet-marketing-and-web-optimization-2/128/88-512.png',
   title: 'Designing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  center: true,
      id: 2
  },
  {image: 'https://www.beliviva.com/wp-content/uploads/2019/06/digital-marketing.png',
   title: 'Marketing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  center: false,
      id: 3
  }
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <Header name={'John Doe'} title={'Frontend engineer'}/>
          <Contact icon={'https://image.flaticon.com/icons/png/512/281/281769.png'} value={'johndoe@gmail.com'}/>
          <Contact icon={'https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png'} value={'085123456789'} />
        </div>
        <div className="center">
          <Image src={'https://themes.themewaves.com/nuzi/wp-content/uploads/sites/4/2013/05/Team-Member-3.jpg'} alt={'john doe'} width={'200px'} />
          <div className="little-margin-top">  
            <Button value={'Download CV'} variant={'black'} link={'https://i.pinimg.com/736x/37/74/44/377444c0e5a5f46b52f1702beacc1e34.jpg'} />
            <Button value={'Hire Me'} variant={'white'} handleClick={() => alert("sorry I'm busy for now")} />
          </div>
        </div>
      </div>
        <div>
          <h1 className="margin-bottom-none padding-left-20">Skills</h1>
          <hr/>
          <div className="little-padding-bottom ">
            <div className="margin-horizontal-20 flex-and-center">
              {CardData.map(res => <Card key={res.id} image={res.image} title={res.title} desc={res.desc} center={res.center}/>)}
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
