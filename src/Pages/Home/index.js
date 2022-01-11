import React, { useState } from 'react';
import { Container, ContainerSearch, ContainerShow, FormContainer, Inputcity, Logo, Showtemp, ShowtempContainer, SubmitButton, Title, TitleContainer } from './style.js';
import Logoscr from '../../assets/logo.png'


function Home() {

    const APIsearch = async() => {
        const APIkey = "96c1b86defea1082993c78d26f152776"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${Name}&units=metric&lang=pt_br&appid=${APIkey}`
        const response = await fetch(URL);
        const dados = await response.json();
        if(!response.ok){
            setDados(null)
            setErro(true)
        }else{
            console.log(dados)
            setDados(dados)
            setErro(false) 
        }
    };

    const PressEnterkeydetected = (event) => {
        if (event.key === 'Enter'){
            APIsearch()
        }
    }


    const [Name, setName] = useState(""); // nome da cidace
    const [Dados, setDados] = useState(null)
    const [Erro, setErro] = useState(false)
    
    return (
        <Container>
            <ContainerShow>
                <TitleContainer paddingtop="100px">
                    <Title size="50px;" shadow>{Dados == null ? " " : Dados.name + ", "} {Dados == null ? " " : Dados.sys.country}</Title>
                </TitleContainer>
                <ShowtempContainer>
                <Showtemp>
                    <Title size="40px" color='black'>Tempo agora:</Title>
                    <Title size="40px" color='black'>Sensação térmica:</Title>
                    <Title size="40px" color='black'>Max. Temp:</Title>
                    <Title size="40px" color='black'>Min. Temp:</Title>
                    <Title size="40px" color='black'>Umidade:</Title>
                </Showtemp>
                <Showtemp>
                    <Title>{Dados == null ? 0 : Math.ceil(Dados.main.temp)}ºC</Title>
                    <Title>{Dados == null ? 0 : Math.ceil(Dados.main.feels_like)}ºC</Title>
                    <Title>{Dados == null ? 0 : Math.ceil(Dados.main.temp_max)}ºC</Title>
                    <Title>{Dados == null ? 0 : Math.ceil(Dados.main.temp_min)}ºC</Title>
                    <Title>{Dados == null ? 0 : Math.ceil(Dados.main.humidity)}%</Title>
                </Showtemp>
                </ShowtempContainer>
            </ContainerShow>
            <ContainerSearch>
                <TitleContainer paddingtop="40px">
                    <Logo src={Logoscr} alt="Logo"/>
                    <Title shadow>Weather Forecast</Title>  
                </TitleContainer>
                <FormContainer>
                    <Inputcity type="text" placeholder='Ex: São Paulo' value={Name} onChange={(e) => setName(e.target.value)} onClick={()=>setName("")} onKeyPress={(e) => PressEnterkeydetected(e)}/>
                    <SubmitButton type='button' onClick={APIsearch}>Search</SubmitButton>
                </FormContainer>
                {Erro === true? <Title size="17px" color='red'>Infelizmente não temos essa cidade no nosso Banco de Dados ainda.</Title> : null}
            </ContainerSearch>
        </Container>
    )
}

export default Home;