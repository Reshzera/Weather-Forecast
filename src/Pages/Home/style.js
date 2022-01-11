import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ContainerSearch = styled.div`
    background: linear-gradient(rgba(59, 91, 203, 0.7)10%, rgba(255,255,255,0.8)80%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40vw;
    height:100vh;
    box-shadow: 10px 30px 50px 20px black;
`;
export const ContainerShow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vw;
    height:100vh;

`;

export const SubmitButton = styled.button`
  display: inline-block;
  color: white;
  background-color: #306bad;
  font-size: 14px;
  text-align: center;
  margin: 1em;
  padding: 10px 10px;
  border: 2px solid #aaaaaa;
  border-radius: 20px;
  display: block;
  width: 30%;
  transition: transform 150ms;
  :active {
    background-color: #81acdc;
    transform: scale(1.1);
  }
`;

export const Inputcity = styled.input`
padding: 12px;
margin: 15px;
width: 70%;
color: white;
background: rgba(78, 27, 171, 0.4);
border: 3px solid #4e1bab;
border-radius: 20px;
&::-webkit-input-placeholder {
    color: white;
  }
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
`;

export const ShowtempContainer = styled.div`
width: 70%;
height: 20em;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
background-color: rgba(192, 192, 192, 0.8);
border-radius: 40px;
box-shadow: 10px 10px 60px 20px black;
`;

export const TitleContainer =  styled.div`
    display: flex;
    position: absolute;
    width: 40vw;
    top: 0px;
    padding: ${props => props.paddingtop || "20px"};
    align-items: center;
    justify-content: center;
`;
export const Title = styled.span`
    font-family: Roboto;
    font-weight: bold;
    font-size: ${props => props.size || "45px"};
    color: ${props => props.color || "white"};
    text-shadow: ${props => props.shadow ? "black 0.1em 0.1em 0.1em" : "white"};
`;
export const Logo = styled.img`
    width: 5em;
    height: 5em;
    margin-right: 15px;
`;
export const Showtemp =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: justify;
`