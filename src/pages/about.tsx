import React from 'react';

export default () => {
    return (
        <>
            <section style={{
                
                textAlign: 'center',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/datacenter.jpg")',
                backgroundSize: 'cover'
            }}>
                <h1 style={{
                    color: 'white',
                    paddingBottom: '24px'
                }}>History</h1>
                <p style={{
                    margin: 'auto',
                    padding: '8px 16px',
                    fontSize: '20px',
                    lineHeight: 1.5,
                    maxWidth: '1080px',
                    color: 'white',
                    backgroundColor: '#00000088'
                }}>The Computer Science Association was founded by Al Tareen and Eduardo Moya in
                    2019. While attending Houston Community College Northwest in Fall of 2019,
                    Al Tareen and Eduardo Moya noticed there were no computer-science organizations
                    available. Countless students desired a computer science organization. With
                    enough support from the faculty and students, the cabinet worked hard to lay the
                    foundations of the organization and together launched the Computer Science
                    Association. CSA became officially recognized at HCC NW on November 7th, 2019.</p>
            </section>
            <section
                style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center'
                }}>
                <div>
                    <header style={{verticalAlign: 'middle'}}>
                        <h4 style={{
                                display: 'inline-block',
                                fontSize: '40px',
                                color: 'rgb(19,13,79)',
                                margin: 'auto'}}><strong>MISSION &nbsp;</strong></h4>
                        <img src="assets/img/Mission.png" style={{
                            display: 'inline-block',
                            width: '70px'}} />
                    </header>
                    <p style={{
                            color: 'rgb(8,15,51)',
                            fontSize: '16px',
                            marginTop: '15px'}}>
                        <strong>CSA TRAINS, PREPARES, AND UNITES STUDENTS FOR THE EVER-CHANGING TECHNOLOGICAL FRONTIERS TO ENSURE THAT OUR MEMBERS ARE THE PIONEERS OF NEW TECHNOLOGIES.</strong><br/></p>
                </div>
                <div>
                    <h4 style={{fontSize: '40px',color: 'rgb(19,13,79)'}}><strong>VALUES &nbsp;</strong></h4>
                    <img src="assets/img/Values.png" style={{width: '90px',marginTop: '-14px'}} />
                    <p style={{
                        fontSize: '16px',color: 'rgb(8,15,51)',marginTop: '-1px',paddingBottom: '2px'}}><strong>INSPIRE</strong><br/><strong>OVERCOME</strong><br/><strong>INNOVATE</strong><br/><strong>DISRUPT</strong><br/><br/></p>
                </div>
                <div>
                    <h4 style={{fontSize: '40px',color: 'rgb(19,13,79)'}}><strong>VISION &nbsp;</strong></h4>
                    <img src="assets/img/Vision.png" style={{width: '100px',marginTop: '-51px',paddingTop: '65px',paddingBottom: '20px'}}/>
                    <p style={{fontSize: '16px',color: 'rgb(8,15,51)',marginTop: '-8px',paddingBottom: '26px'}}><strong>CSA visions a future where our members become futurists and creates disruption in industries through digitalization or automation.</strong></p>
                </div>
            </section>
        </>
    );
}