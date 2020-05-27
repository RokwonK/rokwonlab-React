import React from 'react';
import styled from 'styled-components';
import Background from '../image/tree.jpeg';
import me from '../image/me.jpg';
import '../Components/Header.css';
import Header from '../Components/Header';

import {AiFillGithub} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import Markdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import bonbang1 from '../image/bonbang1.jpg';
import bonbang2 from '../image/bonbang2.jpg';
import bonbang3 from '../image/bonbang3.jpg';
import bonbang4 from '../image/bonbang4.jpg';


const subjects = [`# 마인드`, `# 걸어온 길`, `# 프로젝트`];
const sources = [
`
<u>***재미를 원동력으로 앞으로 나아가자***</u>
`,

`

- <span>2016.3.2 ~ </span> Enter 프로그래밍 세계

- <span>2017.5.21 ~ 2019.2.11</span> 나라 지키기

- <span>2019.3.2 ~ </span> 프로그래밍의 재미를 느끼기 시작

- <span>2019.4.1 ~ </span> 다양한 프로그래밍 언어 및 자료구조의 시작

- <span>2019.9.1 ~ </span> 알고리즘에 흥미를 느끼고 PS의 시작

- <span>2019.11.1 ~ 2020.1.23 </span> 상명대 자취방 찾기 앱-본방사수- 개발

- <span>2020.1.10 ~ </span> 본격적인 알고리즘 공부 시작

- <span>2020.4.26 </span> 백준 solved.ac 플레티넘 등극

- <span>2020.4.20 ~  </span> 개인 웹사이트 제작 진행중

`,

`
### 상명대 자취방 찾기 앱-본방사수- 개발

- 시작 
    - 자취방을 구하기 위해 오직 발로만 뛰어야하는걸까?    
    - 학생한테도 크게 부담되는 복비를 내면서 까지 부동산을 이용해야할까? 라는 의문에서 시작

- 기간 : 2019.11.1 ~ 2020.1.23

- 인원 : 개발자 2명(프론트, 백엔드), 디자이너 2명

- 기술
    - 프론트 엔드 => React-Native를 이용한 크로스플랫폼(Class 사용)
    - 백 엔드 => Node.js(Express), Firebase(로그인 구현), Mysql

<img src/> <img src/> <img src/> <img src/>

- 의의
    - 생애 첫 개발 프로젝트
    - 첫 협업
    - 전반적인 흐름에 대한 지식

- 느끼고 배운점
    - 개발에 대한 묘미를 200배 끌어올려준 프로젝트
    - 배움에 대한 재미를 알려줌
    - 시작에 대한 두려움을 완화시켜주고 성취에 대한 행복을 앎

- 보완해야 할 점
    - 최대한 많은 회의를 하며 의견 조율을 빠르게 해야함
    - 끝 목표를 정해놓고 세분화 시키고 각각 나누어서 처리해야함
    - 의견 충돌을 완화, 최대한 주관적인 관점에서 벗어나기



### 개인 웹 사이트 개발

- 시작
    - 배운 기술들을 그때그때 바로 적용해볼 수 있는 나만의 사이트가 있으면 좋지 않을까?
    - 개인 웹사이트를 가지고 싶다는 마음
    - SNS의 기능을 구현해보고 싶음

- 기간 : 2020.4.26 ~ 진행중

- 인원 : 1명(풀스택)

- 기술
    - 프론트 엔드 => Typescript, React(Hooks), Apollo
    - 백 엔드 => Node.js(Express), Graphql, Mongodb
    - 데이터 과학 => 미정

<이미지 넣을곳>

- 의의

- 느끼고 배운점

- 보완해야할 점
`


]

function* imageplus() {
    yield bonbang1;
    yield bonbang2;
    yield bonbang3;
    yield bonbang4;

    yield bonbang1;
    yield bonbang2;
    yield bonbang3;
    yield bonbang4;
}
let gen_image = imageplus();

const parseHtml = htmlParser({
    processingInstructions: [{
        shouldProcessNode: (node:any) =>  {
            return (
                (node && node.name ==='span') ||
                (node && node.name ==='img') ||
                (node && node.name === 'u')
            ) 
        },
        processNode: (node : any) =>  {
            if (node.name === 'span')
                return <node.name style={{color:'red'}}/>
            else if (node.name === 'u') return <node.name />
            else if (node.name === 'img') {
                let gen = gen_image.next().value
                console.log(gen);
                return  <node.name src={gen} style={{width:100, paddingRight:10}}/>
            }
        }
    }]
});


interface Sub {
    index : number;
}

function About_Screen() {

    return(
        <>
            <Header/>
            <Container>
                <Content>About me</Content>
                

                <Info_me>
                    <img src={`${me}`} width="300" height="330"/>
                    

                    {
                        sources.map((sour:string,index:number) => {
                            return (
                                <Subject index={index}>
                                    <SubjectTitle>
                                        <Markdown source={subjects[index]} />
                                    </SubjectTitle>
                                    <SubjectContent>
                                        <Markdown 
                                            source={sour} 
                                            skipHtml={false} 
                                            escapeHtml={false}
                                            astPlugins={[parseHtml]}/>
                                    </SubjectContent>
                                    { index === 0 ? (<SubjectLine />):(null) }
                                </Subject>
                                
                            )
                        })
                    }
                    <More>
                        <Basic className="about">More info</Basic>
                        <span style={{fontSize:15, fontWeight:500}}>• rokwon79@gmail.com</span>
                        <br/>
                        <br/>
                        <a href="https://github.com/RokwonK" target="_blank"><AiFillGithub size={40}/></a>
                        <a href="https://www.facebook.com/profile.php?id=100006676302174" target="_blank"><FaFacebook size={40}/></a>
                        
                        
                        <div style={{paddingBottom:100}}/>
                    </More>

                </Info_me>
                
            </Container>
        </>
    )
}

const Container = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
`;

const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50vw;
    height:30vh;
    border-bottom:0.1mm ridge rgb(0,0,0,0.2);
    font-size: calc(23px + 3vh);
    color:black;
    margin-bottom:50px;
`;

const Info_me = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:5vh;
    background-color:white;    
`;

const Subject = styled.div<Sub>`
    display:flex;
    flex-direction:column;
    align-items:${ props => {
        if(props.index == 0) return 'center'
    }};
    margin-top:50px;
    padding-bottom:50px;
    width:40vw;
    font-size: 18px;
    :after{
        content: "";
        border-bottom:0.1mm ridge rgb(0,0,0,0.2);
        margin-top:${ props => {
            if (props.index == 0) return '0'
            else return '100px'
        }};
        margin-left:30%;
        margin-right:30%;
    }
    @media (max-width: 1200px) {
        width: 50vw;
    }
    @media (max-width: 900px) {
        width: 80vw;
    }
    @media (max-width: 500px) {
        width: 90vw;
    }
`;

const SubjectTitle = styled.div`
    
    text-align:center;
    font-weight:bold;
`;

const SubjectContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    justify-items:center;
    align-items:flex-start;
    font-size: 20px;
`;

const SubjectLine = styled.div`
    margin-top:100px;
    width:40%;
    border-bottom:0.1mm ridge rgb(0,0,0,0.2);

`



const Basic = styled.span`
    font-size:40px;
    padding-bottom:20px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const More = styled.div`
    a:link, a:visited, a:hover {
        color:black;
    }
`;


export default About_Screen;