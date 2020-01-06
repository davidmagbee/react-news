// import React, { Component } from 'react'

// const url = 'https://newsapi.org/v2/top-headlines?' +
// 'country=us&' + 'apiKey=6ad3a5693c1948fc80c91b0ccaf18ea9';

// const req = new Request(url);

// class NewsApp extends Component {
//     constructor(props) {
//         super(props);
    
//         this.state = {
//              headlines: []
//         }
//     }
    
//     componentDidMount() {
//         this.newHeadline()
//     }

//     newHeadline = () => {
//         fetch(url)
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//         })
//     }

//     let req = new Request(url);
//         fetch(req)
//         .then(function(response) {
//         console.log(response.json());
//     })

//     render() {
//         return (
//             <div>
//                 {/* {console.log(res.json())} */}
//             </div>
//         )
//     }
// }

// export default NewsApp
