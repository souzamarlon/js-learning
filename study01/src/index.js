import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const name = {Name1: "Marlon", Name2:"Jose"};


// function tick(){
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(

//         element,
//         document.getElementById('root')
//       );

// }
// setInterval(tick, 1000)

// function Welcome(props){
//     return<h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Marlon"/>

// ReactDOM.render(

//             element,
//             document.getElementById('root')
//           );

// function UserInfo(props){
//     return(
//         <div className="MarlonBlz!">
//         <div className="MarlonYeah!"></div>
//         </div>

//     );
// }




// function Comment(props){
//     return(
//         <div className="Comment-text">
//             {props.text}
//         </div>

//     );
// }

// const comment ={

//     text: 'Testando!',
// }


// ReactDOM.render(

//     <Comment
//     text={comment.text}
//     />,
//     document.getElementById('root')
// );


// class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date: new Date()};
//     }

//     componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );

//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID);

//     }

//     tick(){
//         this.setState({
//             date: new Date()
//         });
//     }

//     render(){
//     return(
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>Its {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
// }


//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );


// // setInterval(tick, 1000);

{/* <button onClick={activateLasers}>
    Ativar lasers
</button> */}


// function ActionLink(){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('O link foi clicado.');

//     }
// }
// return (
//     <a href='#' onClick={handleClick}>
//         Clique aqui
//     </a>
// )

// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {isToggleOn: true};

//         //Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback.
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }
//     render(){
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }


// class LogButton extends React.Component{




//     render(){
//         <button onClick={(e) => this.deleteRow(id, e)}>Deletar linha</button>
//         }
// }

// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }

//     handleLoginClick(){
//         this.setState({isLoggedIn: true});
//     }

//     handleLogoutClick(){
//         this.setState({isLoggedIn: false});
//     }

//     render(){
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;

//         if(isLoggedIn){
//             button = <LogoutButton onClick={this.handleLogoutClick}/>;
//         }else{
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>

//         );
//     }
// }



// function UserGreeting(props){
//     return <h1>Welcome back!</h1>;
// }
// function GuestGreeting(props){
//     return <h1>Please sign up.</h1>
// }

// function LoginButton(props){
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// function LogoutButton(props){
//     return(
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }



// function Greeting(props){

//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn){
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }

// ReactDOM.render(

//     <LoginControl/>,
//     document.getElementById('root')
// )

// function Mailbox(props){
//     const unreadMessages = props.unreadMessages;
//     return(

//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 && 
//             <h2>
//                 You have {unreadMessages.length} unread messages.
//             </h2>

//             }
//         </div>
//     );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(

//     <Mailbox unreadMessages={messages}/>,
//     document.getElementById('root')
// )

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li>{number}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }

//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );

// function NumberList(props) {

// const listItems = numbers.map((number) =>
//   <li key={number.toString()}>
//     {number}
//   </li>
// );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );


///////////      ARROW FUNCTION!!!!!!!!!! //////////////////
////////////////////////////////////////////////////////////
// const mexico = ['Leon', 'Guanajuato', 'Queretaro']

// const loveArrowSingle = mexico.map(name => {
//     return `I love ${name}!`;
// }
// )

// const loveClean = mexico.map(name => `I love ${name}!`);


// const loveF = mexico.filter(name => name === 'Guanajuato')
//               .map(name => `I love ${name}!`)

// alert(loveF)

////////////////////// TEMPLATE LITERALS
// const mexico = {
//     live: 'Leon',
//     love: 'Guanajuato'
// };

// const newTemplate = `Eu moro em ${mexico.live} e amo ${mexico.love}!`;

// const newFruits = `Banana
// orange
// apple`

// alert(newFruits)


// const article = {
//     title: 'Desktop ou notebook',
//     intro: 'Muitas pessoas me perguntam, mas não sei, espero ter ajudado!!!',
//     body: 'Pensa em um texto grande...',
//     tag: ['Desktop', 'notebook', 'smartphones'],
//     author: 'Marlon'
// };

// function renderAuthor(name){
//     return (name) ? name : 'unknown';
// }

// const markup = `
//    <article>
//    <header><h1>${article.title}
//    </h1>
//    </header>
//    <section><p>${article.intro}</p></section>
//    <footer><ul>${article.tag.map((tag) => `<li>${tag}</li>`).join('')}
//    </ul>
//    <p>Author: ${renderAuthor(article.author)}</p>
//    </footer>

//    </article>

// `;

// document.body.innerHTML = markup;

// class Animal{
//     constructor(kind, sound){
//         this.kind = kind;
//         this.sound = sound;

//     }

//     hello(){
//         console.log(`${this.sound} I am a ${this.kind}`);
//     }

//     static info(){
//         console.log('This class create animals!');
//     }

//     get name(){
//         console.log(`${this.sound} My name is Marlon!`);
    
//     }
// }

// const dog = new Animal('dog', 'auau');
// const cat = new Animal('cat', 'miau');


// Animal.info()

  