import React,{ Component } from 'react';
import {Context} from '../store/store';
import comp from './ourMenuComponent'
import '../css/ourMenu.css'

// function OurMenu() {
//     return (
//         <div style={{height:'10%', display:'block'}}>
//             <comp/>
//             <h2>red</h2>
//         </div>
//
//
//     );
// }

// export default OurMenu;
class OurMenu extends Component{

    state = {
        comps: [
            {name:'Ford', img:'src(../image/1.gif'},
            {name:'lex'}
        ]
    };



    render(){
        const divStyle = {
            textAlign:'center',

        };

        const comps = this.state.comps;

        return(
            <div>
                <h2>Our Menu</h2>
                <comp style={{width:'85%', display: 'grid',margin:'0 auto', gridTemplateColumns: 'auto auto auto'}}>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                    <div  className='component' style={{margin:'2% 2%', minWidth:'300px'}}><img style={{width:'100%',height:'100%',border:'solid, black, 1px'}} src="https://res.cloudinary.com/freshly/image/upload/c_fill,f_auto,h_683,w_1024/v1562355267/production-meal-image-0e13088c-508d-4d2c-8cb0-91dfb973896c.jpg"/></div>
                </comp>

                {/*<comp  style={{display:'inline-Block', width:'50px',height:'50px',background:'grey'}} name={comps[1].name}/>*/}
            </div>
        )
    }
}
export default OurMenu;