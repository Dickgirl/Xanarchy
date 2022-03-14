const root = document.querySelector("#root");

// Styles
const bodyStyles = {
  background: "-webkit-gradient(linear, left top, right top, color-stop(0%, transparent), color-stop(50%,red), color-stop(100%,transparent))",
  background: "-webkit-linear-gradient(left, transparent 0%,red 50%,transparent 100%)", /* Chrome10+, Safari5.1+ */
  background: "-moz-linear-gradient(left, transparent 0%,red 50%,transparent 100%)", /* FF3.6+ */
  background: "linear-gradient(to bottom right,#ff5555 40%,#5555ff 100%)",
  width: "100%",
  height: "100vh",
  overflowX: "hidden" };

const headerStyles = {
  textAlign: "center",
  color: "#fff" };

const cardContainerStyles = {
  width: "300px",
  height: "500px",
  background: "#fff",
  borderRadius: 35,
  boxShadow: "1px 1px 35px #444" };

const imgContainerStyles = {
  backgroundColor: "#fff",
  height: "35%",
  margin: 0,
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35,
  background: "#444",
  backgroundSize: "cover" };

const avatarContainerStyles = {
  width: "150px",
  height: "150px",
  zIndex: "9",
  position: "relative",
  top: "-85px",
  left: "65px",
  right: "0",
  margin: "0 auto",
  border: "10px solid #fff",
  background: "#000",
  backgroundSize: "cover",
  display: "inline-block",
  textAlign: "center",
  borderRadius: "50%" };

const titleStyles = {
  color: "#555",
  fontWeight: "100",
  outline: "none",
  margin: "0px",
  display: "inline-block",
  width: "100%",
  textAlign: "center",
  position: "relative",
  top: "-75px" };

const subTitleStyles = {
  position: "relative",
  top: "-95px",
  textAlign: "center",
  fontWeight: "100",
  color: "#888" };

const bioContainerStyles = {
  position: "relative",
  top: "-95px" };

const bioStyles = {
  color: "#444",
  padding: "0 30px",
  textAlign: "center" };

const iconsContainerStyles = {
  position: "relative",
  top: "-85px",
  textAlign: "center" };

const iconStyles = {
  margin: "0 10px",
  color: "#5C6BC0",
  fontSize: "24px" };

const cardBackStyles = {
  height: 500,
  width: 300,
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "35px",
  boxShadow: "1px 1px 35px #444",
  background: "')",
  backgroundSize: "cover",
  backgroundPosition: "right" };

const madeByStyles = {
  color: "#fff",
  opacity: ".5",
  textAlign: "center",
  padding: "0px" };


const imgStyles = {
  width: 300,
  borderTopRightRadius: 35,
  borderTopLeftRadius: 35 };


const avatarImgStyles = {
  width: "100%",
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  borderRadius: "50%" };


const cardBackImgStyles = {
  height: "100%",
  width: "100%",
  borderRadius: 35,
  position: "absolute" };



// Components
class CardImg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: imgContainerStyles, className: "imgContainer" }, /*#__PURE__*/
      React.createElement("img", { src: this.props.imgSrc, className: "img", style: imgStyles })));


  }}

class CardAvatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: avatarContainerStyles, className: "infoContainer" }, /*#__PURE__*/
      React.createElement("img", { src: this.props.avatarSrc, style: avatarImgStyles })));


  }}

class CardTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "titleDiv" }, /*#__PURE__*/
      React.createElement("h1", { id: this.props.targetId, style: titleStyles, className: "title" }, this.props.title), /*#__PURE__*/
      React.createElement("h4", { style: subTitleStyles, className: "subTitle" }, this.props.subTitle)));


  }}

class CardBio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: bioContainerStyles, className: "bioContainer" }, /*#__PURE__*/
      React.createElement("p", { style: bioStyles, className: "bio" }, this.props.bio)));


  }}

class CardSocialIcons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: iconsContainerStyles, className: "iconContainer" }, /*#__PURE__*/
      React.createElement("span", { style: iconStyles, className: "icons" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-facebook-square" })), /*#__PURE__*/
      React.createElement("span", { style: iconStyles, className: "icons" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-youtube-square" })), /*#__PURE__*/
      React.createElement("span", { style: iconStyles, className: "icons" }, /*#__PURE__*/React.createElement("i", { class: "fab fa-twitter-square" }))));


  }}

class CardBack extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: cardBackStyles, className: "cardBack" }));


  }}


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Exxploiting",
      subTitle: "@Exxploiting",
      bio: "hacked the fbi with my 2 sticks and a nuke",
      direction: "forwards" };

  }
  componentWillMount() {
    if (this.props.type == "wick") {
      this.setState({
        title: "John Wick",
        subTitle: "@HighOctane",
        bio: "People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back." });

    } else if (this.props.type == "groot") {
      this.setState({
        title: "Groot",
        subTitle: "@iAmGroot",
        bio: "I am Groot. I am Groot... I am Groot, I am Groot, I am Groot I am Groot. I am Groot. I am Groot. I am Groot." });

    } else if (this.props.type == "hitgirl") {
      this.setState({
        title: "Mindy Mcready",
        subTitle: "@HitGirl",
        bio: "I can't see through walls but I can kick your ass. I think some tasers look gay. Robin wishes he was me." });

    }
  }
  render() {

    return /*#__PURE__*/(
      React.createElement("div", { className: "flipperContainer" }, /*#__PURE__*/
      React.createElement("div", { className: "flipper" }, /*#__PURE__*/
      React.createElement("div", { style: cardContainerStyles, className: "cardFront cardContainer" }, /*#__PURE__*/
      React.createElement(CardImg, { imgSrc: this.props.imgSrc }), /*#__PURE__*/
      React.createElement(CardAvatar, { avatarSrc: this.props.avatarSrc }), /*#__PURE__*/
      React.createElement(CardTitle, { targetId: this.props.targetId, title: this.state.title, subTitle: this.state.subTitle }), /*#__PURE__*/
      React.createElement(CardBio, { bio: this.state.bio }), /*#__PURE__*/
      React.createElement(CardSocialIcons, null)), /*#__PURE__*/

      React.createElement("div", { style: cardBackStyles, className: "cardBack" }, /*#__PURE__*/
      React.createElement("img", { className: "cardBackImg", style: cardBackImgStyles, src: this.props.cardBackImgSrc }), /*#__PURE__*/
      React.createElement("p", { style: madeByStyles }, "@AdamTheWizard")))));




  }}

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { style: bodyStyles, className: "body" }, /*#__PURE__*/
      React.createElement("h1", { style: headerStyles, className: "header" }, "Hover to flip"), /*#__PURE__*/
      React.createElement("div", { className: "flex" }, /*#__PURE__*/

      React.createElement(Card, { imgSrc: "http://1.bp.blogspot.com/-tso_pF4jEdU/UPC4zDXEY6I/AAAAAAAAAhE/Vb2Cd8nRZEo/s1600/a.jpg", avatarSrc: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-avatar-sam-worthington.jpg", cardBackImgSrc: "https://i.pinimg.com/564x/1e/7e/4d/1e7e4d11c01e57f32410ece8c1961646.jpg", targetId: "navi" }), /*#__PURE__*/

      React.createElement(Card, { type: "wick", imgSrc: "https://orig00.deviantart.net/db12/f/2012/038/5/0/blood_splatter_background_by_pudgey77-d4ozy89.jpg", avatarSrc: "https://66.media.tumblr.com/3d3f6bb97ca2507b4aa679c205b7ae4d/tumblr_pitd3ejkzw1wcgykbo1_640.jpg", cardBackImgSrc: "https://i.pinimg.com/736x/b1/2d/9f/b12d9f259a178fc9dc7bfb6447be7a1c.jpg" }), /*#__PURE__*/

      React.createElement(Card, { type: "groot", imgSrc: "https://wallpaperaccess.com/full/279729.jpg", avatarSrc: "https://i.pinimg.com/originals/74/4d/b3/744db3fd9842133829be6e0182c3d62d.jpg", cardBackImgSrc: "https://pre00.deviantart.net/0274/th/pre/i/2014/357/0/d/guardians_of_the_galaxy___groot_poster__acrylic__by_cybergal2013-d8aydlf.jpg" }), /*#__PURE__*/

      React.createElement(Card, { type: "hitgirl", imgSrc: "https://media.giphy.com/media/Y6pDMTysYTQ2I/giphy.gif", avatarSrc: "https://66.media.tumblr.com/dcf6558ccad075ce4cca03cc1d972f97/tumblr_phhrt8PrRE1tc5gvpo4_250.png", cardBackImgSrc: "https://i.pinimg.com/564x/22/f1/3e/22f13ea035bc11beeeb1349550fb3170.jpg" }))));



  }}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(CardContainer, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
